import React, { useContext, useState } from "react";
import { Kolhoz } from "./index";
const Navbar = () => {
  //   const [newdata, setNewdata] = useState(data);
  const data = useContext(Kolhoz);
//   console.log(data);
  return (
    <div
      style={{
        display: "flex",
        background: "black",
        justifyContent: "space-around",
        color: "white",
      }}
    >
      <h5>Length: {data.length}</h5>
      <h5>Home</h5>
      <h5>About</h5>
      <h5>Product</h5>
      <h5>Contact</h5>
      <h5>Work</h5>
      <h1>{data[0].name}</h1>
    </div>
  );
};
export default Navbar;
