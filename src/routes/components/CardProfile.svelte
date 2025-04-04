<script lang="ts">
	import { CircleUserRound, Cpu, X } from '@lucide/svelte';
	import { ScrollArea, Dialog } from 'bits-ui';

	interface UsuarioContato {
		nome: string;
		desc: string;
		tags: string[];
		dispo: string;
		caract: string;
	}

	const usuarios: UsuarioContato[] = [
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

{#snippet usuarioContato(usuario: UsuarioContato)}
	<Dialog.Root>
		<Dialog.Trigger
			class="rounded-lg bg-principal-5 hover:bg-principal-3 text-black shadow-sm inline-flex h-12 items-center justify-center whitespace-nowrap gap-2 font-semibold transition-colors duration-300 active:scale-[0.95]"
		>
			<Cpu /> Entre em Contato
		</Dialog.Trigger>
		<Dialog.Portal>
			<Dialog.Overlay class="fixed inset-0 z-50 bg-black/80" />
			<Dialog.Content
				class="rounded-lg bg-principal-1 shadow-sm outline-hidden fixed left-[50%] top-[50%] z-50 w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] border p-5 sm:max-w-[490px] md:w-full flex flex-col gap-8"
			>
				<Dialog.Title class="flex w-full items-center justify-center tracking-tight">
					<div class="flex flex-col justify-between items-center pb-2">
						<CircleUserRound size="64" />
						<h3 class="text-2xl font-bold">{usuario.nome}</h3>
						<h2 class="font-medium">{usuario.desc}</h2>
					</div>
				</Dialog.Title>
				<ul class="flex justify-center gap-2 flex-wrap">
					{#each usuario.tags as tag}
						<li class="bg-zinc-200 rounded-lg px-2 font-semibold">{tag}</li>
					{/each}
				</ul>
				<div class="flex flex-col justify-center items-center">
					<h4 class="font-bold">Disponibilidade</h4>
					<p class="bg-zinc-200 rounded-lg px-2 font-semibold">{usuario.dispo}</p>
				</div>
				<p class="text-justify bg-zinc-200 rounded-lg p-2">{usuario.caract}</p>
				<Dialog.Close
					class="focus-visible:ring-foreground focus-visible:ring-offset-background focus-visible:outline-hidden absolute right-5 top-5 rounded-md focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98]"
				>
					<X class="text-black size-6 hover:text-principal-4" />
				</Dialog.Close>
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
{/snippet}

{#snippet usuarioCard(usuario: UsuarioContato)}
	<div class="bg-white flex flex-col flex-1 p-4 md:p-8 gap-8 rounded-xl">
		<div class="flex gap-4">
			<CircleUserRound size="64" />
			<div>
				<h2 class="font-bold text-xl">{usuario.nome}</h2>
				<h3 class="font-medium">{usuario.desc}</h3>
			</div>
		</div>
		<ul class="flex gap-4 flex-wrap">
			{#each usuario.tags as tag}
				<li class="bg-zinc-200 rounded-lg px-2 font-semibold">{tag}</li>
			{/each}
		</ul>
		{@render usuarioContato(usuario)}
	</div>
{/snippet}

<ScrollArea.Root
	type="always"
	class="bg-zinc-400 flex justify-center px-2 py-4 md:py-8 md:px-16 overflow-hidden shadow-xl rounded-xl"
>
	<ScrollArea.Viewport class="w-full h-full max-w-md">
		<div class="flex flex-col items-center justify-center gap-8">
			{#each usuarios as usuario}
				{@render usuarioCard(usuario)}
			{/each}
		</div>
	</ScrollArea.Viewport>
	<ScrollArea.Scrollbar
		orientation="vertical"
		class="bg-principal-5 hover:bg-principal-6 flex w-3 my-1 touch-none select-none rounded-full border-l border-l-transparent p-px transition-all duration-200 hover:w-3"
	>
		<ScrollArea.Thumb class="bg-principal-2 flex-1 rounded-full" />
	</ScrollArea.Scrollbar>
	<ScrollArea.Scrollbar orientation="horizontal">
		<ScrollArea.Thumb />
	</ScrollArea.Scrollbar>
	<ScrollArea.Corner />
</ScrollArea.Root>
