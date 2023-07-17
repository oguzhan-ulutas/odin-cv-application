import React, { useEffect } from "react";

const FormGeneralInfo = (props) => {
  const { state, closeForm, handleChange, handleSubmit } = props;

  return (
    <div className="form-general">
      <form
        id="form-general"
        onSubmit={(e) => {
          handleSubmit(e, "generalInfo", "generalInfos");
        }}
      >
        <div>
          <label htmlFor="first-name">FIRST NAME</label>
          <input
            type="text"
            id="first-name"
            placeholder="* Thor..."
            name="first-name"
            onChange={(e) => {
              handleChange(e, "generalInfo", "firstName");
            }}
          />
        </div>
        <div>
          <label htmlFor="last-name">LAST NAME</label>
          <input
            type="text"
            id="last-name"
            placeholder="Odinson"
            name="last-name"
            onChange={(e) => {
              handleChange(e, "generalInfo", "lastName");
            }}
          />
        </div>
        <div>
          <label htmlFor="user-email">EMAIL</label>
          <input
            type="email"
            id="user-email"
            placeholder="* example@example.com"
            name="user-email"
            onChange={(e) => {
              handleChange(e, "generalInfo", "eMail");
            }}
          />
        </div>
        <div>
          <label htmlFor="user-tel">PHONE NUMBER</label>
          <input
            type="tel"
            id="user-tel"
            placeholder="111-111-11-11"
            name="user-tel"
            onChange={(e) => {
              handleChange(e, "generalInfo", "tel");
            }}
          />
        </div>
        <button
          type="submit"
          onClick={() => {
            closeForm("form-general");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormGeneralInfo;
