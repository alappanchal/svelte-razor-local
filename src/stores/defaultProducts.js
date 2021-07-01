import { writable, derived } from "svelte/store";
import localProducts from "../localProducts.js";
 
// Initialising the store with default products list from js file
const store = writable(flattenProducts([...localProducts]));

// Store's inbuilt default functions
// subscribe
// set
// update

// combines the property of nested object into the main object.
function flattenProducts(data){
    return data.map( item=>{
        let image = item.image.url;
        
        // return the current item and replacing its image object with image url
        return { ...item,image };        
    });
}

// featured store ( Svelte's Derived store )
// Derived store is the subset of the main store, say for filterin products so don't have to filter products at component level
export const featuredStore = derived(
    store, ($featured) => {        
        return $featured.filter( item => item.featured);
    });

export default store;