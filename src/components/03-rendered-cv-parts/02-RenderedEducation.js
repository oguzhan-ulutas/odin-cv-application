import React from "react";

const RenderedEducation = (props) => {
  const { state, openForm, setComponentId, handleDelete } = props;
  return (
    <div className="educations-div">
      {state.educations.map((education) => {
        const { id, institution, dateFrom, dateTo, qualification } = education;
        return (
          <div key={id} className="section">
            <div className="section-part">
              <div className="section-head">Institution :</div>
              <div>{institution}</div>{" "}
            </div>
            <div className="section-part">
              <div className="section-head">Start Date :</div>
              <div>{dateFrom}</div>{" "}
            </div>
            <div className="section-part">
              <div className="section-head">End Date :</div>
              <div>{dateTo}</div>{" "}
            </div>
            <div className="section-part">
              <div className="section-head">Qualification :</div>
              <div>{qualification}</div>{" "}
            </div>
            <div className="section-part-button">
              <button
                className={`edit-${id}`}
                onClick={(e) => {
                  openForm("form-education-edit");
                  setComponentId(e);
                }}
              >
                Edit
              </button>
              <button
                className={`dele-${id}`}
                onClick={(e) => {
                  setComponentId(e);
                  handleDelete("education", "educations");
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RenderedEducation;
