import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import RestaurantList from "../RestaurantList/RestaurantList.jsx";

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
		<RestaurantList restaurants={restaurants}/>
	)
}

export default Content; 