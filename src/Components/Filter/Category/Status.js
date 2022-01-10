import React from "react";
import FilterBTN from "../FilterBTN";
import { ExpandMore } from "@material-ui/icons";
import "../Filter.css"
import {
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@material-ui/core";

const Status = ({ updateStatus, updatePageNumber }) => {
  let status = ["Alive", "Dead", "Unknown"];
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>Status</AccordionSummary>

      <AccordionDetails className="accordion-body">
      {status.map((item, index) => (
            <FilterBTN
              key={index}
              index={index}
              name="status"
              task={updateStatus}
              updatePageNumber={updatePageNumber}
              input={item}
            />
          ))}

      </AccordionDetails>
    </Accordion>
  );
};

export default Status;