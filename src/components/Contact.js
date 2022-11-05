import React from "react";
import "./Contact.css"

function Contact() {
  const variable = "{name}";
  const contactName = `${variable}`
  return (
    <>
    <div id="contact_page">
      <div className="sidebar">
      <h3>Contact Me</h3>
      <p className="contact-inst">
        Hi there, contact me to ask me about anything you have in mind.
      </p>
      <div>

      <form id="contact-form">
        <div id="name_wrapper">
          <div id="first_name_wrapper">
        <label>First name</label>
        <input
          id="first_name"
          type="text"
          name="first_name"
          placeholder="Enter your first name"
        />
        </div>

        <div id="last_name_wrapper">
        <label>Last name</label>
        <input
          id="last_name"
          type="text"
          name="last_name"
          placeholder="Enter your last name"
        />
        </div>
        </div>
        <div>
        <label>Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="yourname@email.com"
        />
        </div>
        <div>
        <label>Message</label>
        <textarea
          id="message"
          name="message"
          type="text"
          placeholder="Send me a message and I will reply you as soon as possible"
        />
        </div>
        <div id="check">
          <input type="checkbox" id="check_box" required />
        <label id="check_label">
          You agree to providing your data to {contactName} who may contact you.
        </label>
        </div>
        <button id="btn_submit">Send message</button>
      </form>
    </div>
    </div>
    </div>
    </>
  );
}

export default Contact;
