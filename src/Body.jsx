import React, { useContext, useState } from "react";
import { Kolhoz } from "./index";

const Body = () => {
  const data = useContext(Kolhoz);
  console.log(data);
  return (
    <div>
      <h2>{data.length}</h2>
      {data.map((value) => {
        return (
          <div key={value.id}>
            <h1>
              {value.name} {value.surname} {value.age}
            </h1>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Body;
