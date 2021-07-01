import {writable,derived} from 'svelte/store';
//import localCart from "../localCart.js";

// cart
const cartItemsStore = writable(getStorageCart());

// Function to calculate the cart's total, can be accessed in components after importing this store and the function using $cartItemsStoreTotal
export const cartItemsStoreTotal = derived(cartItemsStore, ($cart)=>{
    let total = $cart.reduce( (acc,curr) =>{
        return (acc += curr.price * curr.amount);
    },0);

    return total.toFixed(2);
});

// local functions
const remove = (id,items) => {
    return items.filter(item => item.id!==id);
}

const toggleAmount = (id,items,action) =>{
    return items.map( item => {
        let newAmount = item.amount;
        if (action=="inc"){
            newAmount = newAmount + 1;
        }else if (action=="dec"){
            newAmount = newAmount - 1;
        }
        return item.id === id ? {...item,amount:newAmount} : {...item};
    });
}

// gloabl functions
export const removeItem = id =>{
    cartItemsStore.update( storeValue => {
        return remove(id,storeValue)
    });
}

export const increaseAmount = id =>{
    cartItemsStore.update( storeValue =>{
        return toggleAmount(id, storeValue, "inc");
    });
}

export const decreaseAmount = id =>{
    cartItemsStore.update( storeValue =>{
        let item = storeValue.find(item => item.id === id);
        let cart;
        if ( item.amount === 1 ){
            cart = remove(id,storeValue);
        }else{
            cart = toggleAmount(id, storeValue, "dec");
        }
        return [...cart];
    });
}

export const addToCart = product =>{
    cartItemsStore.update( storeValue=>{
        const {id,image,title,price} = product;
        let item = storeValue.find( item => item.id === id);
        let cart;
        if ( item ){
            cart = toggleAmount(id,storeValue,'inc');
        }else{
            let newItem = {id,image,title,price,amount:1};
            cart = [...storeValue,newItem];
        }
        return cart;
    })
}

// localStorage
function getStorageCart(){
    return localStorage.getItem('cart') ? JSON.parse( localStorage.getItem('cart') ) : [];
}

export function setStorageCart(cartValues){
    localStorage.setItem('cart',JSON.stringify(cartValues));
}
export default cartItemsStore;