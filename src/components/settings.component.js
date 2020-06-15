import React, { Component } from "react";
import BasicInformation from "./basicinformation.component";
import ChangePassword from "./changepassword.component";
import PaymentSettings from "./paymentsettings.component";

export default class Settings extends Component {
  render() {
    return (
      <div className="d-flex flex-row">
        <div
          className="nav flex-column nav-pills pr-4"
          id="v-pills-tab"
          role="tablist"
          style={{ minWidth : "300px" }}
          aria-orientation="vertical"
        >
          <a
            className="nav-link active"
            id="v-pills-home-tab"
            data-toggle="pill"
            href="#v-pills-home"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            Basic Information
          </a>
          <a
            className="nav-link"
            id="v-pills-profile-tab"
            data-toggle="pill"
            href="#v-pills-profile"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            Change Password
          </a>
          <a
            className="nav-link"
            id="v-pills-messages-tab"
            data-toggle="pill"
            href="#v-pills-messages"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >
            Saved Cards
          </a>
        </div>
        <div className="tab-content" id="v-pills-tabContent" style={{ width :"calc(100vw - 400px)", maxWidth: "600px" }}>
          <div
            className="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            <BasicInformation></BasicInformation>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            <ChangePassword></ChangePassword>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
          >
            <PaymentSettings></PaymentSettings>
          </div>
        </div>
      </div>
    );
  }
}
