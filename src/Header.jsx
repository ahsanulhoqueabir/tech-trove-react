import { Link, NavLink } from "react-router-dom";
import logo from ".//assets/devices.png";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { CartContext } from "./App";
const Header = () => {
  const [cart, setCart] = useContext(CartContext);
  // console.log(cart.length);
  let total = 0;
  if (cart.length > 0) {
    {
      cart.map((cart) => {
        total += cart.quantity;
      });
    }
  }
  return (
    <div className="py-2 z-50 px-16 bg-blue-100 flex flex-col md:flex-row gap-4 justify-between items-center shadow-xl sticky top-0">
      <div>
        <Link className="flex gap-2 items-center">
          <img src={logo} className=" h-14" alt="" />
          <span className="text-2xl font-bold animate-logo">TechTrove</span>
        </Link>
      </div>
      <div className="text-xl font-semibold flex gap-4 items-center">
        <NavLink className={({ isActive }) => isActive && "activeNav"} to="/">
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive && "activeNav"}
          to="/shop"
        >
          Shop
        </NavLink>
        <div className="indicator">
          <span className="indicator-item badge bg-transparent text-lg ">{total}</span>

          <NavLink to="/cart">
            <ShoppingCartIcon className="h-5 text-teal-700 "></ShoppingCartIcon>{" "}
          </NavLink>
        </div>
        <NavLink
          className={({ isActive }) => isActive && "activeNav"}
          to="/about"
        >
          About Us
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
