import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../redux/actions/users'
import User from './User'

const UsersList = () => {
    const users = useSelector(state => state.users.items)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    return (
        <div>
            {users.map(user => (
                <User key={user.id} user={user} />
            ))}
        </div>
    )
}

export default UsersList