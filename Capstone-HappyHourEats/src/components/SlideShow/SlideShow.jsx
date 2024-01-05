import React from 'react';
import "./SlideShow.scss";
import { Fade } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import img1 from "../../assets/fadeImg/earls.jpeg";
import img2 from "../../assets/fadeImg/haven-kitchen.jpeg";
import img3 from "../../assets/fadeImg/Montana.webp";
import img4 from "../../assets/fadeImg/Saba.jpeg";
import img5 from "../../assets/fadeImg/wendel.jpeg";
import img6 from "../../assets/fadeImg/tap.jpeg";

function SlideShow () {
    
    return(
        <>
        <div className="slidecontainer">
      <Fade>
        <div className="eachfade">
          <img className=" eachfade__card eachfade__card-1" src={img1} alt =" restaurant image"/>
          <img className="eachfade__card eachfade__card-2" src={img2} alt =" restaurant image"/>
          <img className="eachfade__card eachfade__card-3" src={img4} alt =" restaurant image"/>
        </div>
        <div className="eachfade">
          <img className="eachfade__card eachfade__card-1" src={img3} alt =" restaurant image"/>
          <img className="eachfade__card eachfade__card-2" src={img4} alt =" restaurant image"/>
          <img className="eachfade__card eachfade__card-3" src={img1} alt =" restaurant image"/>
        </div>
        <div className="eachfade">
          <img className="eachfade__card eachfade__card-1" src={img2} alt =" restaurant image"/>
          <img className="eachfade__card eachfade__card-2" src={img5} alt =" restaurant image"/>
          <img className="eachfade__card eachfade__card-3" src={img6} alt =" restaurant image"/>
        </div>
      </Fade>
    </div>
        </>

    );
}

export default SlideShow;