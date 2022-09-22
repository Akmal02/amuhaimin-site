<!--suppress CssUnusedSymbol -->
<script lang="ts">
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	const MAIN_TAGS = ['Full stack developer', 'Mobile apps', 'Websites', 'Web apps'];

	let scrollY: number = 0;
	let screenHeight: number = 0;
	let visibleSection: string = null;

	$: showSideNav = scrollY > screenHeight;
</script>

<svelte:window bind:innerHeight={screenHeight} bind:scrollY />

<section class="h-screen relative main container mx-auto">
	<div class="h-full absolute lg:right-0 w-[38rem] -z-10">
		<div class="h-full w-full relative flex flex-col justify-center">
			<svg class="absolute left-0 right-0" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M28.6,-40.1C42.4,-41.5,62.7,-44.7,73.2,-38.3C83.7,-31.9,84.5,-16,78.5,-3.4C72.6,9.1,60.1,18.3,52.5,29.8C44.9,41.2,42.3,55.1,34.4,64.4C26.5,73.7,13.3,78.6,1.9,75.2C-9.4,71.8,-18.7,60.2,-29.6,52.6C-40.5,45,-52.8,41.3,-59.4,33.2C-65.9,25.1,-66.7,12.6,-69,-1.4C-71.4,-15.3,-75.4,-30.6,-70.7,-41.9C-66.1,-53.3,-52.7,-60.8,-39.5,-59.8C-26.3,-58.8,-13.1,-49.3,-2.9,-44.3C7.4,-39.3,14.7,-38.8,28.6,-40.1Z"
					fill="#202020"
					transform="translate(100 100)"
				/>
			</svg>
			<svg class="absolute left-0 right-0" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M40.5,-73.9C50.1,-64.6,53.9,-48.9,61.5,-35.6C69.1,-22.2,80.5,-11.1,79.6,-0.5C78.6,10,65.3,20,55,28.7C44.7,37.4,37.4,44.7,28.7,48.8C20,52.8,10,53.6,0.8,52.2C-8.4,50.7,-16.7,47.1,-23.1,41.7C-29.6,36.3,-34.1,29.3,-41.5,22.1C-48.9,14.8,-59.3,7.4,-63.5,-2.4C-67.8,-12.3,-65.9,-24.6,-60.9,-36.1C-55.9,-47.6,-47.9,-58.4,-37.3,-67.1C-26.6,-75.8,-13.3,-82.5,1.1,-84.4C15.5,-86.3,30.9,-83.3,40.5,-73.9Z"
					fill="#303030"
					transform="translate(100 100)"
				/>
			</svg>
		</div>
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
</section>

<div class="relative">
	<div class="sticky top-0">
		<div class="relative">
			<aside class=" top-0 absolute right-0 w-80 h-screen py-8" transition:fade={{ duration: 100 }}>
				<ul class="flex flex-col">
					{#each ['about', 'expertise', 'projects', 'vision', 'contact'] as topic}
						<a
							class={`capitalize text-2xl px-8 py-4 hover:bg-gray-700 border-l-4 transition
							${topic === visibleSection ? 'border-white' : 'border-transparent'}`}
							href="#{topic}"
						>
							{topic}
						</a>
					{/each}
				</ul>
			</aside>
		</div>
	</div>

	<div class="container mx-auto pr-80">
		<section id="about" on:enter={() => (visibleSection = 'about')} use:inview>
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

		<section id="expertise" on:enter={() => (visibleSection = 'expertise')} use:inview>
			<h1>Expertise</h1>
		</section>

		<section id="projects" on:enter={() => (visibleSection = 'projects')} use:inview>
			<h1>Projects</h1>
		</section>

		<section id="vision" on:enter={() => (visibleSection = 'vision')} use:inview>
			<h1>Vision</h1>
		</section>

		<section id="contact" on:enter={() => (visibleSection = 'contact')} use:inview>
			<h1>Contact</h1>
		</section>
	</div>
</div>

<style class="postcss">
	section {
		@apply min-h-screen px-8 py-12;
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
