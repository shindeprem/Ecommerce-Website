import React, { useState } from "react";
import { useParams } from "react-router-dom";
import './ProductPage.css'
import img1 from '../../assets/images/jeans-1.jpg'
import img2 from '../../assets/images/jeans-2.jpg'
import img3 from '../../assets/images/jeans-3.jpg'
import img4 from '../../assets/images/jeans-4.jpg'


const productImg = [img1,img2,img3,img4]

const ProductPage = ()=>{
    const {id}=useParams()
    // console.log(id);

    const  [mainImg,setMainImg] = useState(img1)
    const handleSetImg = (img)=>{
        setMainImg(img)
    }

    return(
        <div className="product-page-container">
            <div className="product-img-carousel">
                {productImg.map((img)=>{
                    return(
                        <div className="img-container" onClick={()=>{handleSetImg(img)}} onMouseOver={()=>{handleSetImg(img)}}>
                            <img src={img} 
                            className='product-img'
                            alt="Product Image" />
                        </div>
                    )
                })}
            </div>
            <div className="product-main-photo-container">
                <div className="product-img-container">
                    <img src={mainImg} alt="" className="main-product-img" />
                </div>
            </div>
            <div className="product-info-container">

            </div>
        </div>
    )
}

export default ProductPage;