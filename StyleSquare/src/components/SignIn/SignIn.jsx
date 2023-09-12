import {AiOutlineUser} from 'react-icons/ai';
import {BsShieldLock} from 'react-icons/bs'
import {BsApple} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import img from '../../assets/images/signin-signup-img.png'
import './SignIn.css'


const SignIn = ()=>{
    return(
        <div className="signin-page">
            <div className="signin-page-container">
                <div className="signin-img-container">
                    <img src={img} alt="ecommerce-image" />
                </div>
                <div className="signin-inputs-container">
                    <div className="input-header-container">
                        SIGN IN
                    </div>
                    <div className="signin-email-container">
                        <div className="signin-email-input">
                            <AiOutlineUser className="user-icon"/>
                            <input type="email" className="email-input-container" placeholder="Enter email address..."
                            />
                        </div>
                        
                    </div>
                    <div className="signin-password-input-container">
                        <div className="signin-password-input">
                            <BsShieldLock className="lock-icon"/>
                            <input type="password" className="passwor-input" placeholder="Enter Password"
                            />
                        </div>
                    </div>
                    <div className="signin-btn-container">
                        <button className="signin-btn">SignIn
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

export default SignIn;