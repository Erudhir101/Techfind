<script>
	const btn =
		'border-none flex items-center justify-center bg-principal-5 hover:bg-principal-3 rounded-xl py-3 px-4 font-semibold cursor-pointer transition-colors duration-300 ease-in';
	// Importação da logo
	import logo from '$lib/images/logolaran.svg';

	// Reatividade no Svelte para controlar o menu móvel
	let isMobileMenuActive = $state(false);

	// Função para alternar a visibilidade do menu móvel
	function toggleMobileMenu() {
		isMobileMenuActive = !isMobileMenuActive;
	}

	let isFormOpen = $state(false);

	// Função para abrir e fechar o pop-up
	function toggleForm() {
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

<header>
	<nav id="navbar">
		<img src={logo} alt="Logo Techfind" class="h-8 md:h-10 xl:h-14" />
		<ul id="nav_list">
			{#each list as item}
				<li class="nav-item">
					<a href={item.href} class="no-underline font-semibold">{item.name}</a>
				</li>
			{/each}
		</ul>
		<div class="hidden h- xl:flex xl:gap-4 xl:items-center">
			<button id="login-btn" class={btn}>Login</button>
			<button id="cadastro-btn" class={btn}>Cadastre-se</button>
			<button class={btn}>
				<!-- <a href="javascript:void(0)">Comece agora!</a> -->
				<a href="/">Comece agora!</a>
			</button>
		</div>

		<!-- Botão de menu móvel -->
		<button aria-label="menu" class="hidden" onclick={toggleMobileMenu}>
			<i class="fa-solid fa-bars"></i>
		</button>
	</nav>

	<!-- Menu móvel visível condicionalmente -->
	{#if isMobileMenuActive}
		<div id="mobile_menu" class="active">
			<ul id="mobile_nav_list">
				{#each list as item}
					<li class="nav-item active:text-black">
						<a href={item.href} class="scroll-link">{item.name}</a>
					</li>
				{/each}
			</ul>
			<div class="mobile-btns">
				<button id="login-btn-mobile" class="btn-default entrar"> Login </button>
				<button id="cadastro-btn-mobile" class="btn-default"> Cadastre-se </button>
				<button class="btn-default btn-contact">
					<a href="/" target="_blank">Entre em contato</a>
				</button>
			</div>
		</div>
	{/if}

	<!-- Estrutura do formulário de pop-up -->
	{#if isFormOpen}
		<div class="popup-overlay" aria-hidden="true" onclick={toggleForm}></div>
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
			<button class="close-btn" onclick={toggleForm}>Fechar</button>
		</div>
	{/if}
</header>

<style>
	header {
		width: 100%;
		height: 50px;
		padding: 30px 30px;
		position: sticky;
		top: 0;
		background-color: var(--color-primary-1);
		z-index: 3;
	}

	#navbar {
		width: 100%;
		height: 50px;
		display: flex;
		gap: 1rem;
		align-items: center;
		justify-content: space-between;
	}

	#logo {
		font-size: 2.5rem;
		color: var(--color-primary-6);
		height: 50px;
	}

	#nav_list {
		display: flex;
		gap: 1.5rem;
		list-style: none;
	}

	.nav-item a {
		text-decoration: none;
		color: #1d1d1dad;
		font-weight: 600;
	}

	.nav-item.active a {
		color: var(--color-neutral-1);
		border-bottom: 3px solid var(--color-primary-4);
	}

	#mobile_btn {
		display: none;
	}

	#mobile_menu {
		display: none;
	}

	#mobile_menu.active {
		display: flex;
		gap: 5rem;
		align-items: center;
		justify-content: center;
	}
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

	/*@media screen and (max-width: 1200px) {
		#nav_list,
		#navbar .btn-default {
			display: none;
		}

		#mobile_btn {
			display: block;
			border: none;
			background-color: transparent;
			font-size: 1.5rem;
			cursor: pointer;
		}

		.mobile-btns {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;
		}

		#mobile_nav_list {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			margin: 12px 0px;
		}

		#mobile_nav_list .nav-item {
			list-style: none;
			text-align: center;
		}
	}*/
</style>
