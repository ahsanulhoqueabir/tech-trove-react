import { useLoaderData, useNavigation } from "react-router-dom";
import Product from "./Product";
import { addToLocalStorage } from "../utilities/fakedb";
import { useContext } from "react";
import { CartContext, ProductContext } from "../App";
import toast from "react-hot-toast";
import LoadingPage from "./LoadingPage";

const Shop = () => {
  const loading = useNavigation();
    if(loading.state ==='loading')
    {
       return  <LoadingPage/>;
    }
    const [cart,setCart] =useContext(CartContext || [])

    const allProducts = useContext(ProductContext)
    
  // card button handler
  const addToCart = (product) => {
    
    // console.log(id);

    let newCart = [];
    const exist = cart.find(pd => pd.id === product.id)
    if(!exist) 
    {
        product.quantity =1
        newCart= [...cart,product]
    }
    else
    {
        const rest = cart.filter(pd => pd.id !== product.id)
        exist.quantity +=1
        newCart = [...rest,exist]
    }
    setCart(newCart)
    
    addToLocalStorage(product.id)
    toast.success('Product Added ! 🛒')
  };

  return (
    <div className="py-20 px-4 lg:mx-20">
      <p className="text-3xl text-center">
        Total Avilable Product: {allProducts.length}{" "}
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 ">
        {allProducts.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Shop;
