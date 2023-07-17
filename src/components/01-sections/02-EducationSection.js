import React from "react";

import FormEducation from "../02-forms/01-info-forms/02-FormEducation";
import FormEducationEdit from "../02-forms/02-edit-forms/02-FormEducationEdit";
import RenderedEducation from "../03-rendered-cv-parts/02-RenderedEducation";

const EducationSection = (props) => {
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
    <div className="education">
      <div>
        <h1>Education</h1>
        <button onClick={() => openForm("form-education")}>Add</button>
      </div>
      <FormEducation
        closeForm={closeForm}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <FormEducationEdit
        handleEdit={handleEdit}
        handleChange={handleChange}
        closeForm={closeForm}
      />
      <RenderedEducation
        state={state}
        openForm={openForm}
        setComponentId={setComponentId}
        setComponentIdDelete={setComponentIdDelete}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default EducationSection;
