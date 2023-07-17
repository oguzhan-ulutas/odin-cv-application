import React, { useState } from "react";
import uniqid from "uniqid";
import Footer from "./components/Footer";

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
      ...state,
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

    setState({
      ...state,
      [arraySection]: [...state[arraySection], state[section]],
      [section]: Object.assign({}, { id: uniqid() }, obj),
    });
  };

  const [componentId, changeComponentId] = useState("");

  const setComponentId = (e) => {
    changeComponentId(e.target.className.substr(5));
  };

  const handleEdit = (e, section, arraySection) => {
    e.preventDefault();

    state[arraySection].forEach((item, i, arr) => {
      if (item.id === componentId) {
        const array = [...arr];
        array[i] = state[section];

        const keys = Object.keys(state[section]).filter(
          (item) => item !== "id"
        );

        let obj = {};
        keys.forEach((key) => (obj[key] = ""));
        setState({
          ...state,
          [arraySection]: array,
          [section]: Object.assign({}, { id: uniqid() }, obj),
        });
      }
    });
  };

  // I planned to use componentId for both edit and delete a component. But
  // when it works in edit it does not work in delete or vice versa.
  // It maybe a React based problem. When I define componentId as a state,
  // it does not work on delete.

  let componentIdDelete = "";
  const setComponentIdDelete = (e) => {
    componentIdDelete = e.target.className.substr(5);
  };

  const getComponentIdDelete = () => componentIdDelete;

  const handleDelete = (section, arraySection) => {
    state[arraySection].forEach((item, i, arr) => {
      if (item.id === getComponentIdDelete()) {
        const keys = Object.keys(state[section]).filter(
          (item) => item !== "id"
        );
        let obj = {};
        keys.forEach((key) => (obj[key] = ""));

        setState({
          ...state,
          [arraySection]: arr.filter((value) => value !== item),
          [section]: Object.assign({}, { id: uniqid() }, obj),
        });
      }
    });
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
        setComponentIdDelete={setComponentIdDelete}
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
