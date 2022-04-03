import React, { useContext } from "react";
import { Kino } from "./context";
const MovieList = ({ data }) => {
  const [value, setValue] = useContext(Kino);
  const Delete = (Id) => {
    var deleted = value.filter((item) => item.id !== Id);
    setValue(deleted);
  };
  return (
    <div>
      <h4>
        {data.id}-Nomi: {data.name} Price: {data.price}
      </h4>
      <button onClick={(e) => Delete(data.id)}>Delete</button>
    </div>
  );
};
export default MovieList;
