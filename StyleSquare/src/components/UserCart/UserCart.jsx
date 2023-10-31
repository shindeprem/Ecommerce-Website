import { useContext } from "react";
import CartProduct from "./CartProduct";
import { CartContext } from "../../App";
import './UserCart.css'
import img1 from '../../assets/images/blue-striped-shirt.jpg'

const UserCart = ()=>{

    // const {item,increment,decrement,clearCart,totalItems} = useContext(CartContext)

    const item = [
        {
            name:'Shirt hai bhai',
            price:'$190',
            image:img1,
            quanitity:4,
        },
        {
            name:'Shirt hai bhai',
            price:'$190',
            image:img1,
            quanitity:4,
        },
        {
            name:'Shirt hai bhai',
            price:'$190',
            image:img1,
            quanitity:4,
        },
        {
            name:'Shirt hai bhai',
            price:'$190',
            image:img1,
            quanitity:4,
        },
        {
            name:'Shirt hai bhai',
            price:'$190',
            image:img1,
            quanitity:4,
        },
        {
            name:'Shirt hai bhai',
            price:'$190',
            image:img1,
            quanitity:4,
        },
    ]
    return(
        <div className="cart-items-container">
            {item.map((item)=>{
                return(
                    <>{item.name}</>
                )
            })}
        </div>
    )
}

export default UserCart;