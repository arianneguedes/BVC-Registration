import React, { Component } from "react";
import "../CSS/Contact.css";

class Contact extends Component {
  render() {
    return (
      <div class="div-contact">
        <form>
          <h2 class="h2-contact">Contact us</h2>
          <label for="name" class="label-contact">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            class="input-contact"
            pattern="[A-Za-z]{2,}\s{1}[A-Za-z]{1,}"
            title="Name must have first and last name"
            size="40"
            required
          />
          <label for="email" class="label-contact">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="input-contact"
            required
          />
          <label for="message" class="label-contact">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            class="textarea-contact"
            rows="6"
            maxLength="3000"
            required
          />
          <button class="button-contact" type="submit" id="button">
            Send Message
          </button>
        </form>
      </div>
    );
  }
}

export default Contact;
