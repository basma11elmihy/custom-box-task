'use client'

import React from "react";
import "./Contact.scss";
import Image from "next/image";
import redImage from "../../../public/assets/contact-img.svg";
import americanFlag from "../../../public/assets/american-flag-ic.svg";
import canadianFlag from "../../../public/assets/canadian-flag-ic.svg";
import FormSection from "../Form/FormSection";
import Map from "../Map/Map";

const Contact = () => {
  const key = "AIzaSyDdwpy7VkLKbwBbVlhla9SdUG8FZSfebIk"
  return (
    <div className="contact-container">
      <div className="contact-content-left">
        <div className="contact-top">
          <p className="contact-header">Get In Touch</p>
          <Image
            src={redImage}
            height={400}
            width={350}
            className="contact-image"
            alt="contact"
          />
        </div>

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
          <FormSection />
        </div>
      </div>

      <div className="contact-content-right">
        <div className="communication-container">
          <p className="hub-title">Communication Hub</p>
          <div className="first-row">
            <p className="blue-header">Email</p>

            <p className="blue-value">contact@customboxbuilder.com</p>
          </div>

          <div className="second-row">
            <p className="blue-header">Phone</p>

            <div className="phoneNumbers">
              <div className="column">
                <Image
                  src={americanFlag}
                  alt="country_flag"
                  width={24}
                  height={24}
                  className="country_img"
                />
                <p className="blue-value">(917) 994-6313</p>
              </div>

              <div className="column">
                <Image
                  src={canadianFlag}
                  alt="country_flag"
                  width={24}
                  height={24}
                  className="country_img"
                />
                <p className="blue-value">(647) 799-3467</p>
              </div>
            </div>
          </div>

          <div className="first-row">
            <p className="blue-header">Address</p>

            <p className="blue-value">
              880 Steeprock Dr, North York, ON M3J 2X2
            </p>
          </div>
        </div>

        <div className="map-container">
          <Map apiKey={key} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
