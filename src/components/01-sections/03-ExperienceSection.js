import React from "react";

import FormExperience from "../02-forms/01-info-forms/03-FormExperience";
import FormExperienceEdit from "../02-forms/02-edit-forms/03-FormExperienceEdit";
import RenderedExperience from "../03-rendered-cv-parts/03-RenderedExperience";

const ExperienceSection = (props) => {
  const {
    state,
    openForm,
    closeForm,
    handleSubmit,
    handleChange,
    handleEdit,
    setComponentId,
    setComponentIdDelete,
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
        setComponentIdDelete={setComponentIdDelete}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default ExperienceSection;
