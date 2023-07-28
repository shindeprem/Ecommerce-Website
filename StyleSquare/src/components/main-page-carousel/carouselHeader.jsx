import React from "react";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/images/Shirt1.png'
import './carouselHeader.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const CarouselHeader = ()=>{
    return(
        <>
        <Carousel infiniteLoop={true} infinite={true} autoPlay={true}   showStatus={false} autoPlaySpeed={3000}>
                <img src={img1} alt="" className="ad1 shirt-sale-ad ad"/>
                <img src={img1} alt="" className="ad1 shirt-sale-ad ad"/>
                <img src={img1} alt="" className="ad1 shirt-sale-ad ad"/>
        </Carousel>
        </>
    )
}

export default CarouselHeader;