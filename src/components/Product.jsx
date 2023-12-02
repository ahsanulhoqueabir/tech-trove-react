const Product = ({ product, addToCart }) => {
  // console.log(product);
  const { id, price, picture, name, category } = product;
  return (
    <div className="rounded-lg bg-green-200 shadow-lg p-4">
      <img src={picture} alt="" />
      <div>
        <p className="text-xl font-bold pt-3">{name}</p>

        <div className="flex pt-4 flex-col justify-start">
          <p className="text-xl">Category: {category}</p>
          <p className="text-xl font-bold">Price: ${price}</p>
        </div>
        <div className="flex justify-center py-4">
          <button
            className="btn bg-blue-300 hover:bg-white h-14 capitalize rounded-full w-[85%] "
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
