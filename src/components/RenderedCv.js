import React from "react";

const RenderedEducation = (props) => {
  const { educations } = props.state;
  return (
    <div className="educations-div">
      {educations.map((education) => {
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
                  props.openForm("form-education-edit");
                  props.setComponentId(e);
                }}
              >
                Edit
              </button>
              <button
                className={`dele-${id}`}
                onClick={(e) => {
                  props.setComponentId(e);
                  props.handleDelete("education", "educations");
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

const RenderedExperience = (props) => {
  const { experiences } = props.state;
  return (
    <div className="experiences-div">
      {experiences.map((experience) => {
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
                  props.openForm("form-experience-edit");
                  props.setComponentId(e);
                }}
              >
                Edit
              </button>
              <button
                className={`dele-${id}`}
                onClick={(e) => {
                  props.setComponentId(e);
                  props.handleDelete("experience", "experiences");
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

export { RenderedEducation, RenderedExperience };
