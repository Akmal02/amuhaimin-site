<script lang="ts">
	import { fade } from 'svelte/transition';

	import { visibleSection } from '$lib/stores';
</script>

<div class="relative">
	<aside class="top-0 absolute right-0 w-80 h-screen py-8" transition:fade={{ duration: 100 }}>
		<ul class="flex flex-col">
			{#each ['about', 'expertise', 'projects', 'vision', 'contact'] as topic}
				<a
					class={`capitalize text-2xl px-8 py-4 hover:bg-gray-700 border-l-4 transition
							${topic === $visibleSection ? 'border-white' : 'border-transparent'}`}
					href="#{topic}"
				>
					{topic}
				</a>
			{/each}
		</ul>
	</aside>
</div>
