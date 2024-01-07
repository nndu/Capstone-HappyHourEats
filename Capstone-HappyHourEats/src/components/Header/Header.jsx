import React from 'react';
import "./Header.scss";
import { Link } from "react-router-dom";
import user from "../../assets/user.png";
import logo1 from "../../assets/logo1.jpg";

function Header (){
    return (
        <header className="header">
                <div className="header__container">
                    <div className="header__logo-container">
                        <Link to="/" className="header__link">
                            <img className="header__logo" src={logo1} alt="logo" />
                        </Link>
                    </div>
                    <div className="header__navlist-container">
                        <ul className="header__navlist">
                            <li className="header__list-item">
                                <Link to="/explore" className="header__navlink">Happy Hour Search
                                </Link>
                            </li>
                            <li className="header__list-item">
                                <Link to="/special" className="header__navlink">
                                    Special Event
                                </Link>
                            </li>
                            <li className="header__list-item">
                                <Link to="/user" className="header__navlink header__navlink-1">
                                    <img className="header__userlogo" src={user} alt="logo" />
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </header>
    )
}

export default Header;