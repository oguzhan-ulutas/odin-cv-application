import React, { Component } from "react";
import uniqid from "uniqid";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      generalInfo: {
        firstName,
        lastName,
        eMail,
        tel,
      },
      education: {
        institution,
        dateFrom,
        dateTo,
        qalification,
      },
      experience: {
        company,
        title,
        dateFrom,
        dateTo,
        tasks,
      },
    };
  }
  render() {
    return (
      <div className="container">
        <div className="general-info"></div>
        <div className="education"></div>
        <div className="experience"></div>
      </div>
    );
  }
}

export default App;
