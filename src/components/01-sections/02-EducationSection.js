import React from "react";
import { FormEducation, FormEducationEdit } from "../Forms";
import { RenderedEducation } from "../RenderedCv";

const EducationSection = (props) => {
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
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default EducationSection;
