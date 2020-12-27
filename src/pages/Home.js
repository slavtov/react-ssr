import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'

const Home = () => {
    return (
        <Layout>
            <Helmet>
                <title>Home</title>
                <meta property="og:title" content="Home" />
            </Helmet>

            <h1>Home</h1>
            <p>React SSR</p>
        </Layout>
    )
}

export default Home