import React from "react";
import { ExpandMore } from "@material-ui/icons";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@material-ui/core";

const Status = () => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>Status</AccordionSummary>

      <AccordionDetails>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </AccordionDetails>
    </Accordion>
  );
};

export default Status;