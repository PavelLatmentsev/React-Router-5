import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

const UsersProfilePage = () => {
    const { userId } = useParams();
    return (
        <div>
            <h1>User Page</h1>
            <div>
                <ul>
                    <li>
                        <NavLink to={"/users"}><h3>UserListPage</h3></NavLink>
                    </li>
                    <li>
                        <NavLink to={`/users/${userId}/edit`}><h3>UserEditPage</h3></NavLink>
                    </li>
                </ul>
            </div>
            <h1>User:{userId}</h1>
        </div>);
}

export default UsersProfilePage;