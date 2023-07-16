import React, { useState } from "react";
import uniqid from "uniqid";
import Footer from "./components/Footer";
import {
  FormGeneralInfo,
  FormGeneralInfoEdit,
  FormEducation,
  FormEducationEdit,
  FormExperience,
  FormExperienceEdit,
} from "./components/Forms";
import {
  RenderedGeneralInfo,
  RenderedEducation,
  RenderedExperience,
} from "./components/RenderedCv";

const App =()=> {
  const [state, setState]= useState({
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
    componentId : ""
  };)
  
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

  setComponentId = (e) => {
    this.componentId = e.target.className.substr(5);
  };

  getComponentId = () => this.componentId;

  handleEdit = (e, section, arraySection) => {
    e.preventDefault();
    this.state[arraySection].forEach((item, i, arr) => {
      if (item.id === this.getComponentId()) {
        const array = arr;
        array[i] = this.state[section];

        const keys = Object.keys(this.state[section]).filter(
          (item) => item !== "id"
        );

        let obj = {};
        keys.forEach((key) => (obj[key] = ""));
        this.setState({
          [arraySection]: array,
          [section]: Object.assign({}, { id: uniqid() }, obj),
        });
      }
    });
  };

  handleDelete = (section, arraySection) => {
    this.state[arraySection].forEach((item, i, arr) => {
      if (item.id === this.getComponentId()) {
        const keys = Object.keys(this.state[section]).filter(
          (item) => item !== "id"
        );
        let obj = {};
        keys.forEach((key) => (obj[key] = ""));

        this.setState({
          [arraySection]: arr.filter((value) => value !== item),
          [section]: Object.assign({}, { id: uniqid() }, obj),
        });
      }
    });
  };

  logger = () => {
    console.log(this.state);
  };

  
    return (
      <div className="container">
        <h1 className="header">CV App</h1>
        <div className="general-info">
          <div>
            <h1>General Info</h1>
            <button onClick={() => this.openForm("form-general")}>Add</button>
          </div>
          <FormGeneralInfo
            closeForm={this.closeForm}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
          <FormGeneralInfoEdit
            handleEdit={this.handleEdit}
            handleChange={this.handleChange}
            closeForm={this.closeForm}
          />
          <RenderedGeneralInfo
            state={this.state}
            openForm={this.openForm}
            setComponentId={this.setComponentId}
            handleDelete={this.handleDelete}
          />
        </div>

        <div className="education">
          <div>
            <h1>Education</h1>
            <button onClick={() => this.openForm("form-education")}>Add</button>
          </div>
          <FormEducation
            closeForm={this.closeForm}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <FormEducationEdit
            handleEdit={this.handleEdit}
            handleChange={this.handleChange}
            closeForm={this.closeForm}
          />
          <RenderedEducation
            state={this.state}
            openForm={this.openForm}
            setComponentId={this.setComponentId}
            handleDelete={this.handleDelete}
          />
        </div>

        <div className="experience">
          <div>
            <h1>Experience</h1>
            <button onClick={() => this.openForm("form-experience")}>
              Add
            </button>
          </div>
          <FormExperience
            closeForm={this.closeForm}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <FormExperienceEdit
            handleEdit={this.handleEdit}
            handleChange={this.handleChange}
            closeForm={this.closeForm}
          />
          <RenderedExperience
            state={this.state}
            openForm={this.openForm}
            setComponentId={this.setComponentId}
            handleDelete={this.handleDelete}
          />
        </div>
        <Footer />
      </div>
    );
  }


export default App;
