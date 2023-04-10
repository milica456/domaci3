import React from 'react'
import {Link} from "react-router-dom";
import BannerImage from "../../assets/pizza.jpeg";
import "./home.css";

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${BannerImage})`}}>
     <div className='headerContainer'>
      <h1> Pizzeria </h1>
      <p> PIZZA FOR EVERYONE </p>
      <Link to="/menu">
        <button> ORDER NOW </button>
      </Link>
      </div> 
      </div>
  );
}

export default Home;

