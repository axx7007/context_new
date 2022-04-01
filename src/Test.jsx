import React from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import { data } from "./mack";
const Test = () => {
  return (
    <div>
      <Navbar props={data} />
      <Body props={data} />
    </div>
  );
};

export default Test;
