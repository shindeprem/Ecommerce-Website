import React, { useContext } from "react";
import './Product-Card.css'
import {BsBag} from 'react-icons/bs'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { CartContext } from "../../App";

const ProductCard = (product)=>{
    const {addItem} = useContext(CartContext);
    return(
        <div className="product-card">
            <div className="img-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQGflCsSDWOf7lxO0rEKy9HNZrfpNPzZtSg&usqp=CAU" alt="" className="product-img" />

                <div className="discount-card">
                    <p className="discount-amt">
                        15% Off
                    </p>
                </div>
            </div>

            <div className="product-details">
                <div className="product-name-heading">
                    <h2 className="product-name">
                        Black autty Shirt
                    </h2>
                </div>
                <div className="product-description">
                    <p className="product-desc">
                        Lorem ipsum dolor sit amet, consec tetur adipisicing elit...
                    </p>
                </div>
                <div className="product-price">50$</div>

                <div className="btn-container">
                    <button className="add-to-cart" onClick={()=>{addItem(product.name,product.id)}}><AiOutlineShoppingCart className="cart-icon"/>Add to cart</button>
                    <button className="buy-now-btn"><BsBag className="bag-icon"/> Buy Now</button>
                </div>
            </div>
            
        </div>
    )
}

export default ProductCard;