import React, { useEffect, useState } from "react";
import Header from "../../common/header/Header";
import Table from "../../common/table/Table";
import { columns } from "../../static/static";

const Launch = () => {
  const [LaunchData, setLaunchData] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        let array = [];
        result.forEach((element, index) => {
          array.push({
            id: ++index,
            No: index,
            "Lunched(UTC)": element.launch_date_utc,
            Location: element.launch_site.site_name,
            Mission: element.mission_name,
            Orbit: element.rocket.second_stage.payloads[0].orbit,
            "Lunch Status": element.launch_success,
            Rocket: element.rocket.rocket_name,
          });
        });

        setLaunchData(array);
      });
  }, []);

  return (
    <>
      <Header />
      <Table title="Space X" columns={columns} columnsValues={LaunchData} />
    </>
  );
};

export default Launch;
