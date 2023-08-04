import React from "react";
import "../style/Contact.css";
import contact from "../assets/contact.png"

function Contact() {
  return (
    <div className="contact">
      <div className="contactImage">
        <img src={contact} alt="contact" />
      </div>
      <div className="contactContainer">
        <form
          action="https://formsubmit.co/misterale22@gmail.com"
          method="POST">
          <input type="text" name="name" placeholder="Your name" required />
          <input
            type="numeric"
            name="phone"
            placeholder="Phone number"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
          />
          <textarea
            name="message"
            placeholder="How can we help you?"></textarea>
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for the message, we'll answer as soon as possible. AutoTrade Team!"></input>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
