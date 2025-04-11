<script>
	import { Button } from 'bits-ui';

	let { data } = $props();
	let { profile } = $derived(data);
</script>

<div class="flex flex-col items-center justify-center gap-28 py-16">
	<h2 class="text-4xl font-bold">
		Bem Vindo <span class="text-principal-6">{profile?.name}</span>
	</h2>
	<div
		class="grid w-full grid-cols-1 grid-rows-4 gap-8 p-8 sm:w-1/4 sm:min-w-sm sm:grid-cols-2 sm:grid-rows-2 sm:gap-4"
	>
		{#each ['perfil', 'servicos', 'contratos'] as item}
			<Button.Root
				href="pv/{item}"
				class="bg-principal-4 hover:bg-principal-3 cursor-pointer rounded-md px-4 py-4 text-center font-semibold shadow transition-colors duration-300"
			>
				{item}
			</Button.Root>
		{/each}
	</div>
</div>
