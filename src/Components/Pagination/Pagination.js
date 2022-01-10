/*import React from "react";
import { Button } from "@mui/material/Button";
//import ReactPaginate from "react-paginate";
//import Pagination from "@material-ui/lab/Pagination";
//destructuring it below

const Pagination = ({ info, pageNumber, setPageNumber }) => {
   let next = () => {
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
  
 /* <Pagination count={info?.pages} variant="outlined" shape="rounded" />;
  return <ReactPaginate pageCount={info?.pages} />;
};
export default Pagination;
*/

import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber, info, updatePageNumber }) => {
  let pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .pagination {
              font-size: 12px;
            }
            .next,
            .prev {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>
      <ReactPaginate
        className="pagination justify-content-center my-4 gap-4 "
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        previousClassName="btn btn-default fs-5 fw-bold text-white prev"
        nextClassName="btn btn-default fs-5 fw-bold  text-white next"
        activeClassName="active"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages}
        onPageChange={pageChange}
        pageClassName="page-item"
        pageLinkClassName="page-link"
      />
    </>
  );
};

export default Pagination;