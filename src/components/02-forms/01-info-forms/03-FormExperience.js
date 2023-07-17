import React from "react";
const FormExperience = (props) => {
  const { closeForm, handleChange, handleSubmit } = props;
  return (
    <div className="form-experience">
      <form
        id="form-experience"
        onSubmit={(e) => handleSubmit(e, "experience", "experiences")}
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
            closeForm("form-experience");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormExperience;
