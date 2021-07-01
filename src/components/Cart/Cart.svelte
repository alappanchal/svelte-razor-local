<script>
    // imports
    import UIController from "../../stores/UIController.js";
    import ItemsList from "./ItemsList.svelte";
    import {fly,fade,blur} from "svelte/transition";
    import {link} from "svelte-routing";    
    import user from "../../stores/user.js";

    // variables
    
    // your script goes here
    function closeCart(){
        UIController.toggleItem('cart',false);
    }
</script>

<style>
    /* your styles go here */
</style>

<div class="cart-overlay" transition:blur>
    <div class="cart-container" transition:fly={{x:1000}}>
        <div class="cart" tranisition:fade={{delay:400}}>
            <!-- Cart header -->
            <div class="cart-header">
                <button class="btn-close" on:click="{closeCart}">
                    <i class="fas fa-window-close"></i>
                </button>
                <h2 class="cart-title">Your Bag</h2>
                <span></span>
            </div>

            <!-- Cart items -->
            <ItemsList />

            <!-- Cart footer -->
            <div class="cart-footer">
                {#if $user.jwt}
                    <a href="/checkout" use:link class="btn btn-primary btn-block" on:click="{closeCart}">Checkout</a>
                {:else}
                    <p class="cart-login">
                        In order to checkout please 
                        <a href="/login" use:link class="" on:click="{closeCart}">Login</a>
                    </p>                    
                {/if}
            </div>
        </div>
    </div>
</div>