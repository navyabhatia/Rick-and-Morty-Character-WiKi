import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa"
  },
  media: {
    height: 300
  }
});

const Cards = ({ results }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, image, name, status, location } = x;
      const classes = useStyles();
      return (
        <div
          key={id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
          <Container>
            <Grid container spacing={3}>
              {results.map((character) => (
                <Grid item xs={14} sm={4} key={character.id}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.media}
                      image={character.img_url}
                    />

                    <CardContent>
                      <Typography color="primary" variant="h5">
                        {character.name}
                      </Typography>

                      <Typography color="textSecondary" variant="subtitle2">
                        {character.status}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      );
    });
  } else {
    display = "No Characters Found :/";
  }

  return <>{display}</>;
};

export default Cards;
