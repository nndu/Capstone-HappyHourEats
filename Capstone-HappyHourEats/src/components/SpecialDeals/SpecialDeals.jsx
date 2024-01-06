import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import "./SpecialDeals.scss";
import resImg from "../../assets/mainImg.jpg";

function SpecialDeals() {
    const EventTag = ({ event }) => {
        if (event.birthday) {
          return (
            <span className="tag tag--vegetarian">Birthday</span>
          );
        } else {
          return (
            <span className="tag tag--paleo">{event.hours_left} hours left</span>
          );
        }
      };

    const [events, setEvents] = useState([]);

    const fetchEvents = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/events`);
            const events = response.data;
            setEvents(events);
        } catch (error) {
            console.log("Error fetching events " + error);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <>
            <section className="section-meals">
                <h1>Discover Current Food Deals Now!</h1>
                <div className="container grid grid--3-cols margin-right-md">
                    {
                        events.map((event) => {
                            return (
                                <div className="meal" key={event.id}>
                                    <img
                                        src="https://github.com/erenburuk/html-css-course/blob/1aacbb283eed0f760ab9f905e4ad5099cfa11204/07-Omnifood-Desktop/img/meals/meal-1.jpg?raw=true"
                                        className="meal-img"
                                        alt="Japanese Gyozas"
                                    />
                                    <div className="meal-content">
                                        <div className="meal-tags">
                                        <EventTag event={event} />
                                        </div>
                                        <p className="meal-title">{event.title}</p>
                                        <ul className="meal-attributes">
                                            <li className="meal-attribute">
                                                <span>{event.description}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>

        </>
    );
}

export default SpecialDeals;





