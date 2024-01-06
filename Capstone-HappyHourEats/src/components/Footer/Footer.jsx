import React from 'react';
import "./Footer.scss";
import fb from "../../assets/icon/icon-facebook.png";
import int from "../../assets/icon/icon-instagram.png";
import tw from "../../assets/icon/icon-twitter.png";

function Footer () {
    return (
        <footer className="footer">
        <div className="footer__container">
            <div className="footer__row">
                <div className="footer__footer-col">
                    <h4>company</h4>
                    <ul>
                        <li><a href="#">about us</a></li>
                        <li><a href="#">our services</a></li>
                        <li><a href="#">privacy policy</a></li>
                        <li><a href="#">affiliate program</a></li>
                    </ul>
                </div>
                <div className="footer__footer-col">
                    <h4>get help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Membership</a></li>
                        <li><a href="#">Account</a></li>
                        <li><a href="#">Gift Card</a></li>
                        <li><a href="#">payment options</a></li>
                    </ul>
                </div>
                <div className="footer__footer-col">
                    <h4>Follow us</h4>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Tweeter</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">SnapChat</a></li>
                    </ul>
                </div>
            </div>
        </div>
   </footer>
    )
}

export default Footer;