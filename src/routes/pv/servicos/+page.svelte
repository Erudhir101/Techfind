<script>
	import { Button, Label } from 'bits-ui';
	import { ArrowBigLeft } from '@lucide/svelte';

	let { data } = $props();
	let { services, user } = $derived(data);
</script>

<Button.Root
	href="../"
	class="inline-block bg-principal-1 rounded-full hover:bg-principal-4 mt-4 ml-4 border-2 border-black hover:border-black/80 shadow"
>
	<ArrowBigLeft class="size-10 stroke-1 hover:stroke-black/80" />
</Button.Root>

<div class="flex w-full mt-24 justify-center">
	<h2 class="font-bold text-2xl">SERVIÇOS</h2>
</div>
