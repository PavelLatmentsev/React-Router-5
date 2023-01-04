import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import UsersProfilePage from '../page/userProfilePage';
import UsersEditPage from '../page/userEditPage';
import UsersListPage from '../page/usersListPage';
const UsersLayouts = () => {
    const { path } = useRouteMatch();
    return (
        <div>
            <h1>UsersLayouts</h1>
            <NavLink to={"/"}>  <h3> Main Page</h3></NavLink>
            <BrowserRouter>
                <Switch>
                    <Route path={path + "/:userId/profile"} component={UsersProfilePage} />
                    <Route path={path + "/:userId/edit"} component={UsersEditPage} />
                    <Route path={path} exact component={UsersListPage} />
                    <Redirect from={path + "/:userId"} to={path + "/:userId/profile"} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default UsersLayouts;