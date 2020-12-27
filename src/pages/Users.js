import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import UsersList from '../components/UsersList'

const Users = () => {
    return (
        <Layout>
            <Helmet>
                <title>Users</title>
                <meta property="og:title" content="Users" />
            </Helmet>

            <h1>Users</h1>
            <UsersList />
        </Layout>
    )
}

export default Users