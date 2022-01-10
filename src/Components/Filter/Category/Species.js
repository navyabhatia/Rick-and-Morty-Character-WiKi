import React from "react";
import FilterBTN from "../FilterBTN";
import "../Filter.css"
import { ExpandMore } from "@material-ui/icons";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@material-ui/core";

const Species = ({ updateSpecies, updatePageNumber }) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>Species</AccordionSummary>

      <AccordionDetails className="accordion-body">
      {species.map((item, index) => {
            return (
              <FilterBTN
                name="species"
                index={index}
                key={index}
                updatePageNumber={updatePageNumber}
                task={updateSpecies}
                input={item}
              />
            );
          })}
      </AccordionDetails>
    </Accordion>
  );
};

export default Species;