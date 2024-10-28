<script>
	const contents = [
		{
			subtitle: 'Quem somos nós?',
			image:
				'M0 208C0 104.4 75.7 18.5 174.9 2.6C184 1.2 192 8.6 192 17.9l0 63.3c0 8.4 6.5 15.3 14.7 16.5C307 112.5 384 199 384 303.4c0 103.6-75.7 189.5-174.9 205.4c-9.2 1.5-17.1-5.9-17.1-15.2l0-63.3c0-8.4-6.5-15.3-14.7-16.5C77 398.9 0 312.4 0 208zm288 48A96 96 0 1 0 96 256a96 96 0 1 0 192 0zm-96-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z',
			title: 'visão da techfind',
			paragraph: `Em um mercado em que acessar serviços de tecnologia se mostra tão burocrático,
				principalmente para pequenos e médios empreendedores e demais usuários sem experiência neste
				âmbito, a TechFind se torna a solução, simplificando os meios de conseguir obter as suas
				necessidades tecnológicas em um só lugar, com um processo simples, prático e eficiente.`
		},
		{
			subtitle: 'O que Buscamos?',
			image:
				'M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z',
			title: 'missão da techfind',
			paragraph: `Facilitar o acesso de pequenos e médios empreendedores a serviços tecnológicos, conectando-os de forma simples e eficiente a profissionais qualificados, além de oferecer suporte direto para a implementação de soluções tecnológicas, sempre com um processo descomplicado e acessível.`
		},
		{
			subtitle: 'No que acreditamos?',
			image:
				'M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z',
			title: 'valores da techfind',
			paragraph: `Acreditamos que a tecnologia deve ser acessível e descomplicada para todos. Nosso compromisso é facilitar o acesso a soluções tecnológicas de alta qualidade, oferecendo suporte contínuo e preços justos. Valorizamos a confiança, a eficiência e a simplicidade em cada conexão que promovemos entre clientes e profissionais.`
		}
	];
</script>

<section id="aboutus" class="flex flex-col items-center min-h-svh p-5 pt-32 text-center gap-8">
	{#each contents as content}
		<div class="flex flex-col items-center lg:w-1/2">
			<svg class="size-24 w-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"
				><path fill="#d96318" d={content.image} /></svg
			>
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
