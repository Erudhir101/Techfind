<script>
	const usuarios = [
		{
			nome: 'João',
			desc: 'Desenvolvedor Backend',
			tags: ['backend', 'servidor', 'sistemas operacionais', 'devops', 'teste'],
			dispo: 'seg à sex das 8:00 até 18:00'
		},
		{
			nome: 'Maria',
			desc: 'Desenvolvedora Frontend',
			tags: ['frontend', 'javascript', 'css', 'html', 'design responsivo'],
			dispo: 'seg à sex das 9:00 até 17:00'
		},
		{
			nome: 'Carlos',
			desc: 'Especialista em Data Science',
			tags: [
				'data science',
				'machine learning',
				'python',
				'análise de dados',
				'inteligência artificial'
			],
			dispo: 'seg à sex das 10:00 até 18:00'
		},
		{
			nome: 'Ana',
			desc: 'Engenheira de Software',
			tags: [
				'engenharia de software',
				'arquitetura de sistemas',
				'c++',
				'sistemas distribuídos',
				'cloud'
			],
			dispo: 'seg à sex das 8:00 até 16:00'
		},
		{
			nome: 'Lucas',
			desc: 'Desenvolvedor Mobile',
			tags: ['mobile', 'android', 'ios', 'kotlin', 'swift'],
			dispo: 'seg à sex das 10:00 até 19:00'
		},
		{
			nome: 'Roberto',
			desc: 'Administrador de Redes',
			tags: ['redes', 'segurança', 'firewall', 'VPN', 'Linux'],
			dispo: 'seg à sex das 7:00 até 16:00'
		},
		{
			nome: 'Beatriz',
			desc: 'Desenvolvedora Full Stack',
			tags: ['full stack', 'javascript', 'node.js', 'react', 'banco de dados', 'docker'],
			dispo: 'seg à sex das 9:00 até 18:00'
		},
		{
			nome: 'Eduardo',
			desc: 'Analista de Suporte',
			tags: ['suporte técnico', 'helpdesk', 'windows', 'troubleshooting', 'TI'],
			dispo: 'seg à sex das 8:00 até 17:00'
		},
		{
			nome: 'Juliana',
			desc: 'Engenheira de Dados',
			tags: ['engenharia de dados', 'ETL', 'big data', 'python', 'SQL', 'data pipeline'],
			dispo: 'seg à sex das 10:00 até 19:00'
		},
		{
			nome: 'Fernando',
			desc: 'Especialista em Cloud',
			tags: ['cloud', 'AWS', 'Azure', 'Google Cloud', 'devops', 'orquestração'],
			dispo: 'seg à sex das 9:00 até 17:30'
		}
	];
</script>

{#each usuarios as item}
	<div class="bg-white w-1/2 flex flex-col flex-1 p-8 gap-8 rounded-xl">
		<div class="flex gap-4">
			<img src="/" alt="profile" class="bg-zinc-200 text-zinc-200 rounded-full" />
			<div>
				<h2 class="font-bold text-xl">{item.nome}</h2>
				<h3>{item.desc}</h3>
			</div>
		</div>

		<ul class="flex gap-4 flex-wrap">
			{#each item.tags as tags}
				<li class="bg-zinc-100 rounded-lg px-2 font-semibold">{tags}</li>
			{/each}
		</ul>
		<button
			class="bg-black text-white flex justify-center items-center text-center p-3 gap-8 rounded-xl"
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fafafa" class="size-5"
				><path
					d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c-35.3 0-64 28.7-64 64l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c0 35.3 28.7 64 64 64l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c35.3 0 64-28.7 64-64l40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0c0-35.3-28.7-64-64-64l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40zM160 128l192 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32zm192 32l-192 0 0 192 192 0 0-192z"
				/></svg
			>connectar com IA</button
		>
	</div>
{/each}
