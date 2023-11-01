import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ProductPage.css'
import img4 from '../../assets/images/jeans-1.jpg'
import img2 from '../../assets/images/jeans-2.jpg'
import img3 from '../../assets/images/jeans-3.jpg'
import img1 from '../../assets/images/jeans-4.jpg'
import ProductsCarousel from "../FetchApiProducts/productsCarousel";
import { CartContext } from "../../App";

const productImg = [img1,img2,img3,img4]

const ProductPage = ()=>{
    const {id}=useParams()
    // console.log(id);

    const [product,setProduct] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`http://localhost:8000/product/${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                });
  
                if (res.ok) {
                    const data = await res.json();
                    const {searchedProduct} = data;
                    console.log(searchedProduct)
                    setProduct(searchedProduct)
                } else {
                    console.error("Failed to fetch data");
                }
            } catch (error) {
                console.error("An error occurred while fetching data:", error);
            }
        };
  
        fetchData();
    }, []);

    const  [mainImg,setMainImg] = useState(img1)
    const handleSetImg = (img)=>{
        setMainImg(img)
    }

    const colors = [
        'black',
        'blue',
    ]

    const sizes = [
        25,26,27,28,29,30,31,32,33,34
    ]

    const details = [
        'Style : Auty Jeans','Fit : Relaxed Fit','Fabric : Stretch Denim.','Length : Regular'
    ]

    const [selectedSize,setSelectedSize]=  useState('')

    const [isAddedToCart,setIsAddedToCart] = useState(false)

    const {addItem,removeItem} = useContext(CartContext)
    const handleAddToCart = ()=>{
        setIsAddedToCart((isAddedToCart)=>!isAddedToCart)

        isAddedToCart?addItem(product.id,product.name,product.price):removeItem(product.id)
    }

    // const product = {
    //     name:'Nothing',
    //     id:'None',
    //     price:'none',
    // }

    return(
        <div className="product-page-wrapper">
        <div className="product-page-container" style={{marginBottom:'1.3rem'}}>
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
                <div className="product-name-heading-container">
                    <h1 className="product-name-heading">
                        {product.name}
                    </h1>
                </div>
                <div className="product-price-container">
                    <div className="price-after-sale">
                        ${product.price}
                    </div> 
                    <div className="price-before-sale">
                        $100
                    </div>
                </div>
                <div className="product-ratings-container">

                </div>
                {/* <div className="product-colors-filter-container">
                    {colors.map((color)=>{
                        return(
                            
                               <div className="color-container" style={{backgroundColor:color}}>

                                </div> 
                            
                        )
                    })}
                </div> */}
                <div className="product-sizes-container">
                    <div className="product-sizes-heading">
                        Select Size
                    </div>
                    <div className="product-available-sizes">
                        {sizes.map((size)=>{
                            return(
                                <div className={`single-size-container ${selectedSize==size?'selected':''}`} onClick={()=>setSelectedSize(size)}>
                                    {size}
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="product-details-desc">
                    <div className="product-desc">
                        <h3 className="product-desc-heading">
                            Product Description
                        </h3>
                        <div className="product-desc-content">
                            {product.description}
                        </div>
                        
                    </div>
                    <div className="product-details">
                        <h3 className="product-detail-heading">
                            Product Details
                        </h3>
                        <ul className="product-details-lists">
                            {details.map((detail)=>{
                                return(
                                    <li className="product-dets">
                                       {detail}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="cart-and-buy-btn">
                    <button className="add-to-cart-btn" onClick={
                        handleAddToCart
                    } style={isAddedToCart?{backgroundColor:'black',color:'white'}:{backgroundColor:'black',color:'white'}}>
                        {isAddedToCart?'Added To Cart':'Add to Cart'}
                    </button>
                </div>
            </div>
        </div>
        <div className="more-items-lists">
            <h2>Checkout More</h2>
        </div>
        <ProductsCarousel category='shirt'/>
        <ProductsCarousel category='accessories'/>
        </div>
    )
}

export default ProductPage;