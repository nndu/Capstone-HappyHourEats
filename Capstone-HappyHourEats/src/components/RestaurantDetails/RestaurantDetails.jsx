import React from 'react';
import "./RestaurantDetails.scss";

function RestaurantDetails () {
    return (
	<div className="restaurant">
		<div className="restaurant-menu">
			<div className="restaurant-menu__header">
				<h3 className="restaurant-menu__title">Name of restaurant</h3>
			</div>
			<div className="restaurant-menu__items">
				<div className="restaurant-menu__item">
					<div className="restaurant-menu__item-media">
						<img className="restaurant-menu__photo" src="https://www.pamperedchef.ca/iceberg/com/product/100915-lg.jpg" alt=""/>
					</div>
					<div className="restaurant-menu__item-info">
						<h4 className="restaurant-menu__item-title">
							<span className="restaurant-menu__item-name">
								STARTERS
							</span>
							<span className="restaurant-menu__item-dots"></span>
							<span className="restaurant-menu__item-price">$40</span>
						</h4>
						<p className="resaurant-menu__description">Chicken / Rosemary / Lemon</p>
					</div>
				</div>
				<div className="restaurant-menu__item">
					<div className="restaurant-menu__item-media">
						<img className="restaurant-menu__photo"  src="https://www.pamperedchef.ca/iceberg/com/product/100900-lg.jpg" alt=""/>
					</div>
					<div className="restaurant-menu__item-info">
						<h4 className="restaurant-menu__item-title">
							<span className="restaurant-menu__item-name">
								STARTERS
							</span>
							<span className="restaurant-menu__item-dots"></span>
							<span className="restaurant-menu__item-price">$40</span>
						</h4>
						<p className="resaurant-menu__description">Chicken / Rosemary / Lemon</p>
					</div>
				</div>
				<div className="restaurant-menu__item">
					<div className="restaurant-menu__item-media">
						<img className="restaurant-menu__photo"  src="https://resizer.otstatic.com/v2/photos/xlarge/1/50066093.webp" alt=""/>
					</div>
					<div className="restaurant-menu__item-info">
						<h4 className="restaurant-menu__item-title">
							<span className="restaurant-menu__item-name">
								STARTERS
							</span>
							<span className="restaurant-menu__item-dots"></span>
							<span className="restaurant-menu__item-price">$40</span>
						</h4>
						<p className="resaurant-menu__description">Chicken / Rosemary / Lemon</p>
					</div>
				</div>
				<div className="restaurant-menu__item">
					<div className="restaurant-menu__item-media">
						<img className="restaurant-menu__photo"  src="https://resizer.otstatic.com/v2/photos/xlarge/2/50066091.webp" alt=""/>
					</div>
					<div className="restaurant-menu__item-info">
						<h4 className="restaurant-menu__item-title">
							<span className="restaurant-menu__item-name">
								STARTERS
							</span>
							<span className="restaurant-menu__item-dots"></span>
							<span className="restaurant-menu__item-price">$40</span>
						</h4>
						<p className="resaurant-menu__description">Chicken / Rosemary / Lemon</p>
					</div>
				</div>
			</div>
		</div>
	</div>

    )
}
export default RestaurantDetails;