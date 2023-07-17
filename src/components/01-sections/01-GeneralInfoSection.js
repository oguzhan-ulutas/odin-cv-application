import React from "react";

import { FormGeneralInfoEdit } from "../Forms";
import { RenderedGeneralInfo } from "../RenderedCv";
import FormGeneralInfo from "../02-forms/01-info-forms/01-FormGeneralInfo";

const GeneralInfoSection = (props) => {
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
    <div className="general-info">
      <div>
        <h1>General Info</h1>
        <button onClick={() => openForm("form-general")}>Add</button>
      </div>
      <FormGeneralInfo
        closeForm={closeForm}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <FormGeneralInfoEdit
        handleEdit={handleEdit}
        handleChange={handleChange}
        closeForm={closeForm}
      />
      <RenderedGeneralInfo
        state={state}
        openForm={openForm}
        setComponentId={setComponentId}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default GeneralInfoSection;
