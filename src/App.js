import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import MainPage from './page/mainPage';
import UsersLayouts from './layouts/userLayouts';
function App() {
  return (
    <div className="App">
      <h1>App Layout</h1>
      <BrowserRouter>
        <Switch>
          <Route path={"/"} exact component={MainPage} />
          <Route path={"/users"} component={UsersLayouts} />
          <Redirect to={"/"} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
