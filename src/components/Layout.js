import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <div className="App">
            <Helmet
                defaultTitle="React SSR"
                titleTemplate="React SSR - %s"
            />

            <Navbar />
            {children}
        </div>
    )
}

export default Layout