import { render } from "@testing-library/react";
import React, { Component } from "react";

export class FormGeneralInfo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="form-general">
        <form id="form-general">
          <div>
            <label htmlFor="first-name">FIRST NAME</label>
            <input
              type="text"
              id="first-name"
              placeholder="* Thor..."
              name="first-name"
              required=""
            />
          </div>
          <div>
            <label htmlFor="last-name">LAST NAME</label>
            <input
              type="text"
              id="last-name"
              placeholder="Odinson"
              name="last-name"
            />
          </div>
          <div>
            <label htmlFor="user-email">EMAIL</label>
            <input
              type="email"
              id="user-email"
              placeholder="* example@example.com"
              name="user-email"
              required=""
            />
          </div>
          <div>
            <label htmlFor="user-tel">PHONE NUMBER</label>
            <input
              type="tel"
              id="user-tel"
              placeholder="111-111-11-11"
              name="user-tel"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
