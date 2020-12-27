import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { matchPath, Route, StaticRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Helmet } from 'react-helmet'
import serialize from 'serialize-javascript'
import fetch from 'node-fetch'
import routes from './src/routes'
import store from './src/redux/store'

global.fetch = fetch
const app = express()

app.use(express.static('dist'))
app.get('*', (req, res) => {
    const promises = []

    routes.some(route => {
        const match = matchPath(req.path, route)

        if (match && route.loadData)
            promises.push(route.loadData(store))

        return match
    })

    Promise.all(promises)
    .then(() => {
        const context = {}
        const markup = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                    <div>
                        <Switch>
                            {routes.map((route, i) => (
                                <Route key={i} {...route} />
                            ))}
                        </Switch>
                    </div>
                </StaticRouter>
            </Provider>
        )
        const helmet = Helmet.renderStatic()
        const html = `
            <!DOCTYPE html>
            <html ${helmet.htmlAttributes.toString()}>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
            </head>
            <body ${helmet.bodyAttributes.toString()}>
                <div id="root">${markup}</div>
                <script>
                    window.__PRELOADED_STATE__ = ${serialize(store.getState())}
                </script>
                <script src="bundle.js"></script>
            </body>
            </html>
        `

        if (context.status)
            res.status(context.status)

        res.send(html)
    })
})

app.listen(3000, () => console.log('Server is running'))