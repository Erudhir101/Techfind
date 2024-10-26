<script>
	import { slide } from 'svelte/transition';
	const btn =
		'border-none flex items-center justify-center bg-principal-5 hover:bg-principal-3 rounded-xl py-3 px-4 font-semibold cursor-pointer transition-colors duration-300 ease-in';
	let today = new Date().toISOString().split('T')[0];
	// Importação da logo
	import logo from '$lib/images/logolaran.svg';

	// Reatividade no Svelte para controlar o menu móvel
	let isMenu = $state(false);

	// Reatividade no Svelte para controlar o menu móvel
	let isFormOpen = $state(false);

	function OpenCloseMenu() {
		isMenu = !isMenu;
	}
	function OpenCloseForm() {
		isFormOpen = !isFormOpen;
	}

	const list = [
		{ name: 'início', href: '#home' },
		{ name: 'Vantagens', href: '#menu' },
		{ name: 'Sobre nós', href: '#aboutus' },
		{ name: 'Planos', href: '#planos' },
		{ name: 'Suporte', href: '#support' }
	];
</script>

<header class="p-8 sticky top-0 bg-principal-1 z-10 shadow-md">
	<nav class="h-14 relative flex gap-4 items-center justify-between">
		<img src={logo} alt="Logo Techfind" class="h-8 md:h-12" />
		<ul class="hidden xl:flex xl:gap-4 xl:list-none">
			{#each list as item}
				<li class="nav-item">
					<a href={item.href} class="no-underline font-semibold">{item.name}</a>
				</li>
			{/each}
		</ul>
		{#if isMenu}
			<div
				class="absolute flex justify-around top-[5rem] left-[-2rem] w-screen pb-5 bg-principal-1 shadow-md"
			>
				<ul
					transition:slide={{ duration: 300, axis: 'y' }}
					class="flex flex-col items-center gap-4"
				>
					{#each list as item}
						<li class="nav-item">
							<a href={item.href} class="no-underline font-semibold">{item.name}</a>
						</li>
					{/each}
				</ul>
				<div
					transition:slide={{ duration: 300, axis: 'y' }}
					class="flex flex-col items-center gap-4"
				>
					<button id="login-btn" class={btn}>Login</button>
					<button id="cadastro-btn" class={btn}>Cadastre-se</button>
					<button
						class={btn}
						onclick={() => {
							OpenCloseMenu();
							OpenCloseForm();
						}}
					>
						<!-- <a href="javascript:void(0)">Comece agora!</a> -->
						<a href="/">Comece agora!</a>
					</button>
				</div>
			</div>
		{/if}
		<div class="hidden xl:flex xl:gap-4 xl:items-center">
			<button id="login-btn" class={btn}>Login</button>
			<button id="cadastro-btn" class={btn}>Cadastre-se</button>
			<button class={btn} onclick={OpenCloseForm}>
				<!-- <a href="javascript:void(0)">Comece agora!</a> -->
				<a href="/">Comece agora!</a>
			</button>
		</div>
		<!-- Botão de menu móvel -->
		<button aria-label="menu" class="xl:hidden" onclick={() => (isMenu = !isMenu)}>
			<svg class="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 10h16M4 14h16M4 18h16"
				/>
			</svg>
		</button>
	</nav>

	<!-- Estrutura do formulário de pop-up -->
	{#if isFormOpen}
		<div class="popup-overlay" aria-hidden="true" onclick={() => (isFormOpen = !isFormOpen)}></div>
		<div class="popup-form">
			<h2>Formulário de Contratação</h2>
			<form>
				<!-- Segmentação do negócio -->
				<div class="form-group">
					<label for="segment">Segmentação do Negócio:</label>
					<input type="text" id="segment" name="segment" placeholder="Ex: E-commerce, SaaS, etc." />
				</div>

				<!-- Tipo de produto/serviço -->
				<div class="form-group">
					<label for="product">Tipo de Produto/Serviço:</label>
					<input
						type="text"
						id="product"
						name="product"
						placeholder="Descreva o produto ou serviço desejado"
					/>
				</div>

				<!-- Regime de contratação (dropdown) -->
				<div class="form-group">
					<label for="contract-regime">Regime de Contratação:</label>
					<select id="contract-regime" name="contract-regime">
						<option value="">Selecione o regime de contratação</option>
						<option value="freelancer">Freelancer - Pessoa jurídica</option>
						<option value="clt">Freelancer - CLT</option>
						<option value="empresa">Empresa - Pessoa jurídica</option>
					</select>
				</div>

				<!-- Regime de trabalho (dropdown) -->
				<div class="form-group">
					<label for="work-regime">Regime de Trabalho:</label>
					<select id="work-regime" name="work-regime">
						<option value="">Selecione o regime de trabalho</option>
						<option value="hibrido">Híbrido</option>
						<option value="presencial">Presencial</option>
						<option value="home-office">Home Office</option>
					</select>
				</div>

				<!-- Prazo de início -->
				<div class="form-group">
					<label for="start-date">Prazo de Início:</label>
					<input type="date" min={today} id="start-date" name="start-date" />
				</div>

				<!-- Chatbox para explicação -->
				<div class="form-group">
					<label for="client-message">Descreva sua necessidade:</label>
					<textarea
						id="client-message"
						name="client-message"
						rows="5"
						placeholder="Descreva com suas palavras o que você precisa..."
					></textarea>
				</div>

				<!-- Botão de envio -->
				<button type="submit" class={`${btn} w-96 justify-self-center`}>Enviar</button>
			</form>
			<button
				aria-label="close"
				class="absolute top-1.5 right-0 rounded-xl font-semibold cursor-pointer"
				onclick={() => (isFormOpen = !isFormOpen)}
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 384 512"
					><path
						fill="#101010"
						d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
					/></svg
				>
			</button>
		</div>
	{/if}
</header>

<style>
	/* Efeito de desfoque no fundo */
	.popup-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(5px);
		z-index: 10;
	}

	/* Pop-up do formulário */
	.popup-form {
		position: relative;
		margin: 0 auto;
		background-color: white;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		z-index: 11;
		width: 100%;
		max-width: 600px;
		max-height: 98vh;
		overflow-y: auto;
		justify-content: space-between;
	}

	::webkit-scrollbar {
		display: none;
	}

	.popup-form h2 {
		margin-bottom: 15px;
		text-align: center;
		font-weight: bold;
		font-size: 1.5rem;
	}

	/* Estilos de layout responsivo */
	form {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 20px;
		justify-items: stretch;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		grid-column: span 2;
	}

	/* Dropdowns e outros inputs */
	select,
	input,
	textarea {
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
		width: 100%;
		box-sizing: border-box;
		margin-bottom: 15px;
	}

	textarea {
		resize: vertical;
		height: 100px;
		resize: none;
	}
</style>
