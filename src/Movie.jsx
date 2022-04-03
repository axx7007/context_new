import React, { useState, useContext } from "react";
import MovieList from "./MovieList";
import { Kino } from "./context";
const Movie = () => {
  const [data, setData] = useContext(Kino);
  console.log(data, "test");
  return (
    <div>
      {data.map((value, index) => {
        return (
          <div key={value.id}>
            <MovieList data={value} />
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Movie;
