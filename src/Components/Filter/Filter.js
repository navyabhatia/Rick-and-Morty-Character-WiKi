import React from "react";
import Gender from "../Filter/Category/Gender";
import Species from "../Filter/Category/Species";
import Status from "../Filter/Category/Status";

const Filters = () => {
  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-4"> Filters </div>
      <Gender />
      <Species />
      <Status />
    </div>
  );
};

export default Filters;