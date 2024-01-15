import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "../index.css";

const MemeCard = (props) => {
  const navigate = useNavigate();
  return (
    <Card style={{ margin: "25px", textAlign: "center" }} className="card-meme">
      <Card.Img variant="top" src={props.image} className="card-image-home" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Button
          onClick={(e) => navigate(`/edit/?url=${props.image}`)} //query parameters--- ?key=value&key=value&key=value......
          ///we are going to access this querry on edit page (so we can retrive image from url)
          variant="primary"
        >
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MemeCard;
