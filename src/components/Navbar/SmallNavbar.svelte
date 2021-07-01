<script>
    // imports
    import CartButton from "../Cart/CartButton.svelte";
    
    //Global Store
	import UIController from "../../stores/UIController.js";
    import { link } from "svelte-routing";
    
    // your script goes here
    function openSidebar(){
        UIController.toggleItem('sidebar',true);
    }
</script>

<style>
    /* your styles go here */
</style>

<nav class="navbar">
    <div class="nav-center">
        <!-- Sidebar toggle -->
        <button class="btn-sidebar-toggle" on:click="{openSidebar}">
            <i class="fas fa-bars" />
        </button>
        <!-- Logo -->
        <a href="/" class="nav-logo" use:link>
            <img src="/assets/images/logo.svg" class="logo" alt="Razor's logo">
        </a>
        <!-- Cart button -->
        <CartButton />
    </div>
</nav>