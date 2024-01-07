import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./RestaurantList.scss";

const RestaurantList = (props) => {
	const restaurants = props.restaurants;
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
								<Link to={`/restaurants/${restaurant.id}`} className="shows__button">See Happy Hours Menu</Link>
							</div>
						</li>
						)
					})
				}
			</div>
		</>
	)
}

export default RestaurantList; 