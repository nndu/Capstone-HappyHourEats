import React from 'react';
import "./Content2.scss";
import resImg from "../../assets/mainImg.jpg";

function Content2() {
    return (
        <>
            <section className="section-meals">
                <h1>Recommended Meals</h1>
                <div className="container grid grid--3-cols margin-right-md">
                    <div className="meal">
                        <img
                            src="https://github.com/erenburuk/html-css-course/blob/1aacbb283eed0f760ab9f905e4ad5099cfa11204/07-Omnifood-Desktop/img/meals/meal-1.jpg?raw=true"
                            className="meal-img"
                            alt="Japanese Gyozas"
                        />
                        <div className="meal-content">
                            <div className="meal-tags">
                                <span className="tag tag--vegetarian">Vegetarian</span>
                            </div>
                            <p className="meal-title">Japanese Gyozas</p>
                            <ul className="meal-attributes">
                                <li className="meal-attribute">
                                    <ion-icon className="meal-icon" name="flame-outline"></ion-icon
                                    ><span><strong>650</strong> calories</span>
                                </li>
                                <li className="meal-attribute">
                                    <ion-icon className="meal-icon" name="restaurant-outline"></ion-icon
                                    ><span>NutriScore &reg; <strong>74</strong></span>
                                </li>
                                <li className="meal-attribute">
                                    <ion-icon className="meal-icon" name="star-outline"></ion-icon
                                    ><span><strong>4.9</strong> rating (537)</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="meal">
                        <img
                            src="https://github.com/erenburuk/html-css-course/blob/1aacbb283eed0f760ab9f905e4ad5099cfa11204/07-Omnifood-Desktop/img/meals/meal-1.jpg?raw=true"
                            className="meal-img"
                            alt="Japanese Gyozas"
                        />
                        <div className="meal-content">
                            <div className="meal-tags">
                                <span className="tag tag--vegetarian">Vegetarian</span>
                            </div>
                            <p className="meal-title">Japanese Gyozas</p>
                            <ul className="meal-attributes">
                                <li className="meal-attribute">
                                    <ion-icon className="meal-icon" name="flame-outline"></ion-icon
                                    ><span><strong>650</strong> calories</span>
                                </li>
                                <li className="meal-attribute">
                                    <ion-icon className="meal-icon" name="restaurant-outline"></ion-icon
                                    ><span>NutriScore &reg; <strong>74</strong></span>
                                </li>
                                <li className="meal-attribute">
                                    <ion-icon className="meal-icon" name="star-outline"></ion-icon
                                    ><span><strong>4.9</strong> rating (537)</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="meal">
                        <img
                            src="https://github.com/erenburuk/html-css-course/blob/1aacbb283eed0f760ab9f905e4ad5099cfa11204/07-Omnifood-Desktop/img/meals/meal-1.jpg?raw=true"
                            className="meal-img"
                            alt="Japanese Gyozas"
                        />
                        <div className="meal-content">
                            <div className="meal-tags">
                                <span className="tag tag--vegetarian">Vegetarian</span>
                            </div>
                            <p className="meal-title">Japanese Gyozas</p>
                            <ul className="meal-attributes">
                                <li className="meal-attribute">
                                    <ion-icon className="meal-icon" name="flame-outline"></ion-icon
                                    ><span><strong>650</strong> calories</span>
                                </li>
                                <li className="meal-attribute">
                                    <ion-icon className="meal-icon" name="restaurant-outline"></ion-icon
                                    ><span>NutriScore &reg; <strong>74</strong></span>
                                </li>
                                <li className="meal-attribute">
                                    <ion-icon className="meal-icon" name="star-outline"></ion-icon
                                    ><span><strong>4.9</strong> rating (537)</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="meal">
                        <img
                            src="https://github.com/erenburuk/html-css-course/blob/main/07-Omnifood-Desktop/img/meals/meal-2.jpg?raw=true"
                            className="meal-img"
                            alt="Avocado Salad"
                        />
                        <div className="meal-content">
                            <div className="meal-tags">
                                <span className="tag tag--vegan">Vegan</span>
                                <span className="tag tag--paleo">Paleo</span>
                            </div>
                            <p className="meal-title">Avocado Salad</p>
                            <ul className="meal-attributes">
                                <li className="meal-attribute">
                                    <ion-icon className="meal-icon" name="flame-outline"></ion-icon
                                    ><span><strong>400</strong> calories</span>
                                </li>
                                <li className="meal-attribute">
                                    <ion-icon className="meal-icon" name="restaurant-outline"></ion-icon
                                    ><span>NutriScore &reg; <strong>92</strong></span>
                                </li>
                                <li className="meal-attribute">
                                    <ion-icon className="meal-icon" name="star-outline"></ion-icon
                                    ><span><strong>4.8</strong> rating (441)</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="meal">
                        <img
                            src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            className="meal-img"
                            alt="Japanese Gyozas"
                        />
                        <div className="meal-content">
                            <div className="meal-tags">
                                <span className="tag tag--vegan">Vegan</span>
                            </div>
                            <p className="meal-title">Thai Red Curry</p>
                            <ul className="meal-attributes">
                                <li className="meal-attribute">
                                    <ion-icon className="meal-icon" name="flame-outline"></ion-icon
                                    ><span><strong>450</strong> calories</span>
                                </li>
                                <li className="meal-attribute">
                                    <ion-icon className="meal-icon" name="restaurant-outline"></ion-icon
                                    ><span>NutriScore &reg; <strong>86</strong></span>
                                </li>
                                <li className="meal-attribute">
                                    <ion-icon className="meal-icon" name="star-outline"></ion-icon
                                    ><span><strong>4.4</strong> rating (349)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Content2;





