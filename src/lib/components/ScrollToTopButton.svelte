<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	let scrollY: number;
	$: showButton = scrollY > 80;
</script>

<svelte:window bind:scrollY />

{#if showButton}
	<button
		class="fixed right-6 bottom-6 z-50 flex flex-row rounded-lg bg-white px-4 py-4 font-bold 
      tracking-wider text-black shadow-xl transition active:scale-90 md:bottom-12 md:right-12"
		on:click={() => {
			scrollY = 0;
		}}
		in:fly={{ y: 100, duration: 200, opacity: 0 }}
		out:fade={{ duration: 200 }}
	>
		<svg style="width:24px;height:24px" viewBox="0 0 24 24">
			<path
				fill="currentColor"
				d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"
			/>
		</svg>
		<span class="ml-4">Scroll to top</span>
	</button>
{/if}
