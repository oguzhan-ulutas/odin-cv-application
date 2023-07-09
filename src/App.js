import React, { Component, useState } from "react";
import uniqid from "uniqid";
import Footer from "./components/footer";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      id: uniqid(),
      generalInfo: {
        firstName: "",
        lastName: "",
        eMail: "",
        tel: "",
      },
      education: {
        institution: "",
        dateFrom: "",
        dateTo: "",
        qalification: "",
      },
      experience: {
        company: "",
        title: "",
        dateFrom: "",
        dateTo: "",
        tasks: "",
      },
    };
  }
  render() {
    return (
      <div className="container">
        <h1 className="header">CV App</h1>
        <div className="general-info">
          <h2>General Info</h2>
          <button>Add</button>
        </div>
        <div className="education">
          <h2>Education</h2>
          <button>Add</button>
        </div>
        <div className="experience">
          <h2>Experience</h2>
          <button>Add</button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
