import React, { Component } from "react";
import Swal from "sweetalert2";

export default class ChangePassword extends Component {
  constructor(props) {
    super(props);

    // dynamic binding is required
    this.state = {
      email: "kr630601@dal.ca",
    };

    this.customValidation = this.customValidation.bind(this);
  }
  customValidation = (element) => {
    const formEle = element.target.form;
    if (formEle.new_password.value === formEle.confirm_password.value) {
      formEle.confirm_password.setCustomValidity("");
    } else {
      formEle.confirm_password.setCustomValidity("Passwords should match");
    }
  };

  updatePassword = (event) => {
    event.preventDefault();
    Swal.fire(
      'Success',
      'Password changed successfuly!',
      'success'
    );
  }

  render() {
    return (
      <div>
        <form className="flex-column" onSubmit={this.updatePassword}>
          <div className="form-group text-left">
            <label> Current Password </label>{" "}
            <input
              type="password"
              className="form-control"
              name="password"
              required
            />
          </div>
          <div className="form-group mt-3 text-left">
            <label> New Password </label>{" "}
            <input
              type="password"
              className="form-control"
              name="new_password"
              required
              minLength="8"
            />
          </div>
          <div className="form-group mt-3 text-left">
            <label> Confirm Password </label>{" "}
            <input
              type="password"
              className="form-control"
              name="confirm_password"
              onChange={this.customValidation}
              required
              minLength="8"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save{" "}
          </button>{" "}
        </form>{" "}
      </div>
    );
  }
}
