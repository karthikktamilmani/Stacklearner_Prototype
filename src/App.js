import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js/dist/popper.min.js";
import "jquery/dist/jquery.slim.min.js";
import "jquery/dist/jquery.min.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from "./components/signup.component";
import "font-awesome/css/font-awesome.min.css";
import Dashboard from "./components/dashboard.component";
import Settings from "./components/settings.component";
import logoWhite from "./assets/logo-white.png";
import footerBg from "./assets/background.svg";
import Payment from "./components/payment.component";
import Discussion from "./components/discussion.component";

function App() {
  const isSignin = window.location.href.match("sign-in");
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-primary shadow py-2" style={isSignin ? { display: "none" } : {}}>
          <div className="container">
            <a className="navbar-brand ml-2" href="#id">
              <img src={logoWhite} alt="" height="28" />
            </a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    to={"/sign-in"}
                    >
                    <i className="fa fa-bell" aria-hidden="true"></i>
                    <span class="badge badge-light">1</span>
                    <span class="align-middle">Karthikk TamilMani</span>
                  </Link>
                  <div class="dropdown-menu dropdown-menu-right animate appear">
                    <a class="dropdown-item font-sm" href="#id">
                      <i class="fa fa-bullhorn" aria-hidden="true"></i>{" "}
                        &nbsp;Welcome to Stacklearner. Happy learning!
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <nav className="navbar navbar-expand-lg navbar-light bg-light shadow py-2">
            <div className="container">
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="/dashboard">
                      Home
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to="" className="nav-link">Catalog</Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/payment">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/discussion">
                      Forum
                    </a>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto icon-section" style={isSignin ? { display: "none" } : {}}>
                  <li className="nav-item mr-2">
                    <a className="nav-link" href="/settings" data-toggle="tooltip" title="User Settings">
                      <i class="fa fa-cog" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/sign-in" data-toggle="tooltip" title="logout">
                      <i class="fa fa-sign-out" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <section className="auth-wrapper">
            <div
              className="d-flex justify-content-center mt-3"
              style={{ maxWidth: "1100px", margin: "0 auto", width:"100%", height: "fit-content" }}
              >
              <Switch>
                <Route path="/dashboard" component={Dashboard} isPrivate />
                <Route path="/register" component={SignUp} />
                <Route path="/settings" component={Settings} />
                <Route path="/payment" component={Payment} />
                <Route path="/discussion" component={Discussion} />
                <Route component={SignUp} />
              </Switch>
            </div>
          </section>

          <footer className="footer">
            <img src={footerBg} class="footer-bg" alt=""/>
            <div class="footer-wrapper">
              <div className="footer-copyright">
                <div class="flex-row content d-flex justify-content-around">
                  <div class="flex-column w-50 text-left">
                    <h4>About</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                  <div class="flex-column text-left">
                    <h4>Catalog</h4>
                    <ul class="list-unstyled">
                      <li>Introduction to HTML5</li>
                      <li>React JS - Advanced</li>
                      <li>Web developement</li>
                      <li>Jquery</li>
                    </ul>
                  </div>
                  <div class="flex-column text-left">
                    <h4>Quick Links</h4>
                    <ul class="list-unstyled">
                      <li>Home</li>
                      <li>Catalog</li>
                      <li>Pricing</li>
                      <li>Forum</li>
                    </ul>
                  </div>
                </div>
                <div class="flex-row text-left section">
                  © 2020 Copyright:
                  <span class="text-primary"> stacklearner.com</span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    );
  }

  export default App;
