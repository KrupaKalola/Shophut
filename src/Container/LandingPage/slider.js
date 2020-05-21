import React from 'react'
import Slider from "react-slick";
import slider1 from './../../images/slider1.jpg'
import slider2 from './../../images/slider2.jpg'
import slider3 from './../../images/slider3.jpg'
import './landingPage.css'


function SliderMain() {
    var settings = {
        dots: false,
        infinite: true,
        autoplaySpeed: 3000,
        autoplay: true,
        speed:10,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <Slider {...settings} >
        <img src={slider1} height='550px'></img>
        <img src={slider2} height='550px'></img>
        <img src={slider3} height='550px'></img>
      </Slider>
    )
}

export default SliderMain

