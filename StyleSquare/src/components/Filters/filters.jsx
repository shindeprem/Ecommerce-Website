import React, { useState } from "react";
import './filter.css'
import { useContext } from "react";


const Filters = () =>{

    const selectColors = ['blue','red','yellow','gray','black','orange']
    const [selectedColors,setSelectedColors] = useState([])
    
    return(
        // filter, sorting, pagination
        <div className="filters-sidebar">
            <form className="filters-form-container">
                <div className="filters-section">
                    <div className="colors-selection-filters">
                        {selectColors.map((color)=>{
                            return(
                                <div className="color-container" style={{backgroundColor:color}}>{color.slice(0,1).toLocaleUpperCase()}</div>
                            )
                        })}
                    </div>
                    <div className="price-filter"></div>
                    <div className="sorting-filter"></div>
                    <div className="brands-filters"></div>
                    <div className="category-filters"></div>
                </div>
            </form>
        </div>
    )
}

export default Filters;