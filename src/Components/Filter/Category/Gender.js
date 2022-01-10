import React from "react";
import FilterBTN from "../FilterBTN";
import "../Filter.css"
import { ExpandMore } from "@material-ui/icons";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@material-ui/core";

const Gender = ({ updateGender, updatePageNumber }) => {
  let genders = ["female", "male", "genderless", "unknown"];
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>Gender</AccordionSummary>

      <AccordionDetails className="accordion-body">
      {genders.map((items, index) => {
            return (
              <FilterBTN
                name="gender"
                index={index}
                key={index}
                updatePageNumber={updatePageNumber}
                task={updateGender}
                input={items}
              />
            );
          })}
      </AccordionDetails>
    </Accordion>
  );
};

export default Gender;
