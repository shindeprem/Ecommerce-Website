import React from "react";
import {Link,Route,Routes} from 'react-router-dom'
import './App.css'
import MainPage from "./pages/Main/mainPage";
import ProductListing from "./pages/products-listing/ProductsListing";
import ProductsLayout from "./pages/Products-Layout/ProductsLayout";
import Filters from "./components/Filters/filters";

const App =()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<ProductsLayout/>}>
                <Route index element={<MainPage/>}/>
                <Route path="product-listing" element={<ProductListing/>}/>
                <Route path="test-filters" element={<Filters/>}/>
            </Route>
        </Routes>
        </>
    )
}
export default App;