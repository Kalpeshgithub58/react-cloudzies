import React, { useEffect, useState } from "react";
import Header from "../../common/header/Header";
import Table from "../../common/table/Table";
import { LaunchColums } from "../../static/static";

const Launch = () => {
  const [isLoading, setLoading] = useState(false);
  const [LaunchData, setLaunchData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.spacexdata.com/v3/launches")
      .then((res) => res.json())
      .then((result) => {
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
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <Table
        title="Launch Details"
        columns={LaunchColums}
        columnsValues={LaunchData}
        isLoading={isLoading}
      />
    </>
  );
};

export default Launch;
