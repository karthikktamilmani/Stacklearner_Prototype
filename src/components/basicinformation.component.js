import React, { Component } from "react";
import Swal from 'sweetalert2';

export default class BasicInformation extends Component {
  constructor(props) {
    super(props);

    // dynamic binding is required
    this.state = {
      email: "kr630601@dal.ca",
      name: "Karthikk Tamil Mani"
    };
  }

  onSubmitInfo = (event) => {
    event.preventDefault();
    Swal.fire(
      'Success!',
      'Your information has been updated.',
      'success'
    )
  };

  render() {
    return (
      <div>
        <form className="flex-column" onSubmit={this.onSubmitInfo}>
          <div className="form-group text-left">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              value={this.state.email}
              required
              disabled
            />
          </div>

          <div className="form-group mt-3 text-left">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              defaultValue={this.state.name}
              required
              minLength="8"
            />
          </div>

          <div className="form-group mt-3 text-left">
            <label>University</label>
            <input type="text" className="form-control" name="university" />
          </div>

          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              name="user_name"
              minLength="8"
            />
          </div>

          <div className="form-group mt-3">
            <label>Location</label>
            <input type="text" className="form-control" name="location" />
          </div>

          <div className="form-group mt-3">
            <label>Github</label>
            <input type="text" className="form-control" name="Github" />
          </div>

          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}
