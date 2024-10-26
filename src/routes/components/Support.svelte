<script>
	const boxes = [
		{
			image:
				'M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z',
			title: 'Chat online',
			paragraph: 'Tire suas dúvidas rapidamente através do nosso chat online.'
		},
		{
			image:
				'M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z',
			title: 'Atendimento telefônico',
			paragraph: 'Fale com um de nossos especialistas por telefone.'
		},
		{
			image:
				'M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z',
			title: 'Suporte por e-mail',
			paragraph: 'Envie um e-mail para nossa equipe de suporte.'
		},
		{
			image:
				'M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z',
			title: 'Central de Ajuda',
			paragraph: 'Encontre as respostas para suas perguntas na nossa central de ajuda.'
		}
	];
</script>

<section class="flex flex-col items-center text-center gap-4 mt-32">
	<h1 class="text-2xl font-bold">Atendimento personalizado e Suporte 24/7</h1>
	{#each boxes as box}
		<div class="flex flex-col items-center gap-3 my-3 rounded-xl p-5 w-64 lg:w-96">
			<svg class="size-16" fill="#d96318" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
				><path d={box.image} /></svg
			>
			<h2 class="text-xl font-bold">{box.title}</h2>
			<p>{box.paragraph}</p>
		</div>
	{/each}
</section>

<style>
</style>
