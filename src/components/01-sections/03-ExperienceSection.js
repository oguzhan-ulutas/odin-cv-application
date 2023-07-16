import React from "react";
import { FormExperience, FormExperienceEdit } from "../Forms";
import { RenderedExperience } from "../RenderedCv";

const ExperienceSection = (props) => {
  const {
    state,
    openForm,
    closeForm,
    handleSubmit,
    handleChange,
    handleEdit,
    setComponentId,
    handleDelete,
  } = props;

  return (
    <div className="experience">
      <div>
        <h1>Experience</h1>
        <button onClick={() => openForm("form-experience")}>Add</button>
      </div>
      <FormExperience
        closeForm={closeForm}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <FormExperienceEdit
        handleEdit={handleEdit}
        handleChange={handleChange}
        closeForm={closeForm}
      />
      <RenderedExperience
        state={state}
        openForm={openForm}
        setComponentId={setComponentId}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default ExperienceSection;
