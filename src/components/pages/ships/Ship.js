import React, { useEffect, useState } from "react";
import Header from "../../common/header/Header";
import Table from "../../common/table/Table";
import { shisColums } from "../../static/static";

const Ship = () => {
  const [shipsData, setShipsData] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/ships")
      .then((res) => res.json())
      .then((result) => {
        const array = [];
        result.forEach((element, index) => {
          array.push({
            id: ++index,
            No: index,
            "Ship Name": element.ship_name,
            "Ship Id": element.ship_id,
            "Home Port": element.home_port,
            "Ship Image": element.image,
            "Ship Type": element.ship_type,
          });
        });
        setShipsData(array);
      });
  }, []);

  return (
    <>
      <Header />
      <Table title="Space X" columns={shisColums} columnsValues={shipsData} />
    </>
  );
};

export default Ship;
