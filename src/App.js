import React, { Component } from "react";
import uniqid from "uniqid";
import Footer from "./components/Footer";
import { FormGeneralInfo, Education } from "./components/Forms";
import {
  RenderedGeneralInfo,
  RenderedEducation,
} from "./components/RenderedCv";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      generalInfo: {
        firstName: "",
        lastName: "",
        eMail: "",
        tel: "",
      },
      education: {
        id: uniqid(),
        institution: "",
        dateFrom: "",
        dateTo: "",
        qualification: "",
      },
      experience: {
        id: uniqid(),
        company: "",
        title: "",
        dateFrom: "",
        dateTo: "",
        tasks: "",
      },
      educations: [],
      experiences: [],
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

  handleChange = (e, section, field) => {
    const keys = Object.keys(this.state[section]);
    const keysRest = keys.filter((item) => item !== field);

    let objRest = {};
    keysRest.forEach((key) => {
      objRest[key] = this.state[section][key];
    });

    this.setState({
      [`${section}`]: Object.assign(
        {},
        {
          [`${field}`]: e.target.value,
        },
        objRest
      ),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      educations: [...this.state.educations, this.state.education],
      education: {
        id: uniqid(),
        institution: "",
        dateFrom: "",
        dateTo: "",
        qualification: "",
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
            <button onClick={() => this.openForm("form-general")}>Edit</button>
          </div>
          <FormGeneralInfo
            closeForm={this.closeForm}
            addGeneralInfo={this.addGeneralInfo}
          />
          <RenderedGeneralInfo state={this.state} />
        </div>
        <div className="education">
          <h2>Education</h2>
          <div>
            <button onClick={() => this.openForm("form-education")}>Add</button>
            <button onClick={this.logger}>Edit</button>
          </div>
          <Education
            closeForm={this.closeForm}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <RenderedEducation state={this.state} />
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
