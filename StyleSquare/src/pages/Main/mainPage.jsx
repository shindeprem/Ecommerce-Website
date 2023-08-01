import React from "react";
import Header from "../../components/Header/header";
import CarouselHeader from "../../components/main-page-carousel/carouselHeader";
import ProductsCarousel from "../../components/FetchApiProducts/productsCarousel";
import './mainPage.css'

const MainPage =()=>{


    return(
    <>
    <Header/>
    <CarouselHeader/>
    {/* Add Product list of category shirts */}
    <ProductsCarousel category='shirt'/>
    {/* Add Product list of category clothes */}
    <ProductsCarousel category='saree'/>
    {/* Add Infinite moving lists */}
    {/* Add another infinite moving list */}
    {/* Add another product lists */}
    {/* Add another product lists */}
    {/* Footer */}
    </>
    )
}

export default MainPage;