import React from "react";

const InfiniteCarousel = () =>{
    return(
        <div className="carousel-component">
            <h3 className="carousel-heading">Top Brands</h3>
            <div className="left-moving-carousel">
                <ul className="brands-list">
                    <li className="single-brand"></li>
                    <li className="single-brand"></li>
                    <li className="single-brand"></li>
                    <li className="single-brand"></li>
                    <li className="single-brand"></li>
                    <li className="single-brand"></li>
                    <li className="single-brand"></li>
                    <li className="single-brand"></li>
                </ul>
            </div>
            <div className="right-moving-carousel">
                <ul className="brands-list">
                <li className="single-brand"></li>
                    <li className="single-brand"></li>
                    <li className="single-brand"></li>
                    <li className="single-brand"></li>
                    <li className="single-brand"></li>
                    <li className="single-brand"></li>
                    <li className="single-brand"></li>
                    <li className="single-brand"></li>
                </ul>
            </div>
        </div>
    )
}
export default InfiniteCarousel;