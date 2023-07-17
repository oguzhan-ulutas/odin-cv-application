import React from "react";

const RenderedExperience = (props) => {
  const {
    state,
    openForm,
    setComponentId,
    setComponentIdDelete,
    handleDelete,
  } = props;
  return (
    <div className="experiences-div">
      {state.experiences.map((experience) => {
        const { id, company, title, dateFrom, dateTo, tasks } = experience;
        return (
          <div key={id} className="section">
            <div className="section-part">
              <div className="section-head">Company :</div>
              <div>{company}</div>
            </div>
            <div className="section-part">
              <div className="section-head">Title :</div>
              <div>{title}</div>
            </div>
            <div className="section-part">
              <div className="section-head">Start Date :</div>
              <div>{dateFrom}</div>
            </div>
            <div className="section-part">
              <div className="section-head">End Date :</div>
              <div>{dateTo}</div>{" "}
            </div>
            <div className="section-part">
              <div className="section-head">Tasks :</div>
              <div>{tasks}</div>{" "}
            </div>
            <div className="section-part-button">
              <button
                className={`edit-${id}`}
                onClick={(e) => {
                  openForm("form-experience-edit");
                  setComponentId(e);
                }}
              >
                Edit
              </button>
              <button
                className={`dele-${id}`}
                onClick={(e) => {
                  setComponentIdDelete(e);
                  handleDelete("experience", "experiences");
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

export default RenderedExperience;
