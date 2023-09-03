import React from "react";
import { useParams } from "react-router-dom";
import './ProductPage.css'

const ProductPage = ()=>{
    const {id}=useParams()
    // console.log(id);
    return(
        <div className="product-page-container">
            <div className="product-img-carousel">
                
            </div>
            <div className="product-main-photo-conntainer">

            </div>
            <div className="product-info-container">

            </div>
        </div>
    )
}

export default ProductPage;