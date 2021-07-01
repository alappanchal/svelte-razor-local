<script>
    // imports 
    import SmallNavbar from "./SmallNavbar.svelte";
    import BigNavbar from "./BigNavbar.svelte";
    
    //Global Store
	import UIController from "../../stores/UIController.js";

    // your script goes here
    let screenWidth;
    $:if (screenWidth > 800 ) UIController.toggleItem('sidebar',false);
</script>

<style>
    /* your styles go here */
</style>

<svelte:window bind:innerWidth="{screenWidth}"></svelte:window>
{#if screenWidth > 900}
    <BigNavbar />
{:else}
    <SmallNavbar />
{/if}