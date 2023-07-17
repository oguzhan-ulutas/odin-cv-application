import React from "react";
const FormEducationEdit = (props) => {
  const { closeForm, handleChange, handleEdit } = props;
  return (
    <div className="form-education-edit">
      <form
        id="form-education-edit"
        onSubmit={(e) => {
          handleEdit(e, "education", "educations");
        }}
      >
        <div>
          <label htmlFor="institution">INSTITUTION</label>
          <input
            type="text"
            id="institution"
            name="institution"
            onChange={(e) => {
              handleChange(e, "education", "institution");
            }}
          />
        </div>
        <div>
          <label htmlFor="date-from">START DATE</label>
          <input
            type="date"
            id="date-from"
            name="date-from"
            onChange={(e) => {
              handleChange(e, "education", "dateFrom");
            }}
          />
        </div>
        <div>
          <label htmlFor="date-to">END DATE</label>
          <input
            type="date"
            id="date-to"
            name="date-to"
            onChange={(e) => {
              handleChange(e, "education", "dateTo");
            }}
          />
        </div>
        <div>
          <label htmlFor="qualification">QUALIFICATION</label>
          <input
            type="text"
            id="qualification"
            name="qualification"
            onChange={(e) => {
              handleChange(e, "education", "qualification");
            }}
          />
        </div>
        <button
          type="submit"
          onClick={() => {
            closeForm("form-education-edit");
          }}
        >
          Edit
        </button>
      </form>
    </div>
  );
};

export default FormEducationEdit;
