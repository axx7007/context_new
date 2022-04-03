import React, { createContext, useState } from "react";




export const Kino = createContext();

export const KinoProvider=({children})=>{
    const [data, setData]=useState([
        { id: 1, name: "Harry Potter", price: "$100" },
        { id: 2, name: "Snowden", price: "$200" },
        { id: 3, name: "Mr Been", price: "$300" },
        { id: 4, name: "Avatar", price: "$400" },
        { id: 5, name: "Tezlik", price: "$500" },
    ])
    return(
        <Kino.Provider value={[data, setData]}>
        {children}
    </Kino.Provider>
    )
}

