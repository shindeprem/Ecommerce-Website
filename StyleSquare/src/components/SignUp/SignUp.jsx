import React, { useState , useEffect} from "react";
import './SignUp.css'
import {AiOutlineUser} from 'react-icons/ai';
import {BsShieldLock} from 'react-icons/bs'
import {BsApple} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import img from '../../assets/images/signin-signup-img.png'

const SignUp = ()=>{

    const [user,  setUser] = useState({
        emailId:'',password:'',confirmPassword:''
    })

    const handleSetUser = (e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setUser({...user,[name]:value})
    }

    useEffect(()=>{
        console.log(user);
    },[user])

    return(
        <div className="signup-page">
            <div className="signup-page-container">
                <div className="signup-img-container">
                    <img src={img} alt="ecommerce-image" />
                </div>
                <div className="signup-inputs-container">
                    <div className="input-header-container">
                        SIGN UP
                    </div>
                    <div className="signup-email-container">
                        <div className="signup-email-input">
                            <AiOutlineUser className="user-icon"/>
                            <input name="emailId" onChange={handleSetUser} type="email" className="email-input-container" placeholder="Enter email address..."
                            />
                        </div>
                        
                    </div>
                    <div className="signup-password-input-container">
                        <div className="signup-password-input">
                            <BsShieldLock className="lock-icon"/>
                            <input name='password' onChange={handleSetUser} type="password" className="passwor-input" placeholder="Enter Password"
                            />
                        </div>
                    </div>
                    <div className="signup-confirm-password-container">
                        <div className="signup-confirm-password-input">
                            <BsShieldLock className="lock-icon"/>
                            <input name='confirmPassword' onChange={handleSetUser}
                            type="password" className="confirm-password-input" placeholder="Confirm Password"
                            />
                        </div>
                    </div>
                    <div className="signup-btn-container">
                        <button className="signup-btn">SignUp
                        </button>
                    </div>
                    <div className="bottom-border"/>

                    <div className="social-media-container">
                        <div className="google-icon-container">
                            <FcGoogle className="socials-icon google-icon"/>
                        </div>
                        <div className="apple-icon-container">
                            <BsApple className="socials-icon apple-icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;