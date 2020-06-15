import React, { Component } from "react";
import logo from "../assets/logo-vertical.png";
import './signup.scss';
import Swal from 'sweetalert2';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.customValidation = this.customValidation.bind(this);
    this.state = {
      isLoading: false,
      isCreatingAcc: false
    }
  }

  customValidation = (element) => {
    const formEle = element.target.form;
    if (formEle.password.value === formEle.confirm_password.value) {
      formEle.confirm_password.setCustomValidity("");
    } else {
      formEle.confirm_password.setCustomValidity("Passwords should match");
    }
  };

  onSubmitRegister = (event) => {
    event.preventDefault();

    this.setState({
      isCreatingAcc: true
    })
    setTimeout(() => {
      Swal.fire({
        title: 'Thank You!',
        text: "You have successfuly registered with stackleaner. Click proceed to start learning",
        icon: 'success',
        confirmButtonColor: '#EE0E51',
        confirmButtonText: 'Proceed'
      }
    ).then(() => {
      window.location.href = "/dashboard" ;
    });
    this.setState({
      isCreatingAcc: false
    });
  }, 1500);
};

onSubmitLogin = (event) => {
  event.preventDefault();

  this.setState({
    isLoading: true
  })
  setTimeout(() => {
    window.location.href = "/dashboard" ;
    this.setState({
      isLoading: false
    });
  }, 1500);
};

forgotPassword = () => {
  Swal.mixin({
    input: 'email',
    confirmButtonText: 'Next &rarr;',
    showCancelButton: true,
    confirmButtonColor: '#EE0E51',
    progressSteps: ['1']
  }).queue([
    {
      title: 'Forgot password',
      text: 'Enter your registered email'
    }
  ]).then((result) => {
    if (result.value) {
      const answers = JSON.stringify(result.value.join(""))
      Swal.fire({
        title: 'Email Sent!',
        html: `
        A reset link is sent to your email address
        <b>${answers}</b>. Please check your inbox.
          `,
          confirmButtonColor: '#EE0E51',
          confirmButtonText: 'Ok'
        })
      }
    })
  }

  render() {
    const { onSubmitRegister, onSubmitLogin, customValidation } = this;
    return (
      <div className="d-flex justify-content-center home-wrapper">
        <div className="flex-column align-items-center">
          <img src={logo} alt="stackleaner" class="logo-vertical"></img>
        </div>
        <div className="flex-column">
          <div
            className="nav nav-pills pr-4"
            id="v-pills-tab"
            role="tablist"
            >
            <a
              className="nav-link active"
              id="v-pills-signin-tab"
              data-toggle="pill"
              href="#v-pills-signin"
              role="tab"
              aria-controls="v-pills-signin"
              aria-selected="true"
              >
              Sign In
            </a>
            <a
              className="nav-link"
              id="v-pills-signup-tab"
              data-toggle="pill"
              href="#v-pills-signup"
              role="tab"
              aria-controls="v-pills-signup"
              aria-selected="false"
              >
              Sign Up
            </a>
          </div>
          <div className="tab-content" id="v-pills-tabContent" style={{ width :"calc(100vw - 400px)", maxWidth: "600px" }}>
            <div
              className="tab-pane fade show active"
              id="v-pills-signin"
              role="tabpanel"
              aria-labelledby="v-pills-signin-tab"
              >
              <div className="flex-row mt-5 w-75">
                <form
                  className="mb-2"
                  onSubmit={onSubmitLogin}
                  id="loginForm"
                  >
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="john.doe@yourdomain.com"
                      name="email"
                      required
                      />
                  </div>

                  <div className="form-group mb-1">
                    <label>Password</label>

                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      required
                      minLength="8"
                      />
                  </div>
                  <button type="button" class="btn btn-link text-sm" onClick={this.forgotPassword}>Forgot Password?</button>

                  <button type="submit" className="btn btn-primary w-100 mt-4 py-2">
                    Login&nbsp;&nbsp;
                    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" style={!this.state.isLoading ? { display: "none" } : {}}></span>&nbsp;
                    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" style={!this.state.isLoading ? { display: "none" } : {}}></span>
                    </button>
                  </form>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-signup"
                role="tabpanel"
                aria-labelledby="v-pills-signup-tab"
                >
                <div className="flex-row mt-5 w-75">
                  <form onSubmit={onSubmitRegister}>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="john.doe@yourdomain.com"
                        name="email"
                        required
                        />
                    </div>

                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        required
                        minLength="8"
                        />
                    </div>

                    <div className="form-group">
                      <label>Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="confirm_password"
                        required
                        minLength="8"
                        onChange={customValidation}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100 mt-4">
                      Create Account&nbsp;&nbsp;
                      <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" style={!this.state.isCreatingAcc ? { display: "none" } : {}}></span>&nbsp;
                      <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" style={!this.state.isCreatingAcc ? { display: "none" } : {}}></span>
                    </button>
                  </form>
                  <div className="mt-2">
                    <h6>or</h6>
                    <div class="text-center mt-2">
                      <a className="btn p-3 mb-5 google-icon mr-4">
                        <i className="fa fa-google-plus" aria-hidden="true"></i>
                      </a>
                      <a className="btn p-3 mb-5 fb-icon mr-4">
                        <i className="fa fa-facebook-f" aria-hidden="true"></i>
                      </a>
                      <a className="btn p-3 mb-5 twitter-icon">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
