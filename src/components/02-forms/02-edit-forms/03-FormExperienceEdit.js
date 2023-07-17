import React from "react";
const FormExperienceEdit = (props) => {
  const { closeForm, handleChange, handleEdit } = props;
  return (
    <div className="form-experience-edit">
      <form
        id="form-experience-edit"
        onSubmit={(e) => handleEdit(e, "experience", "experiences")}
      >
        <div>
          <label htmlFor="company">COMPANY</label>
          <input
            type="text"
            id="company"
            name="company"
            onChange={(e) => {
              handleChange(e, "experience", "company");
            }}
          />
        </div>
        <div>
          <label htmlFor="title">TITLE</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={(e) => {
              handleChange(e, "experience", "title");
            }}
          />
        </div>
        <div>
          <label htmlFor="date-from-experience">START DATE</label>
          <input
            type="date"
            id="date-from-experience"
            name="date-from-experience"
            onChange={(e) => {
              handleChange(e, "experience", "dateFrom");
            }}
          />
        </div>
        <div>
          <label htmlFor="date-to-experience">END DATE</label>
          <input
            type="date"
            id="date-to-experience"
            name="date-to-experience"
            onChange={(e) => {
              handleChange(e, "experience", "dateTo");
            }}
          />
        </div>
        <div>
          <label htmlFor="tasks">TASKS</label>
          <input
            type="text"
            id="tasks"
            name="tasks"
            onChange={(e) => {
              handleChange(e, "experience", "tasks");
            }}
          />
        </div>
        <button
          type="submit"
          onClick={() => {
            closeForm("form-experience-edit");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormExperienceEdit;
