import "bootstrap/dist/css/bootstrap.min.css"; //mini css file
import "bootstrap/dist/js/bootstrap";
import { useState, useEffect } from "react";

import SearchBar from "./SearchBar";
import CharacterList from "./Cards/CharacterList";
import getCharacters from "../API/Characters";
import { Typography, Container } from "@mui/material";

const Home = () => {
  const [charactersData, setCharactersData] = useState([]);
  const [filteredCharactersData, setfilteredCharactersData] = useState([]);

  // get characters data with api call
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await getCharacters();
        setCharactersData([...data?.results]);
        // console.log(charactersData);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchCharacters();
  }, []);

  // set filterCharacters data
  useEffect(() => {
    // console.log(charactersData);
    setfilteredCharactersData([...charactersData]);
  }, [charactersData]);

  return (
    <>
      <SearchBar
        setfilteredCharactersData={setfilteredCharactersData}
        charactersData={charactersData}
      />
      <Container sx={{ marginBottom: 1 }}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          All Characters
        </Typography>
      </Container>
      <div>
        <div>
          <CharacterList characters={filteredCharactersData} />
        </div>
      </div>
    </>
  );
};

export default Home;
