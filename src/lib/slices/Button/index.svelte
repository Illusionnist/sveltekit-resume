<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import Button from '$lib/components/Button.svelte';
	import type { Content } from '@prismicio/client';

	export let slice: Content.ButtonSlice;
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<Button linkField={slice.primary.button_link} label={slice.primary.button_label}></Button>
</Bounded>
