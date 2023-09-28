import { useContext } from "react";
import CartProduct from "./CartProduct";
import { CartContext } from "../../App";

const UserCart = ()=>{

    const {name,increment,decrement,clearCart,totalItems} = useContext(CartContext)

    return(
        <></>
    )
}

export default UserCart;