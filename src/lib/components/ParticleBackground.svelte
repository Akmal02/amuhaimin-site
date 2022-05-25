<script lang="ts">
	// import particlesConfig from '$lib/particles.json';
	import { onMount, SvelteComponent } from 'svelte';
	import type { Engine } from 'tsparticles-engine';
	import { loadFireworksPreset } from 'tsparticles-preset-fireworks';

	let ParticlesComponent: SvelteComponent;

	const particlesConfig = {
		preset: 'fireworks',
		fullScreen: {
			zIndex: -1
		},
		background: {
			opacity: 0
		}
	};

	onMount(async () => {
		const module = await import('svelte-particles');

		ParticlesComponent = module.default as unknown as SvelteComponent;
	});

	let particlesInit = async (engine: Engine) => {
		await loadFireworksPreset(engine);
		// await loadFull(main);
	};
</script>

<div>
	<svelte:component this={ParticlesComponent} options={particlesConfig} {particlesInit} />
</div>
