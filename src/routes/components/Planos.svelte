<script>
	import basic from '$img/basic.svelte';
	import enterprise from '$img/enterprise.svelte';
	import advanced from '$img/advanced.svelte';
	const btn =
		'border-none flex items-center justify-center bg-principal-5 hover:bg-principal-3 rounded-xl py-3 px-4 font-semibold cursor-pointer transition-colors duration-300 ease-in';
	const cards = [
		{
			image: basic,
			title: 'Plano Basic',
			subtitle: 'O nosso plano Custo-benefício imperdível!',
			paragraph:
				'Acesso à plataforma, com todo o suporte e consultoria de nível básico, necessário para uma pequena empresa.'
		},
		{
			image: enterprise,
			title: 'Plano Enterprise',
			subtitle: 'O nosso plano comercial completo!',
			paragraph:
				'Todos os recursos do plano Basic, suporte avançado, consultoria tecnológica completa e suporte on-demmand.'
		},
		{
			image: advanced,
			title: 'Plano Advanced',
			subtitle: 'Consultoria tecnológica personalizada de alto nível!',
			paragraph:
				'Todos os recursos do plano Empresarial, gerenciamento de projetos, governança corporativa e suporte customizado.'
		}
	];
</script>

<section id="planos" class="p-5 pt-32 text-center relative min-h-svh">
	<h2 class="text-3xl font-semibold text-principal-6">Nossos Planos</h2>
	<h3 class="text-5xl my-4 font-bold">Escolha o melhor plano para o seu negócio</h3>

	<div class="flex flex-col flex-wrap md:flex-row justify-center items-center gap-6 mt-8">
		{#each cards as card}
			<div
				class="flex flex-col items-stretch justify-between bg-zinc-50 rounded-lg shadow-lg p-5 w-80 gap-4 text-center transition-transform duration-300 ease-in hover:shadow-principal-4 hover:scale-105"
			>
				<svelte:component this={card.image} />
				<h3 class="text-lg md:text-2xl font-bold">{card.title}</h3>
				<span class="text-md md:text-lg font-semibold text-zinc-600 italic">{card.subtitle}</span>
				<p class="text-sm md:text-md h-24">
					{card.paragraph}
				</p>
				<button class={btn}>Saiba Mais</button>
			</div>
		{/each}
	</div>
</section>

<style>
</style>
