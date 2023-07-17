import React from "react";

const RenderedGeneralInfo = (props) => {
  const { state, openForm, setComponentId, handleDelete } = props;

  return (
    <div className="general-info-div">
      {state.generalInfos.map((generalInfo) => {
        const { id, firstName, lastName, eMail, tel } = generalInfo;
        return (
          <div key={id} className="section">
            <div className="section-part">
              <div className="section-head">Name : </div> <div>{firstName}</div>{" "}
            </div>
            <div className="section-part">
              <div className="section-head">Last Name :</div>
              <div>{lastName}</div>{" "}
            </div>
            <div className="section-part">
              <div className="section-head">E-mail :</div>
              <div>{eMail}</div>{" "}
            </div>
            <div className="section-part">
              <div className="section-head">Tel :</div>
              <div>{tel}</div>{" "}
            </div>
            <div className="section-part-button">
              <button
                className={`edit-${id}`}
                onClick={(e) => {
                  openForm("form-general-edit");
                  setComponentId(e);
                }}
              >
                Edit
              </button>
              <button
                className={`dele-${id}`}
                onClick={(e) => {
                  setComponentId(e);
                  handleDelete("generalInfo", "generalInfos");
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

export default RenderedGeneralInfo;
