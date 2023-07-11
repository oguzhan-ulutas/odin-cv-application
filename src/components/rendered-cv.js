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

export { RenderedGeneralInfo };
