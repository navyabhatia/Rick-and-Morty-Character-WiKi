import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Search from "../Search/Search";
import Navbar from "../Navbar/Navbar"
import { Typography, Container } from "@mui/material";
import MyToastContainer from "../MyToastContainer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SavedCharacters = () => {
    let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species } = fetchedData;

  const navigate = useNavigate();

  // access only if logged in
  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      navigate("/login", { replace: true });
    }
  });

  // get saved characters from local storage
  useEffect(() => {
    let savedCharacters = localStorage.getItem("saveCharacters");
    savedCharacters = JSON.parse(savedCharacters);
    console.log(savedCharacters);
    updateFetchedData([...savedCharacters]);
  }, []);

  // set filterCharacters state
  useEffect(() => {
    updateFetchedData([...fetchedData]);
  }, [fetchedData]);

  // remove saved character
  const removeCharacter = (payload) => {
    let characters = localStorage.getItem("saveCharacters");
    characters = JSON.parse(characters);
    const updatedCharacters = characters?.filter(
      (item) => item.id !== payload.id
    );
    localStorage.setItem("saveCharacters", JSON.stringify(updatedCharacters));
    updateFetchedData([...JSON.parse(localStorage.getItem("saveCharacters"))]);
    toast.success(`${payload.name} removed successfully`);
  };

  return (
    <>
      {<MyToastContainer />}
      <Navbar />
      <Search />
      <Container sx={{ marginBottom: 1 }}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Saved Characters
        </Typography>
        {fetchedData.length === 0 && (
          <Typography
            variant="overline"
            sx={{ fontSize: "1.2rem", color: "gray" }}>
            You have no saved characters
          </Typography>
        )}
      </Container>
      console.log (character)
    </>
  );
};

export default SavedCharacters;
