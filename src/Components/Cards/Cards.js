import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import BookmarkIcon from '@mui/icons-material/Bookmark';





//const cards vali ststement se detructuring the data we got from fetched data
//i.e hme yahn data mil gaya ..now we will map data
const Cards = ({ results }) => {
  let display;
  if (results) {
    //searched char present in page
    //x will target each of the result you can write anything there
    display = results.map((x) => {
      let { id, name, image, location, status } = x;
      return (
        <div key={id} className="col-4">
          <Card
            style={{
              maxWidth: 345,
              boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
              border: "2px solid #0b5ed7",
              // borderColor: "#0b5ed7",
              //  borderRadius: "10px",
              paddingBottom: "10px",
              marginTop: 20,
              backgroundColor: "#fafafa"
            }}
          >
            <CardMedia
              style={{
                height: "150px",
                width: "150",
                borderRadius: "10px 10px 0 0"

              }}
              image={image}
            />
            <CardContent>
              <Typography color="primary" variant="h5">
                {name}
              </Typography>
              <Typography color="textSecondary" variant="subtitle2">
                {status}
              </Typography>
            </CardContent>
          </Card>
          <BookmarkIcon 
          style={{
            color :"black"
            
          }}
          />
        </div>
      );
    });
  } else {
    //not present
    display = "No Characters Found :/";
  }

  return <>{display}</>;
};

export default Cards;
