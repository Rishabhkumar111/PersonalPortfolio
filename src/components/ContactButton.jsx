import React from "react";
import { Col } from "react-bootstrap";

const ContactButton = ({ deg, text ,src}) => {
  return (
    <div className={`${deg}`}>
      <button
        type="button"
        onClick={() => console.log("first")}
        className="px-1"
        id="contactButton"
      >
        <div id="connectCol">
          <a href="#">
            <img src={src} alt="" id="connectIcon" />
          </a>
          <span> Connect on {text}</span>
        </div>
      </button>
    </div>
  );
};

export default ContactButton;
