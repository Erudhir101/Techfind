<script>
	import { Eye, Heart, Target } from '@lucide/svelte';

	const contents = [
		{
			subtitle: 'Quem somos nós?',
			image: Eye,
			title: 'visão da techfind',
			paragraph: `Em um mercado em que acessar serviços de tecnologia se mostra tão burocrático,
				principalmente para pequenos e médios empreendedores e demais usuários sem experiência neste
				âmbito, a TechFind se torna a solução, simplificando os meios de conseguir obter as suas
				necessidades tecnológicas em um só lugar, com um processo simples, prático e eficiente.`
		},
		{
			subtitle: 'O que Buscamos?',
			image: Target,
			title: 'missão da techfind',
			paragraph: `Facilitar o acesso de pequenos e médios empreendedores a serviços tecnológicos, conectando-os de forma simples e eficiente a profissionais qualificados, além de oferecer suporte direto para a implementação de soluções tecnológicas, sempre com um processo descomplicado e acessível.`
		},
		{
			subtitle: 'No que acreditamos?',
			image: Heart,
			title: 'valores da techfind',
			paragraph: `Acreditamos que a tecnologia deve ser acessível e descomplicada para todos. Nosso compromisso é facilitar o acesso a soluções tecnológicas de alta qualidade, oferecendo suporte contínuo e preços justos. Valorizamos a confiança, a eficiência e a simplicidade em cada conexão que promovemos entre clientes e profissionais.`
		}
	];
</script>

<section id="aboutus" class="flex flex-col items-center min-h-svh p-5 pt-32 text-center gap-8">
	{#each contents as content}
		{@const Icon = content.image}
		<div class="flex flex-col items-center lg:w-1/2">
			<Icon size="96" fill="#ff6800" />
			<h2 class="text-5xl font-semibold text-principal-6">{content.title}</h2>
			<h3 class="text-xl my-4 font-semibold italic">{content.subtitle}</h3>
			<p class="text-lg mb-5 leading-8 text-zinc-900">
				{content.paragraph}
			</p>
		</div>
	{/each}
</section>

<style>
</style>
