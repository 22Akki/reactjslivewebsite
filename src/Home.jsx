import React from "react";
import web from "../src/Images/img2.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";


const Home = (props) => {
    return(
        <>
          <Common name='Grow your business with' imgsrc={web} visit='/service' btname="Get Started"/>
    </>
  );
};

export default Home;



