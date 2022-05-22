<section>
	<div class="py-16">
		<p class="text-3xl font-bold text-white text-opacity-60">Hello, I am</p>
		<p class="mt-2 text-6xl font-bold text-white">Akmal Muhaimin</p>
		<p class="mt-8 text-2xl text-white text-opacity-60">
			Full stack developer · Mobile apps · Websites
		</p>
	</div>
</section>

<section id="projects">
	<h1 class="mb-8 text-4xl font-bold text-white">Projects</h1>
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
		{#each [1, 2, 3, 4, 5, 6] as i}
			<div class="rounded-xl bg-white bg-opacity-10 p-8 shadow-md">
				<img src="https://picsum.photos/400/400?i={i}" class="w-full" />
				<h2 class="mt-8 text-2xl font-bold text-white">Title</h2>
				<p class="mt-2 text-white text-opacity-60">Description</p>
				<div class="mt-8 flex flex-row gap-4">
					<button>Demo</button>
					<button>Project page</button>
				</div>
			</div>
		{/each}
	</div>
</section>

<style lang="postcss">
	section {
		@apply container mx-auto p-8;
	}

	button {
		@apply rounded-md px-3 py-2 font-bold text-white ring-1 ring-white ring-opacity-20 transition-colors hover:bg-white hover:bg-opacity-50;
	}
</style>
