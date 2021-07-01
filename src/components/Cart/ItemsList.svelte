<script>
    // imports
    import Item from "./Item.svelte";
    import cartItemsStore, {cartItemsStoreTotal, setStorageCart} from "../../stores/cart.js";    
    import {fly} from "svelte/transition";
    import {flip} from "svelte/animate";
    import {afterUpdate} from "svelte";

    // your script goes here
    $: total = $cartItemsStore.reduce( (acc,curr) =>{
        return (acc += curr.price * curr.amount);
    },0);

    afterUpdate( ()=>{
        setStorageCart($cartItemsStore);
    });
    
</script>

<style>
    /* your styles go here */
</style>

<section class="cart-items">
    <article>
        {#each $cartItemsStore as cartItem, index(cartItem.id) }
        <div in:fly="{{delay:(index+1)*500,x:100}}"
            out:fly="{{x: -100, animate:flip}}"
        >
            <Item {...cartItem} />            
        </div>
        {:else}
            <h2 class="empty-cart">is currently empty</h2>
        {/each}
    </article>
    <h3 class="cart-total">Total: ${$cartItemsStoreTotal}</h3>
</section>
