import React from "react";
import Header from "../../components/Header/header";
import CarouselHeader from "../../components/main-page-carousel/carouselHeader";
import ProductsCarousel from "../../components/FetchApiProducts/productsCarousel";
import './mainPage.css'
import AllBrands from "../../components/Brands/Brands";
import Footer from "../../components/Footer/footer";

const MainPage =()=>{


    return(
    <>
    {/* <Header/> */}
    <CarouselHeader/>
    <ProductsCarousel category='shirt'/>
    <ProductsCarousel category='saree'/>
    <AllBrands/>
    {/* Add another infinite moving list */}
    {/* Add another product lists */}
    <ProductsCarousel category='kids'/>
    {/* Add another product lists */}
    <ProductsCarousel category='accessories'/>
    
    {/* <Footer/> */}
    </>
    )
}

export default MainPage;