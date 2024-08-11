
import React from "react";
import "./Contact.scss";
import Image from "next/image";
import redImage from "../../../public/assets/contact-img.svg";
import FormSection from "../Form/FormSection";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content-left">
        <p className="contact-header">Get In Touch</p>
        <Image
          src={redImage}
          height={370}
          width={450}
          className="contact-image"
        />

        <div className="form-section">
          <p className="form-header">
            We’re Here to <span className="span-text">Help</span>
          </p>
          <p className="form-paragraph">
            Have a question or a unique, large-scale project? For orders over
            2,000, we'll assign a dedicated client services rep to ensure your
            custom box design is executed flawlessly.
          </p>
        </div>

        <div className="form-rect">
          <p className="form-title">Send Us a Message</p>
          <FormSection/>
        </div>
      </div>

      <div className="contact-content-right"></div>
    </div>
  );
};

export default Contact;
