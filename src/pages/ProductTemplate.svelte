<script>
    //imports
    import { link } from "svelte-routing";
    import products_store from "../stores/defaultProducts.js";
    import Loading from "../components/Loading.svelte";
    import {addToCart} from "../stores/cart.js"

    //Global Store
	import UIController from "../stores/UIController.js";

    //variables
    export let id;

    // your script goes here
    $: product = $products_store.find(item => item.id === parseInt(id) );    
    
    function localAddToCart(){
        console.log ("Add to card - Product ID: ", id);
        addToCart(product);
        UIController.toggleItem('cart',true);
    }
</script>

<style>
    /* your styles go here */
</style>

<svelte:head>
    <title>{ !product ? "Single Product" : product.title }</title>
</svelte:head>

{#if !product}
    <Loading />
{:else}
    <section class="single-product">
        <!-- back to products -->
        <a href="/products" class="btn btn-primary" use:link>Back to product</a>

        <!-- Single product container -->
        <div class="single-product-container">
            <article class="single-product-image">
                <img src={product.image} alt="{product.title}" />
            </article>
            <article>
                <h1>{product.title}</h1>
                <h2>${product.price}</h2>
                <p>{product.description}</p>
                <button class="btn btn-primary btn-block" on:click="{localAddToCart}">add to cart</button>
            </article>
        </div>
    </section>
{/if}
