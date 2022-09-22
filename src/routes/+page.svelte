<!--suppress CssUnusedSymbol -->
<script lang="ts">
	import { inview } from 'svelte-inview';
	import Logo from '$lib/components/Logo.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { visibleSection } from '$lib/stores';

	const MAIN_TAGS = ['Full stack developer', 'Mobile apps', 'Websites', 'Web apps'];

	let scrollY: number = 0;
	let screenHeight: number = 0;
</script>

<svelte:window bind:innerHeight={screenHeight} bind:scrollY />

<div class="h-screen relative container mx-auto px-8">
	<div class="h-full absolute lg:right-0 w-[38rem] -z-10">
		<Logo />
	</div>
	<div class="h-full flex flex-col justify-center">
		<span class="mb-4 text-2xl">Hello, I am</span>
		<span class="text-6xl mb-8">Akmal Muhaimin</span>
		<span class="mb-2 text-2xl text-white text-opacity-50">
			{#each MAIN_TAGS as tag, index}
				<span>{tag}</span>
				{#if index < MAIN_TAGS.length - 1}
					<span class="mx-4">&bull;</span>
				{/if}
			{/each}
		</span>
		<a class="btn mt-8" href="#about"> See more </a>
	</div>
</div>

<div class="relative">
	<div class="sticky top-0 hidden lg:block">
		<Sidebar />
	</div>

	<div class="container mx-auto lg:pr-80">
		<section id="about" on:enter={() => ($visibleSection = 'about')} use:inview>
			<h1>About</h1>
			<p>
				Over 3 years (and counting) experience in Flutter development. Successfully deployed over 5
				mobile (cross platform - Android/iOS) applications for use in large-scale projects.
			</p>

			<p>
				Over 2 years of experience in web app development. Mastered the fundamentals of web
				development (HTML+CSS+JavaScript). Used Svelte for most of the front-end UI design, but can
				also do Vue 3 and React. Used Python (Django), JavaScript (Node.js) and Go for back-end and
				API development. Successfully deployed over 5 web applications for use in clients in various
				kinds of situations involving large traffic and high performance situations.
			</p>

			<p>
				Graduated Universiti Teknologi Malaysia (UTM) in 2020 with Bachelor of Engineering
				(Electrical - Mechatronics). Having worked on Internet of Things (IoT) and machine learning
				(ML) related projects, and believed that those projects are in need for a seamless and
				beautiful user experience. Henceforth decided to start on mobile/web development career.
			</p>

			<p>
				A keen thinker and fast learner. Always open in new things and willing to learn more
				regarding the latest and trending technologies. Prioritizes performance, user-friendliness
				and reliability in developing projects and solutions.
			</p>
		</section>

		<section id="expertise" on:enter={() => ($visibleSection = 'expertise')} use:inview>
			<h1>Expertise</h1>
		</section>

		<section id="projects" on:enter={() => ($visibleSection = 'projects')} use:inview>
			<h1>Projects</h1>
		</section>

		<section id="vision" on:enter={() => ($visibleSection = 'vision')} use:inview>
			<h1>Vision</h1>
		</section>

		<section id="contact" on:enter={() => ($visibleSection = 'contact')} use:inview>
			<h1>Contact</h1>
			<p>I am reachable on</p>
		</section>
	</div>
</div>

<style lang="postcss">
	section {
		@apply min-h-[120vh] px-8 py-12;
	}

	h1 {
		@apply text-4xl mb-16;
	}

	.btn {
		@apply border-2 border-white border-opacity-25 hover:border-opacity-75 hover:bg-white hover:bg-opacity-20
        transition w-fit px-6 py-2 rounded-xl tracking-wider text-lg;
	}

	p {
		@apply text-xl text-white text-opacity-50 mb-8 tracking-wider;
	}
</style>
