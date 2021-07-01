<script>
    // imports
    import products_store from "../../stores/defaultProducts.js";
    import Product from "../Products/Product.svelte";
    import Loading from "../../components/Loading.svelte";

    export let title='';

    // your script goes here    
</script>

<style>
    /* your styles go here */
</style>

<section class="section">
    <h2 class="section-title">{title}</h2>
    <div class="products-center">
        {#each $products_store as product (product.id) }
            <Product {product}/>
        {:else}
            <Loading />
        {/each}
    </div>
</section>

