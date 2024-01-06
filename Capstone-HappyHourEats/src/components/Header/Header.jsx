import React from 'react';
import "./Header.scss";
import user from "../../assets/user.png";
import logo1 from "../../assets/logo1.jpg";

function Header (){
    return (
        <header className="header">
                <div className="header__container">
                    <div className="header__logo-container">
                        <a to="/" className="header__link">
                            <img className="header__logo" src={logo1} alt="logo" />
                        </a>
                    </div>
                    <div className="header__navlist-container">
                        <ul className="header__navlist">
                            <li className="header__list-item">
                                <a to="/" className="header__navlink">Happy Hour Search
                                </a>
                            </li>
                            <li className="header__list-item">
                                <a to="/" className="header__navlink">
                                    Special Event
                                </a>
                            </li>
                            <li className="header__list-item">
                                <a to="/" className="header__navlink header__navlink-1">
                                    <img className="header__userlogo" src={user} alt="logo" />
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </header>
    )
}

export default Header;