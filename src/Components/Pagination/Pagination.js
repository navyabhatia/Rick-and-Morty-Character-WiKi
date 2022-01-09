import React from "react";
import { Button } from "@mui/material/Button";
import ReactPaginate from "react-paginate";
//import Pagination from "@material-ui/lab/Pagination";
//destructuring it below
const Pagination = ({ info, pageNumber, setPageNumber }) => {
  /* let next = () => {
    setPageNumber((x) => x + 1); //incementing the value i.e page number by one
  };

  let prev = () => {
    if (pageNumber === 1) return;
    setPageNumber((x) => x - 1);
  };
  return (
    <div className="container">
      <Button
        onClick={prev}
        variant="contained"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "3px solid green"
        }}
      >
        Prev
      </Button>

      <Button
        onClick={next}
        variant="outlined"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Next
      </Button>
    </div>
  );
  */
  <Pagination count={info?.pages} variant="outlined" shape="rounded" />;
  return <ReactPaginate pageCount={info?.pages} />;
};
export default Pagination;
