import React, { Component } from "react";
import { AddCard } from "./addcard";
import Swal from "sweetalert2";

export default class PaymentSettings extends Component {
  constructor(props) {
    super(props);
    //
    this.state = {
      isAdd: false,
      cards: [],
    };

    this.fetchCardDetails();
    this.isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
  }

  deleteCard = (card_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EE0E51",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        const cards_available = this.state.cards;
        //
        this.setState({
          cards: cards_available.filter((item) => item["card_id"] !== card_id),
        });
        Swal.fire("Deleted!", "Your card has been deleted.", "success");
      }
    });
  };

  addNewCard = (event) => {
    event.preventDefault();

    let cards_available = this.state.cards;

    const { name_on_card, card_number, expiry, expiry_text } = event.target;
    //
    let cardNumber = card_number.value;

    //
    cardNumber =
      cardNumber.substring(0, 3) + "**********" + cardNumber.substr(14);

    let newCard = {
      card_id: this.state.cards.length + 1,
      name_on_card: name_on_card.value,
      card_number: cardNumber,
      expiry: expiry.value || (expiry_text && expiry_text.value),
    };
    //
    cards_available.push(newCard);
    //
    this.setState({
      cards: cards_available,
      isAdd: false,
    });

    Swal.fire("Success", "Card information saved successfuly!", "success");
  };

  fetchCardDetails = () => {
    this.state = {
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
  };

  render() {
    if (this.state.isAdd) {
      return (
        <div>
          <form className="flex-column" onSubmit={this.addNewCard}>
            <div className="form-group text-left">
              <label> Name on card </label>{" "}
              <input
                type="text"
                className="form-control"
                name="name_on_card"
                pattern="[a-zA-Z ]*"
                required
              />
            </div>
            <div className="form-group mt-3 text-left">
              <label> Card number </label>{" "}
              <input
                type="text"
                className="form-control"
                name="card_number"
                required
                pattern="\d*"
                minLength="16"
                maxLength="16"
              />
            </div>
            <div className="form-group mt-3 text-left">
              <label> Expiry </label>{" "}
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
            <div className="form-group mt-3 text-left">
              <label> CVV </label>{" "}
              <input
                type="text"
                className="form-control"
                name="cvv"
                required
                pattern="\d*"
                minLength="3"
                maxLength="3"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Save{" "}
            </button>{" "}
            <button
              type="reset"
              className="btn"
              onClick={() => {
                this.setState({ isAdd: false });
              }}
            >
              Cancel
            </button>
          </form>{" "}
        </div>
      );
    } else {
      return (
        <div className="d-flex flex-column">
          <div>
            <button
              className="btn btn-primary float-right w-auto"
              onClick={() => {
                this.setState({ isAdd: true });
              }}
            >
              {" "}
              Add New{" "}
            </button>
          </div>
          <div className="card-deck mt-5 payments-list">
            {this.state.cards.map((item) => (
              <AddCard details={item} handler={this.deleteCard}></AddCard>
            ))}
          </div>
        </div>
      );
    }
  }
}
