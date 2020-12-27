import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Layout from './Layout'
import Status from './Status'

const NotFound = () => {
    return (
        <Status code={404}>
            <Layout>
                <Helmet>
                    <title>404</title>
                </Helmet>

                <div>
                    <h1>Error 404</h1>
                    <Link to="/">Return to home</Link>
                </div>
            </Layout>
        </Status>
    )
}

export default NotFound