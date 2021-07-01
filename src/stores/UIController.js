import { writable } from "svelte/store";

const globalStore = writable({
    sidebar: false,
    cart: false,
    alert: false
});

function toggleItem(item,value){
    globalStore.update( (storeValues) => {
        return {...storeValues, [item]:value}
    });
}

const store = {
    subscribe: globalStore.subscribe,
    toggleItem: (item,value) => toggleItem(item,value)
}

export default store;