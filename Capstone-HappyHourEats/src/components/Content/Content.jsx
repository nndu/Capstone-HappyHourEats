import React from 'react';
import "./Content.scss";
import resImg from "../../assets/mainImg.jpg";

function Content() {
    return (
        <>

            <div className="shows__section-container">
                <li className="shows__container">
                    <div className="shows__container-buffer">
                        <div className="shows__headings-container">
                            <p className="shows__heading"></p>
                            <img className="shows__description--img" src={resImg} alt="res Img"/>
                        </div>
                        <div className="shows__headings-container">
                                <p className="shows__heading">Restaurant Name</p>
                                <p className="shows__description">Montana BBQ</p>
                        </div>
                        <div className="shows__headings-container">
                                <p className="shows__heading">Location</p>
                                <p className="shows__description-location">Vancouver</p>
                        </div>
                                <button className="shows__button">See Happy Hours Menu</button>
                        </div>
                </li>
                <li className="shows__container">
                    <div className="shows__container-buffer">
                        <div className="shows__headings-container">
                            <p className="shows__heading"></p>
                            <img className="shows__description--img" src={resImg} alt="res Img"/>
                        </div>
                        <div className="shows__headings-container">
                                <p className="shows__heading">Restaurant Name</p>
                                <p className="shows__description">Montana BBQ</p>
                        </div>
                        <div className="shows__headings-container">
                                <p className="shows__heading">Location</p>
                                <p className="shows__description-location">Vancouver</p>
                        </div>
                                <button className="shows__button">See Happy Hours Menu</button>
                        </div>
                </li>
                <li className="shows__container">
                    <div className="shows__container-buffer">
                        <div className="shows__headings-container">
                            <p className="shows__heading"></p>
                            <img className="shows__description--img" src={resImg} alt="res Img"/>
                        </div>
                        <div className="shows__headings-container">
                                <p className="shows__heading">Restaurant Name</p>
                                <p className="shows__description">Montana BBQ</p>
                        </div>
                        <div className="shows__headings-container">
                                <p className="shows__heading">Location</p>
                                <p className="shows__description-location">Vancouver</p>
                        </div>
                                <button className="shows__button">See Happy Hours Menu</button>
                        </div>
                </li>
                <li className="shows__container">
                    <div className="shows__container-buffer">
                        <div className="shows__headings-container">
                            <p className="shows__heading"></p>
                            <img className="shows__description--img" src={resImg} alt="res Img"/>
                        </div>
                        <div className="shows__headings-container">
                                <p className="shows__heading">Restaurant Name</p>
                                <p className="shows__description">Montana BBQ</p>
                        </div>
                        <div className="shows__headings-container">
                                <p className="shows__heading">Location</p>
                                <p className="shows__description-location">Vancouver</p>
                        </div>
                                <button className="shows__button">See Happy Hours Menu</button>
                        </div>
                </li>
            </div>
                                   
        </>
    )
}

export default Content; 