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
import GeneralInfoSection from "./components/01-sections/01-GeneralInfoSection";
import EducationSection from "./components/01-sections/02-EducationSection";
import ExperienceSection from "./components/01-sections/03-ExperienceSection";

const App = () => {
  const [state, setState] = useState({
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
    componentId: "",
  });

  // Opens related form
  const openForm = (formClass) => {
    const formDiv = document.querySelector(`.${formClass}`);
    formDiv.classList.add("active");
  };

  const closeForm = (formClass) => {
    const formDiv = document.querySelector(`.${formClass}`);
    formDiv.classList.remove("active");
  };

  const handleChange = (e, section, field) => {
    const keys = Object.keys(state[section]);
    const keysRest = keys.filter((item) => item !== field);

    let objRest = {};
    keysRest.forEach((key) => {
      objRest[key] = state[section][key];
    });

    setState({
      [section]: Object.assign(
        {},
        {
          [field]: e.target.value,
        },
        objRest
      ),
    });
  };

  const handleSubmit = (e, section, arraySection) => {
    e.preventDefault();

    const keys = Object.keys(state[section]).filter((item) => item !== "id");

    let obj = {};
    keys.forEach((key) => (obj[key] = ""));

    this.setState({
      [arraySection]: [...state[arraySection], state[section]],
      [section]: Object.assign({}, { id: uniqid() }, obj),
    });
  };

  const setComponentId = (e) => {
    this.componentId = e.target.className.substr(5);
  };

  const getComponentId = () => state.componentId;

  const handleEdit = (e, section, arraySection) => {
    e.preventDefault();
    state[arraySection].forEach((item, i, arr) => {
      if (item.id === this.getComponentId()) {
        const array = arr;
        array[i] = state[section];

        const keys = Object.keys(state[section]).filter(
          (item) => item !== "id"
        );

        let obj = {};
        keys.forEach((key) => (obj[key] = ""));
        setState({
          [arraySection]: array,
          [section]: Object.assign({}, { id: uniqid() }, obj),
        });
      }
    });
  };

  const handleDelete = (section, arraySection) => {
    state[arraySection].forEach((item, i, arr) => {
      if (item.id === getComponentId()) {
        const keys = Object.keys(state[section]).filter(
          (item) => item !== "id"
        );
        let obj = {};
        keys.forEach((key) => (obj[key] = ""));

        setState({
          [arraySection]: arr.filter((value) => value !== item),
          [section]: Object.assign({}, { id: uniqid() }, obj),
        });
      }
    });
  };

  const logger = () => {
    console.log(state);
  };

  return (
    <div className="container">
      <h1 className="header">CV App</h1>
      <GeneralInfoSection
        state={state}
        openForm={openForm}
        closeForm={closeForm}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleEdit={handleEdit}
        setComponentId={setComponentId}
        handleDelete={handleDelete}
      />

      <EducationSection
        state={state}
        openForm={openForm}
        closeForm={closeForm}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleEdit={handleEdit}
        setComponentId={setComponentId}
        handleDelete={handleDelete}
      />

      <ExperienceSection
        state={state}
        openForm={openForm}
        closeForm={closeForm}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleEdit={handleEdit}
        setComponentId={setComponentId}
        handleDelete={handleDelete}
      />

      <Footer />
    </div>
  );
};

export default App;
