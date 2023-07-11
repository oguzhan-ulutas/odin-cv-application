import React, { Component } from "react";
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
        qualification: "",
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
  // Opens related form
  openForm = (formClass) => {
    const formDiv = document.querySelector(`.${formClass}`);
    formDiv.classList.add("active");
  };

  closeForm = (formClass) => {
    const formDiv = document.querySelector(`.${formClass}`);
    formDiv.classList.remove("active");
  };

  addGeneralInfo = (e) => {
    e.preventDefault();

    this.setState({
      generalInfo: {
        firstName: e.target[0].value,
        lastName: e.target[1].value,
        eMail: e.target[2].value,
        tel: e.target[3].value,
      },
    });
  };
  logger = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <h1 className="header">CV App</h1>
        <div className="general-info">
          <h2>General Info</h2>
          <div>
            <button onClick={() => this.openForm("form-general")}>Add</button>
            <button onClick={this.logger}>Edit</button>
          </div>
          <FormGeneralInfo
            closeForm={this.closeForm}
            addGeneralInfo={this.addGeneralInfo}
            handleChange={this.handleChange}
          />
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
