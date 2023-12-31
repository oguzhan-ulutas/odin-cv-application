import React from "react";

import FormGeneralInfo from "../02-forms/01-info-forms/01-FormGeneralInfo";
import FormGeneralInfoEdit from "../02-forms/02-edit-forms/01-FormGeneralInfoEdit";
import RenderedGeneralInfo from "../03-rendered-cv-parts/01-RenderedGeneralInfo";

const GeneralInfoSection = (props) => {
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
        setComponentIdDelete={setComponentIdDelete}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default GeneralInfoSection;
