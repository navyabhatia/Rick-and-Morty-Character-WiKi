import React from "react";
import { ExpandMore } from "@material-ui/icons";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@material-ui/core";

const Species = () => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>Species</AccordionSummary>

      <AccordionDetails>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </AccordionDetails>
    </Accordion>
  );
};

export default Species;