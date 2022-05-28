<script lang="ts">
	import Header from '$lib/components/Headline.svelte';
	import Frosted from '$lib/components/Frosted.svelte';
</script>

<section class="h-screen ">
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

<section id="about">
	<Header label="About" />
</section>

<section id="projects">
	<Header label="Projects" />
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
<section id="contact">
	<Header label="Contact" />
</section>

<style lang="postcss">
	section {
		@apply container mx-auto p-8;
	}

	button {
		@apply rounded-md px-3 py-2 font-bold text-white ring-1 ring-white ring-opacity-20 transition-colors hover:bg-white hover:bg-opacity-50;
	}
</style>
