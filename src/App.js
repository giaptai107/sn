import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import LogIn from "./components/LogIn";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Setting from "./components/Setting";
import { history } from "./helpers/history";


import AuthService from "./services/auth.service";
function App() {
  const [showUser, setUser] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setUser(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };
  return (
    <Router history={history}>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          Mạng xã hội
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Trang chủ
            </Link>
          </li>
          {currentUser && (
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
          )}
          {currentUser && (
            <li className="nav-item">
              <Link to={"/setting"} className="nav-link">
                Cài đặt
              </Link>
            </li>
          )}
          {!currentUser ? (
            <>
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Đăng nhập
              </Link>
              </li>
              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Đăng kí
            </Link>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                Đăng xuất
              </a>
            </li>
          )}

        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/setting" component={Setting} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;