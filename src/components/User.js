import React from 'react'

const User = ({ user }) => (
    <div className="user">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
    </div>
)

export default User