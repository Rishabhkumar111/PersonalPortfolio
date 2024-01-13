import React from "react";

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
          <span>{text}</span>
        </div>
      </button>
    </div>
  );
};

export default ContactButton;
