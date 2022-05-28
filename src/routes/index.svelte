<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Frosted from '$lib/components/Frosted.svelte';
</script>

<section class="h-screen">
	<div class="flex h-full flex-col justify-center py-16">
		<p class="text-3xl font-bold text-white text-opacity-60">Hello, I am</p>
		<p class="mt-2 text-6xl font-bold text-white">Akmal Muhaimin</p>
		<p class="mt-8 text-2xl text-white text-opacity-60">
			{@html ['Full stack developer', 'Mobile apps', 'Websites', 'UI design'].join(
				'&nbsp;&nbsp;·&nbsp;&nbsp;'
			)}
		</p>
	</div>
</section>

<div id="about" class="bg-green-500">
	<Header label="About" />
	<section />
</div>

<div id="expertise" class="bg-blue-500">
	<Header label="Expertise" />
	<section />
</div>

<div id="projects" class="bg-red-500">
	<Header label="Projects" />
	<section>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
			{#each [1, 2, 3, 4, 5, 6] as i}
				<Frosted>
					<img
						src="https://picsum.photos/400/300?i={i}"
						height="300"
						width="400"
						class="rounded-t-xl"
						alt=""
					/>
					<div class="p-8">
						<h2 class="text-2xl font-bold text-white">Title</h2>
						<p class="mt-2 text-white text-opacity-60">Description</p>
						<div class="mt-8 flex flex-row gap-4">
							<button>Demo</button>
							<button>Project page</button>
						</div>
					</div>
				</Frosted>
			{/each}
		</div>
	</section>
</div>

<div id="vision" class="bg-orange-500">
	<Header label="Vision" />
	<section />
</div>

<div id="contact" class="bg-teal-500">
	<Header label="Contact" />
	<section />
</div>

<style lang="postcss">
	section {
		@apply container mx-auto min-h-screen p-8;
	}

	button {
		@apply rounded-md px-3 py-2 font-bold text-white ring-1 ring-white ring-opacity-20 transition-colors hover:bg-white hover:bg-opacity-50;
	}
</style>
