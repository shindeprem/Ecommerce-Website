import React, { useEffect, useState } from "react";
import './filter.css'
import { useContext } from "react";
import {AiFillCloseCircle} from 'react-icons/ai'


const Filters = ({isOpen,setIsOpen,filteredArray,setFilteredArray,productList}) =>{

    // console.log(filteredArray);

    const selectColors = ['Red','Pink','Yellow','Gray','Black','Orange']
    const [selectedColors,setSelectedColors] = useState([])
    const addColor = (color) => {
        if (selectedColors.includes(color)) {
            setSelectedColors((prevSelectedColors) => prevSelectedColors.filter((selectedColor) => selectedColor !== color));
        } else {
            setSelectedColors([...selectedColors, color]);
        }

    }



    
    const [highestRate,setHighestRate] = useState(1000)
    const handlePriceChange =(e)=>{
        const {value} = e.target;
        setHighestRate(value)
    }

    const [selectedSorting,setSelectedSorting] = useState('')
    // const [sortedArr,setSortedArr] = useState(availableClothesArr)
    const handleSort = (e)=>{
        const {value} = e.target;
        console.log(value);
        setSelectedSorting(value)

        // const sortedArr = [...clothesArr].sort((a,b)=>{
        //     if(selectedSorting==='high-to-low'){
        //         return a.price - b.price;
        //     }else if(selectedSorting==='low-to-high'){
        //         return b.price - a.price;
        //     }else{
        //         // do nothing
        //     }
        // })

        // setSortedArr(sortedArr)
    }

    const categories = ['kids','women','mens','jeans','shirt','saree','hoodie']
    const [selectedCategories,setSelectedCategories] = useState([])
    const handleCategoryFilter = (category)=>{
        if (selectedCategories.includes(category)) {
            setSelectedCategories((prevSelectedCategories) => prevSelectedCategories.filter((selectedCategory) => selectedCategory !== category));
        } else{
            setSelectedCategories([...selectedCategories, category]);
        }
    }
    
    useEffect(()=>{
        // console.log(selectedColors);
        // console.log(highestRate);
        // console.log(selectedCategories);
        //console.log(highestRate);
    },[selectedColors,highestRate,selectedCategories])


    
    // ================================== Array Filtering =========================================================


    useEffect(()=>{
        let filteredProducts = productList;

        if (selectedColors.length > 0) {
            filteredProducts = filteredProducts.filter((product) => selectedColors.includes(product.color));
        }

        if (highestRate !== 1000) {
            filteredProducts = filteredProducts.filter((product) => Number(product.price) <= highestRate);
        }

        filteredProducts = [...filteredProducts].sort((a,b)=>{
            if(selectedSorting==="high-to-low"){
                return b.price - a.price
            }else if(selectedSorting==="low-to-high"){
                return a.price - b.price
            }else{
                return filteredProducts
            }
        })


        if (selectedCategories.length > 0) {
            filteredProducts = filteredProducts.filter((product) =>
                selectedCategories.includes(product.category)
            );
        }


        setFilteredArray(filteredProducts);

        if(filteredArray.length === 0){
            setFilteredArray(productList)
        }

        if (selectedColors.length === 0 && highestRate === 0) {
            setFilteredArray(productList);
        }
        
    },[selectedColors, highestRate,selectedSorting, selectedCategories,productList])
    // ======================================================================================================================
    
    return(
        // filter, sorting, pagination
        <div className="filters-sidebar">
            <div className="close-filter-sidebar">
                <h2 className="close-filter-heading" onClick={()=>{setIsOpen(false)}}>
                    Close<AiFillCloseCircle className="left-arrow"/>
                </h2>
            </div>
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
                    <br/>
                    <div className="price-filter">
                        <div className="filter-by-price">
                            <h2 className="price-filter-heading">
                                Filter by price
                            </h2>
                            <div className="range-filter-container">
                              <input type="range" name="price-range" id="priceRange" min={0} max={1000} onChange={handlePriceChange}
                              value={highestRate}
                              />
                              <div className="labels-container">
                                <label htmlFor="priceRange" className="min-price-label">$0</label> 
                                <label htmlFor="priceRange">$1000</label> 
                              </div>
                                
                            </div>
                            
                        </div>
                    </div>
                    <br />
                    <div className="sorting-filter">
                        <div className="sort-heading-container">
                            <h2 className="sorting-heading">
                                Sort by
                            </h2>
                            <div className="sorting-container">
                                <select name="sorting-selection" id="sortingSelections" className="sort-by-ranges" style={{padding:'10px 20',fontSize:'18px',borderRadius:'10px',width:'100%',maxWidth:'200px'}}
                                onChange={handleSort}
                                >
                                    <option value="select-range">Price Range</option>

                                    <option value="high-to-low">High to Low</option>

                                    <option value="low-to-high" className="low-to-high">Low to High</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="category-filters">
                        <div className="category-filter-heading-container">
                            <h2 className="category-filter-heading">
                                Filter by category
                            </h2>
                        </div>

                        <div className="category-filter-container">
                            {categories.map((category,index)=>{
                                return(
                                    <div className={`${selectedCategories.includes(category)?'selected':''} category-container`}
                                    onClick={()=>{handleCategoryFilter(category)}} key={index}
                                    >
                                        {category.toLocaleUpperCase()}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Filters;