<script>
	// pages
	import About from "./pages/About.svelte";	
	import Home from "./pages/Home.svelte";
	import Login from "./pages/Login.svelte";
	import Products from "./pages/Products.svelte";
	import ProductTemplate from "./pages/ProductTemplate.svelte";

	// Router
	import { Router, Route, Link } from "svelte-routing";

	// components 
	import Navbar from "./components/Navbar/Navbar.svelte";
	import Sidebar from "./components/Navbar/Sidebar.svelte";
	import Cart from "./components/Cart/Cart.svelte";

	//Global Store
	import UIController from "./stores/UIController.js" 

	// variables
	export let url = "";	
</script>

<style>
	/* h1 {
		color: purple;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	} */
	
</style>
<Router url="{url}">
	<Navbar />	
	{#if $UIController.sidebar}
		<Sidebar />
	{/if}
	{#if $UIController.cart}
		<Cart />
	{/if}
	<div>	  
	  <Route path="/" component={Home} />
	  <Route path="/about" component="{About}" />
	  <Route path="/login" component="{Login}" />
	  <Route path="/products" component="{Products}" />
	  <Route path="/products/:id" component="{ProductTemplate}" />
	</div>
  </Router>
