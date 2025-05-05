<script>
	import { Button } from 'bits-ui';
	import { ChevronLeft } from '@lucide/svelte';
	import Contract from '../../components/Contract.svelte';

	let { data } = $props();
	let { services, user } = $derived(data);
</script>

<Button.Root
	href="../"
	class="bg-principal-1 hover:bg-principal-4 mt-4 ml-4 inline-block rounded-full border-2 border-black shadow hover:border-black/80"
>
	<ChevronLeft class="size-10 stroke-1 hover:stroke-black/80" />
</Button.Root>

<div class="mt-24 flex w-full justify-center">
	<h2 class="text-2xl font-bold">CONTRATOS</h2>
</div>

<Contract />
