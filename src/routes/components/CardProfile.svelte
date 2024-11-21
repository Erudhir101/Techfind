<script lang="ts">
	import avatar from '$lib/images/avatarGray.svg';

	let isOpenModal = $state(false);
	let item = $state({});
	function openModal() {
		isOpenModal = !isOpenModal;
	}
	$effect(() => console.log(isOpenModal));

	const usuarios = [
		{
			nome: 'João',
			desc: 'Desenvolvedor Backend',
			tags: ['backend', 'servidor', 'sistemas operacionais', 'devops', 'teste'],
			dispo: 'seg à sex das 8:00 até 18:00',
			caract:
				'João é muito focado e analítico. Gosta de resolver problemas complexos de sistemas e de otimizar processos. Porém, às vezes tem dificuldades em comunicar ideias de forma clara e direta, o que pode gerar alguns mal-entendidos em equipes multidisciplinares.'
		},
		{
			nome: 'Maria',
			desc: 'Desenvolvedora Frontend',
			tags: ['frontend', 'javascript', 'css', 'html', 'design responsivo'],
			dispo: 'seg à sex das 9:00 até 17:00',
			caract:
				'Maria é criativa e tem um olhar detalhista para o design. Ela sempre busca criar interfaces amigáveis e funcionais. No entanto, pode se frustrar quando os projetos não seguem seu padrão estético e tende a ser perfeccionista em certos detalhes.'
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
			dispo: 'seg à sex das 10:00 até 18:00',
			caract:
				'Carlos é altamente analítico e adora trabalhar com grandes volumes de dados. Ele possui excelente capacidade de abstração e é apaixonado por encontrar insights valiosos. Seu defeito é que, às vezes, se perde em dados e perde o foco em soluções práticas para problemas do dia a dia.'
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
			dispo: 'seg à sex das 8:00 até 16:00',
			caract:
				'Ana é uma profissional rigorosa e muito técnica, com uma enorme capacidade de planejar e estruturar sistemas complexos. Ela se destaca pela clareza na arquitetura de sistemas, mas às vezes pode ser excessivamente crítica em relação às soluções mais simples, o que pode dificultar a adaptação de novos membros da equipe.'
		},
		{
			nome: 'Lucas',
			desc: 'Desenvolvedor Mobile',
			tags: ['mobile', 'android', 'ios', 'kotlin', 'swift'],
			dispo: 'seg à sex das 10:00 até 19:00',
			caract:
				'Lucas é dedicado e tem um excelente domínio das plataformas móveis. Ele se adapta bem às novas tecnologias e adora experimentar novas abordagens. No entanto, ele pode ser impaciente com processos mais longos de desenvolvimento e testes, preferindo ir direto para a implementação.'
		},
		{
			nome: 'Roberto',
			desc: 'Administrador de Redes',
			tags: ['redes', 'segurança', 'firewall', 'VPN', 'Linux'],
			dispo: 'seg à sex das 7:00 até 16:00',
			caract:
				'Roberto é extremamente cuidadoso com a segurança de redes e sempre busca garantir a integridade dos sistemas. Ele é um excelente solucionador de problemas quando se trata de redes. Seu ponto fraco é a falta de flexibilidade em relação a novas soluções que não estão dentro do seu campo de expertise, o que pode torná-lo resistente a mudanças.'
		},
		{
			nome: 'Beatriz',
			desc: 'Desenvolvedora Full Stack',
			tags: ['full stack', 'javascript', 'node.js', 'react', 'banco de dados', 'docker'],
			dispo: 'seg à sex das 9:00 até 18:00',
			caract:
				'Beatriz é versátil e tem um conhecimento vasto em diversas áreas do desenvolvimento. Ela consegue trabalhar com várias tecnologias simultaneamente, o que a torna uma profissional completa. Por outro lado, ela pode se sentir sobrecarregada com a quantidade de tarefas e por vezes não prioriza bem seus projetos.'
		},
		{
			nome: 'Eduardo',
			desc: 'Analista de Suporte',
			tags: ['suporte técnico', 'helpdesk', 'windows', 'troubleshooting', 'TI'],
			dispo: 'seg à sex das 8:00 até 17:00',
			caract:
				'Eduardo é paciente e tem uma excelente habilidade de resolver problemas de TI, sempre oferecendo soluções rápidas e eficientes. No entanto, ele pode ser excessivamente metódico e levar mais tempo do que o necessário para resolver questões mais simples, devido à sua abordagem detalhista.'
		},
		{
			nome: 'Juliana',
			desc: 'Engenheira de Dados',
			tags: ['engenharia de dados', 'ETL', 'big data', 'python', 'SQL', 'data pipeline'],
			dispo: 'seg à sex das 10:00 até 19:00',
			caract:
				'Juliana é organizada e tem grande capacidade para lidar com grandes volumes de dados. Ela é altamente focada em criar pipelines de dados eficientes e escaláveis. Seu defeito é a tendência de se concentrar excessivamente em aspectos técnicos, deixando de lado o impacto de suas soluções no uso real das empresas.'
		},
		{
			nome: 'Fernando',
			desc: 'Especialista em Cloud',
			tags: ['cloud', 'AWS', 'Azure', 'Google Cloud', 'devops', 'orquestração'],
			dispo: 'seg à sex das 9:00 até 17:30',
			caract:
				'Fernando é um profissional dinâmico, com um excelente domínio de ambientes em nuvem. Ele é muito bom em orquestrar soluções complexas e escaláveis. No entanto, ele tem dificuldades em lidar com questões mais "terrenas" e práticas do dia a dia, como a gestão de pequenas infraestruturas ou problemas locais.'
		}
	];
</script>

{#each usuarios as usuario}
	<div class="bg-white w-full max-w-sm flex flex-col flex-1 p-4 md:p-8 gap-8 rounded-xl">
		<div class="flex gap-4">
			<img class="size-14 md:size-16" src={avatar} alt="" />
			<div>
				<h2 class="font-bold text-xl">{usuario.nome}</h2>
				<h3 class="font-medium">{usuario.desc}</h3>
			</div>
		</div>
		<ul class="flex gap-4 flex-wrap">
			{#each usuario.tags as tag}
				<li class="bg-zinc-100 rounded-lg px-2 font-semibold">{tag}</li>
			{/each}
		</ul>
		<button
			onclick={() => {
				item = usuario;
				openModal();
			}}
			class="bg-black text-white flex justify-center usuarios-center text-center p-3 gap-8 rounded-xl fill-white hover:fill-zinc-900 hover:text-zinc-900 hover:bg-principal-5 transition-colors duration-300"
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="size-5"
				><path
					d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c-35.3 0-64 28.7-64 64l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c0 35.3 28.7 64 64 64l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c35.3 0 64-28.7 64-64l40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0c0-35.3-28.7-64-64-64l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40zM160 128l192 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32zm192 32l-192 0 0 192 192 0 0-192z"
				/></svg
			>Entrar em contato</button
		>
	</div>
{/each}

{@render modal()}

{#snippet buttonClose(fn: () => void)}
	<button
		aria-label="close buttom"
		onclick={fn}
		class="absolute right-2 top-0 text-5xl font-medium hover:text-principal-4"
	>
		&times;
	</button>
{/snippet}

{#snippet modal()}
	<div class="w-full h-full top-0 left-0 flex items-center justify-center" class:isOpenModal>
		<div class="absolute w-full h-full bg-gray-900 opacity-50"></div>

		<div
			class="relative bg-white w-11/12 md:max-w-md mx-auto rounded-xl shadow-lg z-50 overflow-y-auto"
		>
			<!-- Add modal content here -->
			{@render buttonClose(openModal)}
			<div class="flex flex-col gap-6 py-4 text-left px-6">
				<div class="flex flex-col justify-between items-center pb-2">
					<img class="size-28" src={avatar} alt="" />
					<h3 class="text-2xl font-bold">{item.nome}</h3>
					<h2 class="font-medium">{item.desc}</h2>
				</div>
				<ul class="flex justify-center gap-2 flex-wrap">
					{#each item.tags as tag}
						<li class="bg-zinc-200 rounded-lg px-2 font-semibold">{tag}</li>
					{/each}
				</ul>

				<div class="flex flex-col justify-center items-center">
					<h4 class="font-bold">Disponibilidade</h4>
					<p class="bg-zinc-200 rounded-lg px-2 font-semibold">{item.dispo}</p>
				</div>

				<p class="text-justify bg-zinc-200 rounded-lg p-2">{item.caract}</p>
			</div>
		</div>
	</div>
{/snippet}

<style>
	.isOpenModal {
		position: fixed;
	}
</style>
