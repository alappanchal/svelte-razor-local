<script>
    // imports
    import NavLinks from "../../constants/NavLinks";
    import CartButton from "../Cart/CartButton.svelte";
    import LoginLink from "../LoginLink.svelte";
    import { link } from "svelte-routing";
    
    // your script goes here
    
</script>

<style>
    /* your styles go here */
</style>

<nav class="navbar">
    <div class="nav-container">
        <div class="nav-center">
            <!-- Actual Links -->
            <ul class="nav-links">                
                {#each NavLinks as navItem}
                    <li><a href="{navItem.url}" use:link>{navItem.text}</a></li>
                {/each}
            </ul>

            <!-- Logo -->
            <a href="/" class="nav-logo big-logo" use:link>
                <img src="/assets/images/logo.svg" class="logo" alt="Razor's logo">
            </a>
            <div class="nav-aside">
                <LoginLink />
                <!-- Cart button -->
                <CartButton />
            </div>               
        </div>
    </div>
</nav>