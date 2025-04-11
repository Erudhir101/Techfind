<script lang="ts">
	import { CircleUserRound, Cpu, X } from '@lucide/svelte';
	import { ScrollArea, Dialog, Button } from 'bits-ui';

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
			class="bg-principal-5 hover:bg-principal-3 inline-flex h-12 items-center justify-center gap-2 rounded-lg font-semibold whitespace-nowrap text-black shadow-sm transition-colors duration-300 active:scale-[0.95]"
		>
			<Cpu /> Entre em Contato
		</Dialog.Trigger>
		<Dialog.Portal>
			<Dialog.Overlay class="fixed inset-0 z-50 bg-black/80" />
			<Dialog.Content
				class="bg-principal-1 fixed top-[50%] left-[50%] z-50 flex w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] flex-col gap-8 rounded-lg border p-5 shadow-sm outline-hidden sm:max-w-[490px] md:w-full"
			>
				<Dialog.Title class="flex w-full items-center justify-center tracking-tight">
					<div class="flex flex-col items-center justify-between pb-2">
						<CircleUserRound size="64" />
						<h3 class="text-2xl font-bold">{usuario.nome}</h3>
						<h2 class="font-medium">{usuario.desc}</h2>
					</div>
				</Dialog.Title>
				<ul class="flex flex-wrap justify-center gap-2">
					{#each usuario.tags as tag}
						<li class="rounded-lg bg-zinc-200 px-2 font-semibold">{tag}</li>
					{/each}
				</ul>
				<div class="flex flex-col items-center justify-center">
					<h4 class="font-bold">Disponibilidade</h4>
					<p class="rounded-lg bg-zinc-200 px-2 font-semibold">{usuario.dispo}</p>
				</div>
				<p class="rounded-lg bg-zinc-200 p-2 text-justify">{usuario.caract}</p>
				<Dialog.Close
					class="focus-visible:ring-foreground focus-visible:ring-offset-background absolute top-5 right-5 rounded-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden active:scale-[0.98]"
				>
					<X class="hover:text-principal-4 size-6 text-black" />
				</Dialog.Close>
				<form action="?/notification" method="POST" class="self-center">
					<Button.Root
						type="submit"
						class="bg-principal-4 hover:bg-principal-3 flex gap-4 rounded-md px-4 py-2 font-semibold shadow transition-colors duration-300"
					>
						<Cpu /> Entre em Contato
					</Button.Root>
				</form>
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
{/snippet}

{#snippet usuarioCard(usuario: UsuarioContato)}
	<div class="flex flex-1 flex-col gap-8 rounded-xl bg-white p-4 md:p-8">
		<div class="flex gap-4">
			<CircleUserRound size="64" />
			<div>
				<h2 class="text-xl font-bold">{usuario.nome}</h2>
				<h3 class="font-medium">{usuario.desc}</h3>
			</div>
		</div>
		<ul class="flex flex-wrap items-center justify-center gap-4">
			{#each usuario.tags.sort() as tag (tag)}
				<li class="rounded-lg bg-zinc-200 px-2 font-semibold">{tag}</li>
			{/each}
		</ul>
		{@render usuarioContato(usuario)}
	</div>
{/snippet}

<ScrollArea.Root
	type="always"
	class="flex justify-center overflow-hidden rounded-xl bg-zinc-400 px-2 py-4 shadow-xl md:px-16 md:py-8"
>
	<ScrollArea.Viewport class="h-full w-full max-w-md">
		<div class="flex flex-col items-center justify-center gap-8">
			{#each usuarios as usuario}
				{@render usuarioCard(usuario)}
			{/each}
		</div>
	</ScrollArea.Viewport>
	<ScrollArea.Scrollbar
		orientation="vertical"
		class="bg-principal-5 hover:bg-principal-6 my-1 hidden w-3 touch-none rounded-full border-l border-l-transparent p-px transition-all duration-200 select-none hover:w-3 lg:flex"
	>
		<ScrollArea.Thumb class="bg-principal-2 flex-1 rounded-full" />
	</ScrollArea.Scrollbar>
	<ScrollArea.Scrollbar orientation="horizontal">
		<ScrollArea.Thumb />
	</ScrollArea.Scrollbar>
	<ScrollArea.Corner />
</ScrollArea.Root>
