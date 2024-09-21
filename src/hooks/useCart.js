
import { useContext, useEffect } from "react";
import CartContext from "../context/CartContext";
import { getCartByUSer } from "../api/fakestoreProd";
import axios from "axios";

function useCart(userId){
    console.log(userId);
    useEffect(()=>{
        fetchUserCart(userId);
      },[userId])
    const {cart,setCart}= useContext(CartContext);

  async function fetchUserCart(userId){
    console.log(userId)
    const response = await axios.get(getCartByUSer(userId.id));
    setCart(response.data[0])
  }

  return [cart,setCart];

}
export default useCart;