import React, { createContext, useEffect, useState } from "react";
import ProductCard from '../../components/Product-Card/Product-Card'
import './ProductsListing.css'
import Filters from "../../components/Filters/filters";
import {AiOutlineRight} from 'react-icons/ai'
import { Link } from "react-router-dom";
import PagesComp from "../../components/Pagination/pagination";

const ProductListing = ()=>{
    
    const [productList, setProductList] = useState([])
    useEffect(() => {
      const fetchData = async () => {
          try {
              const res = await fetch('http://localhost:8000/allProducts', {
                  method: "GET",
                  headers: {
                      "Content-Type": "application/json"
                  },
              });

              if (res.ok) {
                  const data = await res.json();
                  const {allProducts} = data
                  setProductList(allProducts)
              } else {
                  console.error("Failed to fetch data");
              }
          } catch (error) {
              console.error("An error occurred while fetching data:", error);
          }
      };

      fetchData();
  }, []);


  // -----------------------------------------

    const [isOpenFilter,setIsOpenFilter] = useState(false)
    const handleFilter = ()=>{
      setIsOpenFilter((isOpenFilter)=>!isOpenFilter)
    }

    const [filteredArray,setFilteredArray] = useState(productList)

    useEffect(()=>{
        setFilteredArray(productList)
    },[productList])

    return(
        <>
        <div className="product-listing" style={{height:isOpenFilter?'600px':''}}>

            {/* <Link to={'/products/cart'}>Your Cart</Link> */}

            <div className={`filters-on-btn ${isOpenFilter?'not-show-filter-btn':''}`}>
              <div className="btn-container" onClick={handleFilter}>
                Filters <AiOutlineRight/>
              </div>
              
            </div>
            <div className={`${isOpenFilter?'open-filter':'close-filter'} filter-sidebar`}>
              <Filters className="all-filters" isOpen={isOpenFilter} setIsOpen={setIsOpenFilter} filteredArray={filteredArray} productList={productList} setFilteredArray={setFilteredArray}/> 
              {/* pass array and setArray */}
            </div>
            <div className="all-products">
                {filteredArray.map((product,index)=>{
                    return(
                      
                        <ProductCard className={` product-card`} key={index}  {...product}/>
                    )
                })}
            </div>
        </div>
        <div className="pages-component">
            <PagesComp/>
        </div>
        </>
    )
}

export default ProductListing;