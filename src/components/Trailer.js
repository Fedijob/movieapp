import React from "react";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router";

const Trailer = ({ movies }) => {
  const params = useParams();
  const movie = movies.filter((el) => el.name == params.name)[0];
  return (
    <div style={{ width: "50%", marginInline: "auto" }}>
      <h1>{movie.name}</h1>
      <img src={movie.posterurl} style={{ width: "100%" }} />
      <p>{movie.description}</p>
      <div style={{ marginLeft: "273px" }}>
        <ReactStars count={5} size={24} value={movie.rating} edit={false} />
      </div>
    </div>
  );
};

export default Trailer;
