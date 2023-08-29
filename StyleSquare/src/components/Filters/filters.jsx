import React, { useEffect, useState } from "react";
import './filter.css'
import { useContext } from "react";


const Filters = () =>{

    const selectColors = ['red','pink','yellow','gray','black','orange']
    const [selectedColors,setSelectedColors] = useState([])
    const addColor = (color) => {
        if (selectedColors.includes(color)) {
            setSelectedColors((prevSelectedColors) => prevSelectedColors.filter((selectedColor) => selectedColor !== color));
        } else {
            setSelectedColors([...selectedColors, color]);
        }
    }
    

    useEffect(()=>{
            console.log(selectedColors);
    },[selectedColors])
    

    
    return(
        // filter, sorting, pagination
        <div className="filters-sidebar">
            <form className="filters-form-container">
                <div className="filters-section">
                    <div className="colors-section">
                        <h2 className="colors-filter-heading">Filter by colors</h2>
                        <div className="colors-selection-filters">
                            {selectColors.map((color,index)=>{
                                return(
                                    <div 
                                    style={{backgroundColor:
                                        color,}} 
                                    onClick={()=>addColor(color)} 
                                    key={index}
                                    className={`${selectedColors.includes(color)?'selected':''} color-container`}
                                    >
                                        <h3>{color.slice(0,1).toLocaleUpperCase()}</h3>
                                    </div>
                                )
                            })}
                        </div>
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