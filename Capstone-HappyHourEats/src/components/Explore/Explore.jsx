import React from 'react';
import { useState, useEffect } from "react";
import RestaurantList from "../RestaurantList/RestaurantList.jsx";
import "./Explore.scss";
import axios from "axios";


function Content() {
  const [filter, setFilter] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  const handleInputChange = (event) => {
    setFilter(event.target.value);
  };

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/restaurants`);
      const restaurants = response.data;
      setRestaurants(restaurants);
    } catch (error) {
      console.log("Error fetching restaurants " + error);
    }
  };

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(filter.toLowerCase()) ||
    restaurant.address.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <>
     
      <input
            className="search__input"
            placeholder="Search for Destination, location..."
            type="text"
            value={filter}
            onChange={handleInputChange}
          />
      <RestaurantList restaurants={filteredRestaurants} />
    </>
  )
}

export default Content; 