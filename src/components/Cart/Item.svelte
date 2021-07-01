<script>    
    // variables
    export let id;
    export let image;
    export let title;
    export let price;
    export let amount; 

    // import
    import {removeItem, increaseAmount, decreaseAmount} from "../../stores/cart.js";
    

    // your script goes here
    function localRemove(){
        console.log ("remove item clicked!!!" + id);   
        removeItem(id);
    }

    function localIncrease(){        
        increaseAmount(id);
    }

    function localDecrease(){        
        decreaseAmount(id);
    }
</script>

<style>
    /* your styles go here */
</style>

<!-- cart item -->
<div class="cart-item">
    <img src="{image}" alt="{title}" />
    <div>
        <h4>{title}</h4>
        <h5>${price}</h5>
        <button class="btn remove-btn" on:click="{localRemove}">
            Remove
        </button>
    </div>
    <div>
        <button class="cart-btn amount-btn" on:click="{localIncrease}">
            <i class="fas fa-chevron-up"></i>
        </button>
        <p class="item-amount">{amount}</p>
        <button class="cart-btn amount-btn" on:click="{localDecrease}">
            <i class="fas fa-chevron-down"></i>
        </button>
    </div>
</div>