import { writable } from 'svelte/store';

export const visibleSection = writable<string | null>(null);
