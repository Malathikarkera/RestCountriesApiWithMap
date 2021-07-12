import React from "react";
import SearchCountry from "../components/searchCountry/searchCountry";
import FilterButton from "../components/filterButton/FilterButton";
import Main from "./Main/Main.js";
import styles from "../globalStyles.css";
//import Navbar from "./NavBar/NavBar.js";
//import { MapContainer } from "./MapContainer.js";
//import Map from "./Map.js";

const Home = ({ ...props }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.navBottom}>
          <SearchCountry />
          <FilterButton />
          {/* <Map /> */}
        </div>
        <Main />
      </div>
    </>
  );
};
export default Home();
