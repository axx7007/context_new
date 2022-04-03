import React, { useContext, useState } from "react";
import { Kino } from "./context";
const Add = () => {
  const [data, setData] = useContext(Kino);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const onAdd = () => {
    var AddData = { id: data.length + 1, name: name, price: price };
    if (name.length !== 0 && price.length !== 0) {
      setData([...data, AddData]);
    }
    setName("");
    setPrice("");
  };
  return (
    <div>
      <input
        value={name}
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={price}
        placeholder="price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={onAdd}>Add</button>
    </div>
  );
};

export default Add;
