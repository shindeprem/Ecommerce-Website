import { useContext } from "react";
import CartProduct from "./CartProduct";
import { CartContext } from "../../App";
import './UserCart.css'
import img1 from '../../assets/images/blue-striped-shirt.jpg'
import {FiPlus} from 'react-icons/fi'
import {AiOutlineMinus} from 'react-icons/ai'
import {BsBagCheck} from 'react-icons/bs'

const UserCart = ()=>{

    const {item,increment,decrement,clearCart,totalItems,removeItem} = useContext(CartContext)
    console.log(item);

    return(
        <>
        <h1 className="my-cart-heading" style={{maxWidth:'1180px',margin:'10px auto 14px', display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'700',fontSize:'32px',columnGap:'1rem'}}><BsBagCheck/> My Cart </h1>
        <div className="cart-items-container">

            {item.map((item)=>{
                return(
                    <div className="cart-item">
                        <div className="cart-item-img">
                            <img src={item.image}/>
                        </div>
                        <div className="cart-item-info">
                            <div className="cart-item-heading">
                                {item.name}
                            </div>

                            <div className="total-items-price">
                                <div className="items-price-heading">
                                    Total Price :
                                </div>
                                <div className="items-price">
                                    ${Math.round(item.price*(item.quantity))}
                                </div>
                                
                            </div>

                            <div className="quantity-incr-decr-btn">
                                <div className="incr-btn-container" onClick={()=>increment(item.id)}>
                                    <FiPlus/>
                                </div>
                                <input type="number" placeholder={item.quantity} disabled/>
                                <div className="decr-btn-container" onClick={()=>decrement(item.id)}>
                                    <AiOutlineMinus/>
                                </div>
                            </div>

                            <button className="remove-item-btn" onClick={()=>removeItem(item.id)}>Remove Item</button>
                        </div>
                        
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default UserCart;