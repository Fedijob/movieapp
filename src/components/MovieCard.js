import React from "react";
import { Card } from "react-bootstrap";
import MovieList from "./MovieList";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/trailer/${movie.name}`}>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={movie.posterurl}
          style={{ maxHeight: "143px" }}
        />
        <Card.Body>
          <Card.Title>{movie.name}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <ReactStars count={5} size={24} value={movie.rating} edit={false} />,
        </Card.Body>
      </Card>
    </Link>
  );
};

export default MovieCard;
