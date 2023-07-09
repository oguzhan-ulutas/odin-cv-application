import React, { Component, useState } from "react";
import uniqid from "uniqid";
import Footer from "./components/footer";
import { FormGeneralInfo } from "./components/forms";

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

  openForm = (formClass) => {
    const form = document.querySelector(`.${formClass}`);
    console.log(form);
    form.classList.add("active");
  };
  render() {
    return (
      <div className="container">
        <h1 className="header">CV App</h1>
        <div className="general-info">
          <h2>General Info</h2>
          <div>
            <button onClick={() => this.openForm("form-general")}>Add</button>
            <button>Edit</button>
          </div>
          <FormGeneralInfo />
        </div>
        <div className="education">
          <h2>Education</h2>
          <div>
            <button>Add</button>
            <button>Edit</button>
          </div>
        </div>

        <div className="experience">
          <h2>Experience</h2>
          <div>
            <button>Add</button>
            <button>Edit</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
