<script>
    //imports
    import { link } from "svelte-routing";

    //variables
    export let product;
    const {id, title, image, price } = product;
    
    // your script goes here
</script>

<style>
    /* your styles go here */
</style>

<article class="product">
    <div class="img-container">
        <img src={image} alt={title}>
        <a href={`/products/${id}`} class="btn btn-primary product-link" use:link>details</a>
    </div>
    <div class="product-footer">
        <p class="product-title">{title}</p>
        <p class="product-price">${price}</p>
    </div>
</article>