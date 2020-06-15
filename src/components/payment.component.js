import React, { Component } from "react";
import $ from "jquery";
import "./payment.scss";
import Swal from "sweetalert2";

export default class Payment extends Component {
  constructor(props) {
    super(props);
    //
    this.isChrome =
      !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

    this.state = {
      plan: {
        plan: "Monthly Plan",
        money: "$10",
        total: "$5",
      },
      cards: [
        {
          card_id: "1",
          name_on_card: "Karthikk",
          card_number: "12*************78",
          expiry: "03/23",
        },
        {
          card_id: "2",
          name_on_card: "User 2",
          card_number: "12*************234",
          expiry: "03/23",
        },
      ],
    };
  }

  toggleAddNewCard = () => {
    let child = $("#newCard_Imp input");
    for (let i = 0; i < child.length; i++) {
      if(child[i].style.display !== "none")
      {
        child[i].required = true;
      }
    }
    child = $("#newCard_Misc input");
    for (let i = 0; i < child.length; i++) {
      if(child[i].style.display !== "none")
      {
        child[i].required = true;
      }
    }
    this.setState({ newCard: true });
  };

  disableAddNewCard = () => {
    let child = $("#newCard_Imp input");
    for (let i = 0; i < child.length; i++) {
      if(child[i].style.display !== "none")
      {
        child[i].required = false;
      }
    }

    child = $("#newCard_Misc input");
    for (let i = 0; i < child.length; i++) {
      if(child[i].style.display !== "none")
      {
        child[i].required = false;
      }
    }
    this.setState({ newCard: false });
  };

  checkoutDetails = (event) => {
    event.preventDefault();
    Swal.fire(
      "Success",
      "Payment success! Continue learning with us.",
      "success"
    );
  };

  cardSelected = (element, price, plan) => {
    //reset all elements selection
    document
      .getElementsByClassName("active-card")[0]
      .classList.remove("active-card");
    element.target.parentElement.classList.add("active-card");
    //
    this.setState({
      plan: {
        plan: plan,
        money: price,
        total: "$" + (parseInt(price.substr(1)) - 5).toString(),
      },
    });
  };

  render() {
    return (
      <div className="flex-column payment-wrapper">
        <div>
          <div className="card-group">
            <div
              className="card mr-2 active-card"
              style={{ minWidth: "18rem" }}
            >
              <a
                className="card-block stretched-link text-decoration-none"
                href="#"
                onClick={(event) => {
                  this.cardSelected(event, "$10", "Monthly");
                }}
              />
              <div className="card-body">
                <h6 class="font-weight-normal">Basic</h6>
                <h2 className="text-center">
                  $10<span class="help-text">/Month</span>
                </h2>
                <ul className="list-unstyled mt-1 mb-4">
                  <li></li>
                </ul>
              </div>
            </div>

            <div className="card mr-2" style={{ minWidth: "18rem" }}>
              <a
                className="card-block stretched-link text-decoration-none"
                href="#"
                onClick={(event) => {
                  this.cardSelected(event, "$50", "Quaterly");
                }}
              />
              <div className="card-body">
                <h6 class="font-weight-normal">Standard</h6>
                <h2 className="text-center">
                  $50<span class="help-text">/quaterly</span>
                </h2>
              </div>
            </div>

            <div className="card mr-2" style={{ minWidth: "18rem" }}>
              <a
                className="card-block stretched-link text-decoration-none"
                href="#"
                onClick={(event) => {
                  this.cardSelected(event, "$90", "Yearly");
                }}
              />
              <div className="card-body">
                <h6 class="font-weight-normal">Pro</h6>
                <h2 className="text-center">
                  $90<span class="help-text">/year</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 d-flex flex-row">
          <div className="flex-column">
            <h5>Billing Address</h5>

            <form onSubmit={this.checkoutDetails}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    required
                    pattern="[a-zA-Z]*"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label>Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    pattern="[a-zA-Z]*"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="1333 South park st"
                  required
                />
              </div>

              <div className="mb-3">
                <label>
                  Address Line 2 <span className="text-muted">(Optional)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address2"
                  placeholder="Apartment or suite"
                />
              </div>

              <div className="row">
                <div className="col-md-5 mb-3">
                  <label>Country</label>
                  <select
                    className="custom-select d-block w-100"
                    id="country"
                    required
                  >
                    <option value="">Choose...</option>
                    <option>Canada</option>
                    <option>U.S.A</option>
                  </select>
                </div>
                <div className="col-md-4 mb-3">
                  <label>State</label>
                  <select
                    className="custom-select d-block w-100"
                    id="state"
                    required
                  >
                    <option value="">Choose...</option>
                    <option>Nova Scotia</option>
                  </select>
                </div>
                <div className="col-md-3 mb-3">
                  <label>Zip</label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    required
                    minLength="6"
                    pattern="\w*"
                  />
                </div>
              </div>
              <hr className="mb-4" />

              <h4 className="mb-3">Payment</h4>
              <table class="table">
                <tbody>
                  {this.state.cards.map((item, index) => (
                    <tr>
                      <th scope="row">
                        <input
                          type="radio"
                          id={item.card_id}
                          name="card_selection"
                          onClick={this.disableAddNewCard}
                          checked={item.isSelected}
                        />
                      </th>
                      <td>{item.name_on_card}</td>
                      <td>{item.card_number}</td>
                      <td>{item.expiry}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="row mt-3">
                <label className="col-md-6 mb-3 ml-2">
                  {" "}
                  <input
                    type="radio"
                    name="card_selection"
                    onClick={this.toggleAddNewCard}
                    required
                  />{" "}
                  Add New card
                </label>
              </div>

              <div
                className="row ml-5"
                id="newCard_Imp"
                style={this.state.newCard ? {} : { display: "none" }}
              >
                <div className="col-md-6 mb-3">
                  <label>Name on card</label>
                  <input
                    type="text"
                    className="form-control"
                    id="card_name"
                    placeholder
                    pattern="[a-zA-Z ]*"
                  />
                  <small className="text-muted">
                    Full name as displayed on card
                  </small>
                </div>
                <div className="col-md-6 mb-3">
                  <label>Card number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="card_number"
                    placeholder
                    pattern="\d*"
                    minLength="16"
                    maxLength="16"
                  />
                </div>
              </div>
              <div
                className="row ml-5"
                id="newCard_Misc"
                style={this.state.newCard ? {} : { display: "none" }}
              >
                <div className="col-md-6 mb-3">
                  <label>Expiry</label>
                    <input
                      style={!this.isChrome? {display : "none"} : {}}
                      type="month"
                      className="form-control"
                      min="2020-07"
                      max="2030-07"
                      name="expiry"
                      required={!this.isChrome? false : true}
                    />

                    <input
                      style={this.isChrome? {display : "none"} : {}}
                      type="text"
                      className="form-control"
                      name="expiry_text"
                      pattern="[0-9]{4}-[0-9]{2}"
                      required={this.isChrome? false : true}
                    />
                    <small className="text-muted" style={this.isChrome ? {display : "none"} : {}}>Format:2021-03</small>
                </div>
                <div className="col-md-3 mb-3">
                  <label>CVV</label>
                  <input
                    className="form-control"
                    id="card_cvv"
                    type="text"
                    pattern="\d*"
                    minLength="3"
                    maxLength="3"
                  />
                </div>
              </div>
              <hr className="mb-4" />
              <button
                className="btn btn-primary btn-lg btn-block"
                type="submit"
              >
                Continue to checkout
              </button>
            </form>
          </div>
          <div className="flex-column ml-5 promo-section">
            <h5> Price </h5>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">{this.state.plan.plan}</h6>
                  <small className="text-muted"></small>
                </div>
                <span className="text-muted">{this.state.plan.money}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Promo code</h6>
                  <small>DAL@2020</small>
                </div>
                <span className="text-success">-$5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (CAD)</span>
                <strong>{this.state.plan.total}</strong>
              </li>
            </ul>
            <form className="card p-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo code"
                />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-secondary">
                    Redeem
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
