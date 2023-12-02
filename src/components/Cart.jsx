import { Link, useLoaderData, useNavigation } from "react-router-dom";
import { getFromLocalStorage, removeAll, removeTargetCart } from "../utilities/fakedb";
import ShowCart from "./ShowCart";
import { useContext, useState } from "react";
import Lottie from "lottie-react";
import CartAni from "../assets/cart.json";
import { CartContext } from "../App";
import toast from "react-hot-toast";
import LoadingPage from "./LoadingPage";

const Cart = () => {
  const loading = useNavigation();
    if(loading.state ==='loading')
    {
       return  <LoadingPage/>;
    }
//   const { cartData } = useLoaderData();
const [cart,setCart] =useContext(CartContext || [])
let total = 0;
  if (cart.length > 0) {
    {
      cart.map((cart) => {
        total += cart.price * cart.quantity;
      });
    }
  }

  const removeCart = (id) =>
  {
    const remaining = cart.filter(product =>product.id !== id)
    setCart(remaining)
    removeTargetCart(id)
    return toast.success('Removed Successfully')
  }

  const allCartDelete = () => 
  {
    if(cart.length)
    {
      setCart([])
      removeAll();
      return toast.success('Cart Clear Done')

    }
    return toast.error('Cart Empty')
  }
// Place order 
const OrderHandler = ()=>{
  if(cart.length > 0)
  {
    setCart([])
    removeAll()
    return toast.success('Order Done')
  }
  return toast.error('Cart Empty')
}



  return (
    <>
      <p className="py-10 text-3xl font-bold text-center">
        {cart.length ? "Review Cart Items" : "Cart is Empty"}
      </p>
      <div className=" min-h-screen lg:w-[80%] m-auto flex ">
        <div className=" rounded-md w-full max-w-2xl">
          <div className=" divide-y-2 divide-black">
            {cart.map((cartt) => (
              <ShowCart key={cartt.id} product={cartt} removeCart={removeCart}></ShowCart>
            ))}
          </div>
          <div className="text-right pt-11">
            <p>
              Total amount: <span className="font-bold">{total}$</span>
            </p>
            <small>Not including taxes and shipping costs</small>
          </div>
          <div className="text-right py-5">
            {cart.length ? (
              <button onClick={allCartDelete}  className="btn-secondary">Clear Cart</button>
            ) : (
              <Link to='/shop' className="btn-secondary">Back to Shop</Link>
            )}
            <button onClick={OrderHandler} className="btn-primary">Place Order</button>
          </div>
        </div>
        <div className="w-[50%]">
          <Lottie animationData={CartAni}></Lottie>
        </div>
      </div>
    </>
  );
};

export default Cart;
