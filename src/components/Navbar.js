import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/" activeClassName="active">Home</NavLink>
            <br />
            <NavLink to="/users" activeClassName="active">Users</NavLink>
            <br />
            <NavLink to="/error" activeClassName="active">Error</NavLink>
        </nav>
    )
}

export default Navbar