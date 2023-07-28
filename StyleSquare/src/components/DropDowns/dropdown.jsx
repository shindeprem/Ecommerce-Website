import React from "react";
import './dropdown.css'
import {MdKeyboardArrowDown} from 'react-icons/md'

const DropDownMenu =()=>{
    return(
    <>
        <div className="dropdowns-container">
            <div className="womens-section dropdown-menu">
                <h3>Women</h3>
                <MdKeyboardArrowDown className="down-arrow"/>

                <div className="menu-sections-container">
                    
                <div className="Saree">Saree</div>
                    <div className="Pants">Pants</div>
                    <div className="T-Shirts">T-Shirts</div>
                    <div className="Hoodies">Hoodie</div>
                    <div className="jeans">Jeans</div>
                    <div className="jackets">Jackets</div>
                </div>
                
            </div>
            <div className="mens-section dropdown-menu">
                <h3>Men</h3>
                <MdKeyboardArrowDown className="down-arrow"/>
                
                <div className="menu-sections-container">

                    <div className="shirts">
                        Shirt
                    </div>
                    <div className="shorts">Shorts</div>
                    <div className="T-Shirts">T-Shirts</div>
                    <div className="pants">Pant</div>
                    <div className="jeans">Jeans</div>
                    <div className="jackets">Jackets</div>
                </div>
            </div>
            <div className="kids-section dropdown-menu">
                <h3>Kids</h3>
                <MdKeyboardArrowDown className="down-arrow"/>

                <div className="menu-sections-container">
                    <div className="clothes">Clothes</div>
                    <div className="winter">Winter</div>
                    <div className="jackets">Jackets</div>
                </div>
            </div>
        </div>
    </>
    )
}

export default DropDownMenu;