import React from "react";
import {Link,Route,Routes} from 'react-router-dom'
import './App.css'
import MainPage from "./pages/Main/mainPage";

const App =()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
        </Routes>
        </>
    )
}
export default App;