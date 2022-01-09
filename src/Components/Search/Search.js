import React from "react";
import styles from "./Search.css";
import Button from "@mui/material/Button";

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form className="design">
      <input
        onChange={(e) => {
          setPageNumber(1); //WRITTEN THIS AS WE WANTED TO SEARCH HO TOH 1 PAGE MEIN HI RHE OR SEARCH 1 SE HI START KARE YEH NA HO KI  4 page mein search krrhe hai toh 4 se aage ka search kre
          setSearch(e.target.value); //through onchange capturing the data awe are writing in search and then calls setsearch function for it which updates search varoable and puts in api then search it and so on
        }}
        type="text"
        placeholder="Search for characters"
        className="st"
      />
      <Button
        className="btn"
        onClick={(e) => {
          e.preventDefault(); //this will prevent itself to referesh again jab we press on search button
        }}
        variant="contained"
      >
        Search
      </Button>
    </form>
  );
};
export default Search;
