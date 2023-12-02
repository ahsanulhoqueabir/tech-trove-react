import { createContext, useState } from "react";
import "./App.css";
import Header from "./Header";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./components/Footer";
import MyModal from "./components/Modal";
export const ProductContext = createContext([]);
export const CartContext = createContext([]);
const App = () => {
  let [isOpen, setIsOpen] = useState(true);
  const { cartData, products } = useLoaderData();
  // console.log(cartData.length);
  const [cart, setCart] = useState(cartData);

  const cartAlert = sessionStorage.getItem("alert");
  if (cartData.length > 0 && cartAlert !== 'true') {
    setIsOpen(true);
    sessionStorage.setItem("alert", false)
  }

  return (
    <ProductContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>
        <Header />
        <div className="min-h-[calc(100vh-72px)] ">
          <Outlet />
        </div>
        <Footer />
        <MyModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default App;
