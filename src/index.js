import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './redux/reducers'
import routes from './routes'

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__
const store = createStore(reducers, preloadedState, applyMiddleware(logger, thunk))

ReactDOM.hydrate(
    <Provider store={store}>
        <Router>
            <div>
                <Switch>
                    {routes.map((route, i) => (
                        <Route key={i} {...route} />
                    ))}
                </Switch>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
)