import React from "react";
const FormGeneralInfoEdit = (props) => {
  const { closeForm, handleChange, handleEdit } = props;
  return (
    <div className="form-general-edit">
      <form
        id="form-general-edit"
        onSubmit={(e) => {
          handleEdit(e, "generalInfo", "generalInfos");
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
            closeForm("form-general-edit");
          }}
        >
          Edit
        </button>
      </form>
    </div>
  );
};

export default FormGeneralInfoEdit;
