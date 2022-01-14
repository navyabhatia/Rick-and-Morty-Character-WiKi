import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Button, Box, Typography } from "@mui/material";
import "../../App.css";

const Character = (props) => {
  const { character, handleSaveCharacter, removeCharacter } = props;

  const handleClick = (payload) => {
    handleSaveCharacter(payload); // raise event
  };

  return (
    <div key={character.id}>
      <Card
        style={{
          color: "black",
          maxWidth: "5000px",
          boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
          border: "2px solid #0b5ed7",
          // borderColor: "#0b5ed7",
          //  borderRadius: "10px",
          paddingBottom: "10px",
          marginTop: 20,
          backgroundColor: "#fafafa",
        }}
      >
        <CardMedia
          style={{
            height: "150px",
            width: "150",
            borderRadius: "10px 10px 0 0",
            position: "center",
          }}
          image={character.image}
        />

        <div></div>
        {removeCharacter ? (
          <Button
            variant="contained"
            sx={{ width: "100%" }}
            onClick={() => removeCharacter(character)}
          >
            REMOVE
          </Button>
        ) : (
          <Button
            variant="contained"
            sx={{ width: "100%" }}
            onClick={() => handleClick(character)}
          >
            SAVE
          </Button>
        )}
        <CardContent>
          <Typography
            color="primary"
            variant="h5"
            color="black primary"
            type="bold"
          >
            {character.name}
          </Typography>
          <Typography color="textSecondary" variant="subtitle1">
            {character.status}
          </Typography>
          <Typography color="textSecondary" variant="inherit">
            {character.gender}
          </Typography>
          <Typography color="textSecondary" variant="subtitle2">
            {character.species}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Character;
/*
         {removeCharacter ? (
            <Button
              variant="contained"
              sx={{ width: "100%" }}
              onClick={() => removeCharacter(character)}
            >
              REMOVE
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{ width: "100%" }}
              onClick={() => handleClick(character)}
            >
              SAVE
            </Button>
          )}
*/
