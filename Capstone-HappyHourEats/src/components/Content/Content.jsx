import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import "./Content.scss";
import resImg from "../../assets/mainImg.jpg";

function Content() {
	const [restaurants, setRestaurants] = useState([]);

	const fetchRestaurants = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/restaurants`);
      const restaurants = response.data;
      setRestaurants(restaurants);
    } catch (error) {
      console.log("Error fetching restaurants " + error);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

	return (
		<>
			<div className="shows__section-container">
				{
					restaurants.map((restaurant) => {
						return (
							<li className="shows__container" key={restaurant.id}>
							<div className="shows__container-buffer">
								<div className="shows__headings-container">
									<p className="shows__heading"></p>
									<img className="shows__description--img" src={restaurant.image_url} alt="res Img" />
								</div>
								<div className="shows__headings-container">
									<p className="shows__heading">Restaurant Name</p>
									<p className="shows__description">{restaurant.name}</p>
								</div>
								<div className="shows__headings-container">
									<p className="shows__heading">Location</p>
									<p className="shows__description-location">{restaurant.address}</p>
								</div>
								<button className="shows__button">See Happy Hours Menu</button>
							</div>
						</li>
						)
					})
				}
			</div>
		</>
	)
}

export default Content; 