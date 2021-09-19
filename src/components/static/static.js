import React from "react";
import ContactUs from "../pages/contact/ContactUs";
import Home from "../pages/home/Home";
import Launch from "../pages/launches/Launch";
import Ship from "../pages/ships/Ship";

export const HeaderData = {
  headerTitle: "Space X",
  headerList: [
    {
      name: "Lunches",
      value: "launches",
    },
    {
      name: "Ships",
      value: "ships",
    },
    {
      name: "Contact Us",
      value: "contactus",
    },
  ],
};

export const routes = [
  {
    name: "",
    component: Home,
  },
  {
    name: "launches",
    component: Launch,
  },
  {
    name: "ships",
    component: Ship,
  },
  {
    name: "contactus",
    component: ContactUs,
  },
];

export const LaunchColums = [
  {
    name: "No",
    selector: (row) => row.No,
    sortable: true,
  },
  {
    name: "Lunched(UTC)",
    selector: (row) => row["Lunched(UTC)"],
  },
  {
    name: "Location",
    selector: (row) => row.Location,
  },
  {
    name: "Mission",
    selector: (row) => row.Mission,
  },
  {
    name: "Orbit",
    selector: (row) => row.Orbit,
  },
  {
    name: "Lunch Status",
    selector: (row) => row["Lunch Status"],
  },
  {
    name: "Rocket",
    selector: (row) => row.Rocket,
  },
];

export const shisColums = [
  {
    name: "No",
    selector: (row) => row.No,
  },
  {
    name: "Ship Image",
    selector: (row) => (
      <img
        src={row["Ship Image"]}
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "40px",
          margin: "10px",
        }}
        alt=""
      />
    ),
  },
  {
    name: "Ship Id",
    selector: (row) => row["Ship Id"],
  },

  {
    name: "Ship Name",
    selector: (row) => row["Ship Name"],
  },
  {
    name: "Ship Type",
    selector: (row) => row["Ship Type"],
  },
  {
    name: "Home Port",
    selector: (row) => row["Home Port"],
  },
];
