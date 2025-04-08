<script>
	import { Button, Label } from 'bits-ui';
	import { ArrowLeftIcon } from '@lucide/svelte';

	let { data } = $props();
	let { services, user } = $derived(data);
	$inspect(user);
</script>

<Button.Root
	class="rounded-full shadow-md border border-zinc-200 hover:bg-principal-4 transition-colors duration-300 mt-5 ml-5"
>
	<a href="../">
		<ArrowLeftIcon size={40} />
	</a>
</Button.Root>

<div class="flex w-full mt-24 justify-center">
	<h2 class="font-bold text-2xl">SERVIÇOS</h2>
</div>
