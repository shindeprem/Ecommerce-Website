import React, { useState } from "react";
import DropDownMenu from "../DropDowns/dropdown";
import './header.css'
import {BsBagCheck} from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'
import {BiLogIn} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'

const Header =()=>{
    const [isOpen,setIsOpen] = useState(false)
    const handleOpenLoginMenu = () =>{
        setIsOpen(!isOpen)
    }
    return(
    <>
    <div className="header-section">
    <div className="header-container">
        <div className="upper-section-header">
            <div className="logo-container">
                <div className="page-logo">
                    <BsBagCheck/>
                </div>
                <h2 className="logo-heading">StyleSquare</h2>
            </div>
        
            <div className="signup-login-container">
                <div className="sign-login-menu-icon">
                    <AiOutlineMenu onClick={handleOpenLoginMenu}/>
                </div>
                <div className="singup-login-menu" style={isOpen?{display:"flex"}:{display:"none"}}>
                    <div className="login-container">
                        <h3 className="login-text">LogIn</h3>
                        <div className="login-icon">
                            <BiLogIn/>  
                        </div>
                    </div>
                    <div className="signup-container">
                        <h3 className="signup-text">SignUp</h3>
                        <div className="signup-icon">
                            <AiOutlineUser/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
        <div className="search-container">
            <form><input type="text" placeholder="Search for Products"/>
            <button className="searchUserInputBtn" type="submit">
                <BiSearch/>
            </button>
            </form>
        </div>
    </div>
    </div>
    <DropDownMenu/>
    </>
    )
}

export default Header;