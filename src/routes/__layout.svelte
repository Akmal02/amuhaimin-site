<script>
	import '../app.css';
</script>

<div class="min-h-screen bg-neutral-800">
	<header class="p-8">
		<nav class="flex flex-row justify-end gap-1 text-white">
			<a href="/">About</a>
			<a href="/">Projects</a>
			<a href="/">Contact</a>
		</nav>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<!---->
	</footer>
</div>

<style lang="postcss">
	header,
	footer {
		@apply container mx-auto p-8;
	}

	header nav a {
		@apply px-4 py-2 transition-colors hover:bg-white hover:bg-opacity-40;
	}
</style>
