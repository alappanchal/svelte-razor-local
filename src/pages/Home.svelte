<script>
    // imports
    import FeatureProducts from "../components/Products/FeaturedProducts.svelte";
    import Hero from "../components/Hero.svelte";
    import {link} from "svelte-routing";
    import FeaturedProducts from "../components/Products/FeaturedProducts.svelte";

    // variables
    
    // your script goes here
</script>

<style>
    /* your styles go here */
</style>

<svelte:head>
	<title>Svelte - Ecommerce </title>
</svelte:head>

<Hero>
    <a href='/products' use:link class="btn btn-pimary btn-hero">Shop Now</a>
</Hero>
<FeaturedProducts title="Feature Products" />