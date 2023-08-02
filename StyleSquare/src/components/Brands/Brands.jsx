import React from "react";
import img1 from '../../assets/BrandLogos/CK.png'
import img2 from '../../assets/BrandLogos/chanel.png'
import img3 from '../../assets/BrandLogos/armani.png'
import img4 from '../../assets/BrandLogos/lv.png'
import img5 from '../../assets/BrandLogos/vogue.png'
import img6 from '../../assets/BrandLogos/zara.png'
import './Brands.css'

const AllBrands = () =>{
    return(
        <div className="all-brands-container">
            <h1 className="brands-heading">Top Brands</h1>
            <div className="all-brands">
                <div className="brand-logo">
                    <img src={img3} alt="" />
                </div>
                <div className="brand-logo">
                    <img src={img2} alt="" />
                </div>
                <div className="brand-logo">
                    <img src={img1} alt="" />
                </div>
                <div className="brand-logo">
                    <img src={img4} alt="" />
                </div>
                <div className="brand-logo">
                    <img src={img5} alt="" />
                </div>
                <div className="brand-logo">
                    <img src={img6} alt="" />
                </div>
            </div>
        </div>
    )
}
export default AllBrands;