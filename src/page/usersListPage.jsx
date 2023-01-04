import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
const UsersListPage = () => {
    const usersArray = new Array(7).fill("user");
    const { path } = useRouteMatch();
    return (<div><h1>
        UsersListPage</h1>
        <ul>
            {usersArray.map((user, index) => <NavLink to={`${path}/${index}/profile`} key={index}><li><h3>{user + index}</h3></li> </NavLink>)}
        </ul>

    </div>);
}

export default UsersListPage;