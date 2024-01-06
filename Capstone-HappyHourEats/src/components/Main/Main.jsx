import React from 'react';
import "./Main.scss";
import { Link } from "react-router-dom";
import mainImg from "../../assets/foodAndDrink.jpg";
import resImg from "../../assets/mainImg.jpg";
import SlideShow from "../SlideShow/SlideShow";
import Content from "../Content/Content";

import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Header from '../Header/Header';
import RestaurantDetails from '../RestaurantDetails/RestaurantDetails';

function Main() {
  return (
    <>
      <div className="main">
        <div className="main__container">
          <img className="mainImage" src={mainImg} alt="mainImg" />
          <div className="search">
            <div className="search__holder">
              <h1>Explore restaurants featuring a curated Happy Hour menu</h1>
              <input className="search__input" placeholder="Search for Destination, location..." type="text"></input>
            </div>
          </div>

        </div>
      </div>
      <SlideShow />
      <Content />

      <Login />

    </>
  );
}

export default Main;