import React from "react";

import { FormGeneralInfo, FormGeneralInfoEdit } from "../Forms";
import { RenderedGeneralInfo } from "../RenderedCv";

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
  console.log(props);
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
