<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	let scrollY: number;
	$: showButton = scrollY > 80;
</script>

<svelte:window bind:scrollY />

{#if showButton}
	<button
		class="fixed right-12 bottom-12 rounded-md bg-white p-4 font-bold 
      tracking-wider shadow-xl transition active:scale-90"
		on:click={() => {
			scrollY = 0;
		}}
		transition:fade={{ duration: 200 }}
	>
		Scroll to top
	</button>
{/if}
