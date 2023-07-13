import React, { Component } from "react";
import uniqid from "uniqid";
import Footer from "./components/Footer";
import {
  FormGeneralInfo,
  FormGeneralInfoEdit,
  FormEducation,
  FormExperience,
} from "./components/Forms";
import {
  RenderedGeneralInfo,
  RenderedEducation,
  RenderedExperience,
} from "./components/RenderedCv";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      generalInfo: {
        id: uniqid(),
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
      generalInfos: [],
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

  handleChange = (e, section, field) => {
    const keys = Object.keys(this.state[section]);
    const keysRest = keys.filter((item) => item !== field);

    let objRest = {};
    keysRest.forEach((key) => {
      objRest[key] = this.state[section][key];
    });

    this.setState({
      [section]: Object.assign(
        {},
        {
          [field]: e.target.value,
        },
        objRest
      ),
    });
  };

  handleSubmit = (e, section, arraySection) => {
    e.preventDefault();

    const keys = Object.keys(this.state[section]).filter(
      (item) => item !== "id"
    );

    let obj = {};
    keys.forEach((key) => (obj[key] = ""));

    this.setState({
      [arraySection]: [...this.state[arraySection], this.state[section]],
      [section]: Object.assign({}, { id: uniqid() }, obj),
    });
  };

  handleEdit = () => {};

  logger = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <h1 className="header">CV App</h1>
        <div className="general-info">
          <div>
            <h2>General Info</h2>
            <button onClick={() => this.openForm("form-general")}>Add</button>
          </div>
          <FormGeneralInfo
            closeForm={this.closeForm}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
          <FormGeneralInfoEdit />
          <RenderedGeneralInfo state={this.state} />
        </div>

        <div className="education">
          <div>
            <h2>Education</h2>
            <button onClick={() => this.openForm("form-education")}>Add</button>
          </div>
          <FormEducation
            closeForm={this.closeForm}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <RenderedEducation state={this.state} />
        </div>

        <div className="experience">
          <div>
            <h2>Experience</h2>
            <button onClick={() => this.openForm("form-experience")}>
              Add
            </button>
          </div>
          <FormExperience
            closeForm={this.closeForm}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <RenderedExperience state={this.state} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
