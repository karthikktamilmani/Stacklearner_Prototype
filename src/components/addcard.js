import React from "react";
import './card.scss';

export function AddCard(props) {
  const { card_id, name_on_card, card_number, expiry } = props.details;

  return (
    <div className="card mr-2 mb-4" style={{ minWidth: "18rem" }}>
      <div className="card-header">
        <div class="card-label">Card Number</div>
        <h5 className="font-weight-normal float-left">{card_number}</h5>
        <button
          type="button"
          className="btn float-right"
          aria-label="Close"
          onClick={() => props.handler(card_id)}
          style={!props.handler ? { display: "none" } : {}}
        >
          <i className="fa fa-times close-icon"></i>
        </button>
      </div>
      <div className="card-body">
        <div class="float-left">
        <div class="card-label">Card Name</div>
        <h6 className="card-title"> {name_on_card} </h6>
        </div>
        <div class="float-right">
        <div class="card-label">Expiry</div>
        <h6 className="card-title"> {expiry} </h6>
        </div>
      </div>
    </div>
  );
}
