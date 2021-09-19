import React, { useEffect } from "react";
// import { useState } from "react/cjs/react.development";
import Header from "../../common/header/Header";

const Ship = () => {
  // const [shipsData, setShipsData] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/ships")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }, []);

  return (
    <>
      <Header />
      <div>Ships</div>
    </>
  );
};

export default Ship;
