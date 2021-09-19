import ContactUs from "../pages/contact/ContactUs";
import Home from "../pages/home/Home";
import Launch from "../pages/launches/Launch";
import Ship from "../pages/ships/Ship";
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
  "No",
  "Launched(UTC)",
  "Location",
  "Mission",
  "Orbit",
  "Launch Status",
  "Rocket",
];

export const columns = [
  {
    name: "No",
    selector: (row) => row.No,
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
