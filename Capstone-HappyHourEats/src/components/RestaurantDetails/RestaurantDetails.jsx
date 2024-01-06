import React from 'react';
import "./RestaurantDetails.scss";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function RestaurantDetails() {
	const [menus, setMenus] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		try {
			const fetchRestaurantDetails = async () => {
				const response = await axios.get(
					`http://localhost:8080/restaurants/${id}`
				);
				setMenus(response.data);
			};
			fetchRestaurantDetails();
		} catch (error) {
			console.error("Unable to fetch restaurant with ID" + id);
		}
	}, []);

	return (
		<div className="restaurant">
			<div className="restaurant-menu">
				<div className="restaurant-menu__header">
					<h3 className="restaurant-menu__title">{menus.length > 0 && menus[0].restaurant_name}</h3>
				</div>
				<div className="restaurant-menu__items">
					{
						menus.map((menu) => {
							return (
								<div className="restaurant-menu__item" key={menu.id}>
									<div className="restaurant-menu__item-media">
										<img className="restaurant-menu__photo" src="https://www.pamperedchef.ca/iceberg/com/product/100915-lg.jpg" alt="" />
									</div>
									<div className="restaurant-menu__item-info">
										<h4 className="restaurant-menu__item-title">
											<span className="restaurant-menu__item-name">
												{menu.title}
											</span>
											<span className="restaurant-menu__item-dots"></span>
											<span className="restaurant-menu__item-price">$ {menu.special_price}</span>
										</h4>
										<p className="resaurant-menu__description">Original price <strike>${menu.price}</strike></p>
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
		</div>

	)
}
export default RestaurantDetails;