<script>
    import user from '../stores/user.js';
    import {link} from 'svelte-routing';
    // logout functionality
    
    //Global Store
    import UIController from "../stores/UIController.js";

    // your script goes here
    function logout(){
        UIController.toggleItem('sidebar',false);
    }
</script>

<style>
    /* your styles go here */
</style>

{#if $user.jwt}
    <a href="/" class="logout-btn" on:click="{logout}"> logout</a>
{:else}
    <a href="/login" on:click="{logout}">login</a>
{/if}