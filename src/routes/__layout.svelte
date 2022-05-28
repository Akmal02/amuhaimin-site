<script lang="ts">
	import ScrollToTopButton from '$lib/components/ScrollToTopButton.svelte';
	import { fade, fly } from 'svelte/transition';
	import '../app.css';

	let scrollY: number;

	$: showNavBar = scrollY < 80;
</script>

<svelte:window bind:scrollY />

<header class="fixed left-0 right-0 p-8">
	{#if showNavBar}
		<nav
			class="flex flex-row justify-end gap-1 text-white transition-opacity"
			in:fly={{ y: -100, duration: 200, opacity: 0 }}
			out:fade={{ duration: 200 }}
		>
			<a href="#about">About</a>
			<a href="#projects">Projects</a>
			<a href="#contact">Contact</a>
		</nav>
	{/if}
</header>

<main>
	<slot />
</main>

<footer>
	<p>&copy; {new Date().getFullYear()} Akmal Muhaimin</p>
</footer>

<ScrollToTopButton />

<style lang="postcss">
	header,
	footer {
		@apply container mx-auto p-8;
	}

	header nav a {
		@apply px-4 py-2 transition-colors hover:bg-white hover:bg-opacity-40;
	}
</style>
