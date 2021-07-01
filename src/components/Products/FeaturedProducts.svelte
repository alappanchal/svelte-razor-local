<script>
    // imports
    import products_store, { featuredStore } from "../../stores/defaultProducts.js";
    import Product from "../Products/Product.svelte";
    import Loading from "../../components/Loading.svelte";

    // variables
    export let title='';

    // your script goes here    
</script>

<style>
    /* your styles go here */
</style>

{#if $featuredStore.length == 0 }
    <Loading />
{:else}
    <section class="section">
        <h2 class="section-title">{title}</h2>
        <div class="products-center">        
            {#each $featuredStore as product (product.id) }
                <Product {product}/>        
            {/each}        
        </div>
    </section>
{/if}