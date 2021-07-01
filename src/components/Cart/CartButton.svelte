<script>
    // imports
    //Global Store
	import UIController from "../../stores/UIController.js";
    import cartItemsStore from "../../stores/cart.js";

    // variables
    $: totalItems = $cartItemsStore.reduce( (acc,curr) =>{
        return (acc += curr.amount);
    },0);
    // your script goes here
    function cartButton(){        
        UIController.toggleItem('cart',true);
    }
</script>

<style>
    /* your styles go here */
</style>

<div class="btn-cart-container">
    <button class="btn btn-cart-toggle" on:click="{cartButton}">
        <i class="fas fa-cart-plus"></i>
    </button>
    <span class="btn-cart-items">{totalItems}</span>
</div>