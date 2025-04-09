<script>
	import { Button } from 'bits-ui';

	let { data } = $props();
	let { profile } = $derived(data);
</script>

<div class="flex flex-col items-center justify-center gap-28 py-16">
	<h2 class="text-4xl font-bold">
		Bem Vindo <span class="text-principal-6">{profile?.name}</span>
	</h2>
	<div class="grid w-1/2 grid-cols-1 grid-rows-4 gap-4 p-8 sm:grid-cols-2 sm:grid-rows-2">
		{#each ['perfil', 'servicos'] as item}
			<Button.Root
				href="pv/{item}"
				class="bg-principal-4 hover:bg-principal-3 cursor-pointer rounded-md px-4 py-2 text-center font-semibold shadow transition-colors duration-300"
			>
				{item}
			</Button.Root>
		{/each}
	</div>
</div>
