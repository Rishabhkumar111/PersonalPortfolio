import React from "react";

const ContactButton = ({ deg, text, src, url }) => {
  return (
    <div className={`${deg}`}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button
          type="button"
          onClick={() => console.log("first")}
          className="px-1"
          id="contactButton"
        >
          <div id="connectCol">
            <img src={src} alt="" id="connectIcon" />
            <span>{text}</span>
          </div>
        </button>
      </a>
    </div>
  );
};

export default ContactButton;
