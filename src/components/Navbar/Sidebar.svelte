<script>
    import Navlinks from "../../constants/NavLinks.js";
    import { link } from "svelte-routing";
    import { fly,fade } from "svelte/transition";
    import LoginLink from "../LoginLink.svelte";
    //Global Store
	import UIController from "../../stores/UIController.js";

    // your script goes here
    function sideBarClose(){
        UIController.toggleItem('sidebar',false);
    }
</script>

<style>
    /* your styles go here */
</style>

<div class="sidebar-container" transition:fly={{x:-1000}}>
    <div class="sidebar" transition:fade={{delay: 400}}>
        <!-- Sidebar Header -->
        <div class="sidebar-header">
            <button class="btn-close" on:click="{sideBarClose}">
                <i class="fas fa-window-close"></i>
            </button>
        </div>
        <!-- Logo -->
        <img src="/assets/images/logo.svg" class="logo sidebar-logo" alt="Razor's logo">
        <!-- links -->
        <ul class="sidebar-links">
            {#each Navlinks as menuItem }
                <li><a href="{menuItem.url}" use:link on:click="{sideBarClose}">{menuItem.text}</a></li>
            {/each}
            <li>
                <LoginLink />
            </li>
        </ul>
    </div>
</div>