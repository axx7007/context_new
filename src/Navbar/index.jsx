import React, { useContext } from "react";
import { Container } from "./style";
import { Kino } from "../context";
const Navbar = () => {
  const [data, setData] = useContext(Kino);
  return (
    <Container>
      <h5>MovieList {data.length}</h5>
    </Container>
  );
};
export default Navbar;
