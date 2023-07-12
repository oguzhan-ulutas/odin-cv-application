import React from "react";

const RenderedGeneralInfo = (props) => {
  const { state } = props;

  return (
    <div>
      <div>
        <div>Name :</div>
        <div>{state.generalInfo.firstName}</div>
      </div>
      <div>
        <div>Last Name :</div>
        <div>{state.generalInfo.lastName}</div>
      </div>
      <div>
        <div>E-mail :</div>
        <div>{state.generalInfo.eMail}</div>
      </div>
      <div>
        <div>Tel :</div>
        <div>{state.generalInfo.tel}</div>
      </div>
    </div>
  );
};

const RenderedEducation = (props) => {
  const { educations } = props.state;
  console.log(educations);
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
          </div>
        );
      })}
    </div>
  );
};

export { RenderedGeneralInfo, RenderedEducation };
