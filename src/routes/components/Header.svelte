<script>
	import { slide } from 'svelte/transition';
	const btn =
		'border-none flex items-center justify-center bg-principal-5 hover:bg-principal-3 rounded-xl py-3 px-4 font-semibold cursor-pointer transition-colors duration-300 ease-in';
	// Importação da logo
	import logo from '$lib/images/logolaran.svg';

	// Reatividade no Svelte para controlar o menu móvel
	let isMenu = $state(false);

	// Reatividade no Svelte para controlar o menu móvel
	let isFormOpen = $state(false);

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
					<button class={btn}>
						<!-- <a href="javascript:void(0)">Comece agora!</a> -->
						<a href="/">Comece agora!</a>
					</button>
				</div>
			</div>
		{/if}
		<div class="hidden xl:flex xl:gap-4 xl:items-center">
			<button id="login-btn" class={btn}>Login</button>
			<button id="cadastro-btn" class={btn}>Cadastre-se</button>
			<button class={btn}>
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
					<input type="date" id="start-date" name="start-date" />
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
				<button type="submit" class="submit-btn">Enviar</button>
			</form>
			<button class="close-btn" onclick={() => (isFormOpen = !isFormOpen)}>Fechar</button>
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
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: white;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		z-index: 11;
		width: 90%;
		max-width: 600px;
	}

	.popup-form h2 {
		margin-bottom: 15px;
		text-align: center;
	}

	/* Estilos de layout responsivo */
	form {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
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
	}

	.submit-btn {
		grid-column: span 2;
		background-color: var(--color-primary-1);
		color: white;
		padding: 10px 20px;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		justify-self: center;
	}

	.close-btn {
		background-color: transparent;
		color: red;
		border: none;
		cursor: pointer;
		margin-top: 10px;
		text-align: center;
		grid-column: span 2;
	}

	/* Alinhamento responsivo */
	@media (max-width: 768px) {
		form {
			grid-template-columns: 1fr;
		}

		.form-group {
			grid-column: span 1;
		}
	}
</style>
