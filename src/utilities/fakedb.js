// Add data to locat storage 
const addToLocalStorage = (id)=> {
let shoppingCart = {}

// get previous data from local storage 
const exists = localStorage.getItem('shopping-cart')
    if(exists)
    {
        shoppingCart = JSON.parse(exists);
    }

    // add quantity 
    const quantity = shoppingCart[id];
    if(quantity)
    {
        const newQuanatity = quantity +1;
        shoppingCart[id] = newQuanatity;
    }
    else
    {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const getFromLocalStorage= ()=>
{
    const exists = localStorage.getItem('shopping-cart');
    return exists ? JSON.parse(exists) : {};
}

const removeAll= ()=>
{
    localStorage.removeItem('shopping-cart');
}

const removeTargetCart =(id) =>
{
    const exists = getFromLocalStorage();
    if(exists)
    {
        delete exists[id];
        localStorage.setItem('shopping-cart', JSON.stringify(exists));
    }

}


export {addToLocalStorage,getFromLocalStorage,removeAll,removeTargetCart}