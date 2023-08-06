import React from "react";
import {AiFillFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import './footer.css'

const Footer = ()=>{
    return(
        <div className="footer-section">

            <div className="footer-div">
                <div className="to-pages">
                    <h2>Checkout</h2>
                    <div className="about-page">
                        About
                    </div>
                    <div className="contact-page">
                        Contact Us
                    </div>
                    <div className="customer-page">
                        Customer
                    </div>
                    <div className="deals-page">
                        Deals
                    </div>
                </div>

                <div className="category-sections">
                    <h2>Categories</h2>
                    <div className="mens-section">Mens</div>
                    <div className="womens-section">Womens</div>
                    <div className="kids-section">Kids</div>
                    <div className="mens-section">Accessories</div>
                </div>

                <div className="all-socials">
                    <div className="facebook-container">
                        <AiFillFacebook/>
                    </div>
                    <div className="instagram-container">
                        <BsInstagram/>
                    </div>
                </div>

                <div className="subscribe-for-deals">
                    <form>
                        <input type="email" name="user-email" id="" placeholder="Please Enter your email"/>
                        <button type="submit" className="subscribe-btn">
                            Subscribe
                        </button>
                    </form>
                
                </div>
            </div>
            
        </div>
    )
}
export default Footer