import { getFromLocalStorage } from "../utilities/fakedb";

export const GetCartProductData = async () => {
  const productsData = await fetch(
    "https://raw.githubusercontent.com/ahsanul-database/fakeDB/main/techTrove.json"
  );
  const products = await productsData.json();

  const savedCart = getFromLocalStorage();
  let cartData = [];
  for (let id in savedCart) {
    const findProduct = products.find((product) => product.id === id);
    if (findProduct) {
      const quantity = savedCart[id];
      findProduct.quantity = quantity;
      cartData.push(findProduct);
    }
  }
  return { cartData,products};
};

// export {GetCartProductData}
