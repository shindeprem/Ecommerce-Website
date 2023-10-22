import { useContext } from "react";
import CartProduct from "./CartProduct";
import { CartContext } from "../../App";

const UserCart = ()=>{

    const {item,increment,decrement,clearCart,totalItems} = useContext(CartContext)

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