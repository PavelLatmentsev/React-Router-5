import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
const UsersEditPage = () => {
    const { userId } = useParams();
    return (
        <div>
            <h1>Edit User Page</h1>
            <ul>
                <li>
                    <NavLink to={`/users/${userId}/profile`}><h3>UserProfilePage</h3></NavLink>
                </li>
                <li>
                    <NavLink to={`/users/${Number(userId) + 1}/profile`}><h3>AnotherPage</h3></NavLink>
                </li>
                <li>
                    <NavLink to={`/users`}><h3>UsersPage</h3></NavLink>
                </li>
            </ul>
            <h1>
                Edit User:{userId}
            </h1>
        </div>);
}

export default UsersEditPage;