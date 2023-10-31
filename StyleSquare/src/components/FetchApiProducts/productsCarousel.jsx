import React, { useState,useRef,useEffect } from "react"
import './productCarousel.css'
import shirt1 from '../../assets/images/blue-striped-shirt.jpg'
import shirt2 from '../../assets/images/white-btn-shirt.jpg'
import shirt3 from '../../assets/images/red-plaid-shirt.jpg'
import saree1 from '../../assets/images/saree.jpg'
import {AiFillCaretRight} from 'react-icons/ai'
import {AiFillCaretLeft} from 'react-icons/ai'
import Axios from 'axios'

const ProductsCarousel=(prop)=>{
    //console.log(prop);

    const productsContainerRef = useRef(null);

    

    useEffect(() => {
      const fetchData = async () => {
          try {
              const res = await fetch('http://localhost:8000/allProducts', {
                  method: "GET",
                  headers: {
                      "Content-Type": "application/json"
                  },
              });

              if (res.ok) {
                  const data = await res.json();
                  setCarouselList(data.allProducts.filter((product) => product.category.includes(prop.category)));
              } else {
                  console.error("Failed to fetch data");
              }
          } catch (error) {
              console.error("An error occurred while fetching data:", error);
          }
      };

      fetchData();
  }, [prop.category]);
    const [carouselList,setCarouselList] = useState([])

    useEffect(() => {
        setCarouselList(carouselList.filter((product) => product.category.includes(prop.category)));
    }, [prop.category]);

    const handleScrollRight = () =>{
        const scrollAmount = 260; 
        productsContainerRef.current.scrollBy({
            left: scrollAmount,
            behavior: 'smooth',
        });
    }

    const handleScrollLeft = () =>{
        const scrollAmount = 260; 
        productsContainerRef.current.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth',
        });
    }
      
    return(
        <div className="products-carousel">
            <div className="scrollDiv">

                <button className="move-left-btn move-products-btn" onClick={handleScrollLeft}><AiFillCaretLeft/></button>

                <div className="itemsContainer" ref={productsContainerRef}>
                    {carouselList.map((product)=>{
                        return(
                            <div className="item-card" key={product.id}>
                                <div className="img-container">
                                    <img src={product.image} alt="" />
                                </div>
                                <div className="info-container">
                                    <div className="card-heading">
                                    {product.name}
                                    </div>
                                    <div className="product-price">
                                    ${product.price}
                                    </div>
                                </div>
                                
                            </div>
                        )
                    })}
                </div>

                <button className="move-right-btn move-products-btn" onClick={handleScrollRight}><AiFillCaretRight/></button>
            </div>
        </div>
    )
}
export default ProductsCarousel;