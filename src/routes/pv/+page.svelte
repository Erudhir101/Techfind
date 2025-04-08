<script>
	import { Button } from 'bits-ui';

	let { data } = $props();
	let { profile } = $derived(data);
</script>

<div class="flex flex-col justify-center items-center py-16 gap-28">
	<h2 class="font-bold text-4xl">
		Bem Vindo <span class="text-principal-6">{profile?.name}</span>
	</h2>
	<div class="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 w-1/2 p-8 gap-4">
		{#each ['perfil', 'servicos'] as item}
			<Button.Root
				class="rounded-md bg-principal-4 shadow hover:bg-principal-3 px-4 py-2 transition-colors duration-300 cursor-pointer font-semibold"
			>
				<a href="pv/{item}"> {item} </a>
			</Button.Root>
		{/each}
	</div>
</div>
