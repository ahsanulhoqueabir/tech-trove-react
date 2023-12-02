import { TrashIcon } from "@heroicons/react/24/solid";

const ShowCart = ({ product,removeCart }) => {
  const { id, price, picture, name, category, quantity } = product;
  console.log(product);
  return (
    <div className="flex p-2 justify-between bg-green-200">
      <div className="flex gap-3">
        <img className=" h-28" src={picture} alt="" />
        <div className="font-bold flex flex-col justify-start items-start">
          <div className="flex-1">
          <h2 className="">{name}</h2>
          <p className="text-gray-400 ">Quantity: {quantity}</p>
          </div>
          <div className="pb-2">
            <button onClick={()=> removeCart(id)} className="font-mono font-normal flex items-center">
              <TrashIcon className="h-5 text-red-500 pr-1" /> Remove
            </button>
          </div>
        </div>
      </div>
      <div className=" text-right pr-3">
        <p>{price}$</p>
        <p>Total: {quantity * price}$</p>
      </div>
    </div>
  );
};

export default ShowCart;
