import React from "react";

const RenderedGeneralInfo = (props) => {
  const { generalInfos } = props.state;

  return (
    <div className="general-info-div">
      {generalInfos.map((generalInfo) => {
        const { id, firstName, lastName, eMail, tel } = generalInfo;
        return (
          <div key={id}>
            <div>
              <div>Name :</div>
              <div>{firstName}</div>{" "}
            </div>
            <div>
              <div>Last Name :</div>
              <div>{lastName}</div>{" "}
            </div>
            <div>
              <div>E-mail :</div>
              <div>{eMail}</div>{" "}
            </div>
            <div>
              <div>Tel :</div>
              <div>{tel}</div>{" "}
            </div>
            <div>
              <button onClick={() => this.openForm("form-general")}>
                Edit
              </button>
              <button>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const RenderedEducation = (props) => {
  const { educations } = props.state;
  return (
    <div>
      {educations.map((education) => {
        const { id, institution, dateFrom, dateTo, qualification } = education;
        return (
          <div key={id}>
            <div>
              <div>Institution :</div>
              <div>{institution}</div>{" "}
            </div>
            <div>
              <div>Start Date :</div>
              <div>{dateFrom}</div>{" "}
            </div>
            <div>
              <div>End Date :</div>
              <div>{dateTo}</div>{" "}
            </div>
            <div>
              <div>Qualification :</div>
              <div>{qualification}</div>{" "}
            </div>
            <div>
              <button onClick={() => this.openForm("form-general")}>
                Edit
              </button>
              <button>Delete</button>
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
    <div>
      {experiences.map((experience) => {
        const { id, company, title, dateFrom, dateTo, tasks } = experience;
        return (
          <div key={id}>
            <div>
              <div>Company :</div>
              <div>{company}</div>{" "}
            </div>
            <div>
              <div>Title :</div>
              <div>{title}</div>{" "}
            </div>
            <div>
              <div>Start Date :</div>
              <div>{dateFrom}</div>{" "}
            </div>
            <div>
              <div>End Date :</div>
              <div>{dateTo}</div>{" "}
            </div>
            <div>
              <div>Tasks :</div>
              <div>{tasks}</div>{" "}
            </div>
            <div>
              <button onClick={() => this.openForm("form-general")}>
                Edit
              </button>
              <button>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { RenderedGeneralInfo, RenderedEducation, RenderedExperience };
