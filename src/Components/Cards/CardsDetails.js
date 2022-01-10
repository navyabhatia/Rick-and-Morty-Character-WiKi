import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useParams } from "react-router-dom";
import saveCharacterToDatabase from "../../API/saveCharacter";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



const CardDetails = () => {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
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

};

export default CardDetails;