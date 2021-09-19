import React, { useEffect, useState } from "react";
import Header from "../../common/header/Header";
import Table from "../../common/table/Table";
import { shisColums } from "../../static/static";

const Ship = () => {
  const [isLoading, setLoading] = useState(false);
  const [shipsData, setShipsData] = useState([]);

  useEffect(() => {
    setLoading(true);
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
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <Table
        title="Ship Details"
        columns={shisColums}
        columnsValues={shipsData}
        isLoading={isLoading}
      />
    </>
  );
};

export default Ship;
