<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import logo from '$lib/images/logolaran.svg';

	const btn =
		'border-none flex items-center justify-center bg-principal-5 hover:bg-principal-3 rounded-xl py-3 px-4 font-semibold cursor-pointer transition-colors duration-300 ease-in';
	let today = new Date().toISOString().split('T')[0];
	let size = $state(0);
	let isMenu = $state(false);
	let isFormOpen = $state(false);
	let isSignupOpen = $state(false);
	let isLoginOpen = $state(false);
	let userType = $state<'Pessoa Física' | 'Pessoa Jurídica' | null>(null);

	function OpenCloseMenu() {
		isMenu = !isMenu;
	}
	function OpenCloseForm() {
		isFormOpen = !isFormOpen;
	}
	function OpenCloseSignup() {
		isSignupOpen = !isSignupOpen;
	}
	function OpenCloseLogin() {
		isLoginOpen = !isLoginOpen;
	}

	// Função de login com verificações de tipo e validação de campos
	function handleLogin(event: Event) {
		event.preventDefault();
		const form = event.target as HTMLFormElement | null;

		if (!form) {
			return;
		}

		const emailOrDoc = (form.querySelector('#login-email') as HTMLInputElement)?.value;
		const password = (form.querySelector('#login-password') as HTMLInputElement)?.value;

		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const cpfPattern = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
		const cnpjPattern = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;

		if (
			!emailOrDoc ||
			(!emailPattern.test(emailOrDoc) &&
				!cpfPattern.test(emailOrDoc) &&
				!cnpjPattern.test(emailOrDoc))
		) {
			alert('Digite um E-mail, CPF ou CNPJ válido.');
			return;
		}

		if (
			!password ||
			password.length < 12 ||
			!/[A-Z]/.test(password) ||
			!/[0-9]/.test(password) ||
			!/[!@#$%^&*]/.test(password)
		) {
			alert(
				'A senha deve ter no mínimo 12 caracteres, incluindo uma letra maiúscula, um número e um caractere especial.'
			);
			return;
		}

		alert('Login realizado com sucesso!');
		isLoginOpen = false;
	}

	const list = [
		{ name: 'início', href: '/' },
		{ name: 'Vantagens', href: '#vantagens' },
		{ name: 'Sobre nós', href: '#aboutus' },
		{ name: 'Planos', href: '#planos' },
		{ name: 'Suporte', href: '#support' }
	];

	let password = $state('');
	let passwordStrength = $state('');

	function checkPasswordStrength() {
		const strongPassword = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{12,}$/;
		const mediumPassword = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;

		if (strongPassword.test(password)) {
			passwordStrength = 'forte';
		} else if (mediumPassword.test(password)) {
			passwordStrength = 'médio';
		} else {
			passwordStrength = 'fácil';
		}
	}
	function submitForm(event: Event) {
		event.preventDefault();
		alert('Cadastro concluído com sucesso!');
		isSignupOpen = false;
		userType = null;
		password = ''; // Reset password
		passwordStrength = ''; // Reset strength
	}

	$effect(() => {
		if (size >= 1216 && isMenu) {
			OpenCloseMenu();
		}
	});
</script>

{#snippet buttonClose(fn: () => void)}
	<button
		aria-label="close buttom"
		onclick={fn}
		class="absolute top-[-5px] right-1 text-5xl font-semibold hover:text-principal-4"
	>
		&times;
	</button>
{/snippet}

{#snippet buttonBack()}
	<button
		aria-label="back"
		class="absolute top-1.5 left-1 font-semibold cursor-pointer"
		onclick={() => (userType = null)}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="28"
			height="28"
			class="fill-black hover:fill-principal-4"
			viewBox="0 0 512 512"
			><path
				d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-320c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3l0 41.7 0 41.7L459.5 440.6zM256 352l0-96 0-128 0-32c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-64z"
			/></svg
		>
	</button>
{/snippet}

<header class="p-4 sticky top-0 bg-principal-1 z-10 shadow-md">
	<nav bind:clientWidth={size} class="h-14 relative flex gap-4 items-center justify-between">
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
				transition:slide={{ duration: 300 }}
				class="absolute flex justify-around top-[5rem] left-[-2rem] w-screen pb-5 bg-principal-1 shadow-md"
			>
				<ul class="flex flex-col items-center gap-4">
					{#each list as item}
						<li class="nav-item">
							<a href={item.href} class="no-underline font-semibold">{item.name}</a>
						</li>
					{/each}
				</ul>
				<div class="flex flex-col items-center gap-4">
					<button id="login-btn" class={btn} onclick={OpenCloseLogin}>Login</button>
					<button
						id="cadastro-btn"
						class={btn}
						onclick={() => {
							OpenCloseMenu();
							OpenCloseSignup();
						}}>Cadastre-se</button
					>
					<button
						class={btn}
						onclick={() => {
							OpenCloseMenu();
							OpenCloseForm();
						}}
					>
						<a href="/">Comece agora!</a>
					</button>
				</div>
			</div>
		{/if}
		<div class="hidden xl:flex xl:gap-4 xl:items-center">
			<button id="login-btn" class={btn} onclick={OpenCloseLogin}>Login</button>
			<button class={btn} onclick={OpenCloseSignup}>Cadastre-se</button>
			<button class={btn} onclick={OpenCloseForm}>
				<a href="/">Comece agora!</a>
			</button>
		</div>
		<!-- Botão de menu móvel -->
		<button aria-label="menu" class="xl:hidden" onclick={OpenCloseMenu}>
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

	{#if isSignupOpen}
		<div
			class="popup-overlay-cad"
			aria-hidden="true"
			transition:fade={{ duration: 300 }}
			onclick={OpenCloseSignup}
		></div>
		<div class="popup-form-cad" transition:fade={{ duration: 300 }}>
			{#if !userType}
				<h2>Escolha o Tipo de Cadastro</h2>
				<div class="flex justify-center gap-4">
					<button class={btn} onclick={() => (userType = 'Pessoa Física')}>Pessoa Física</button>
					<button class={btn} onclick={() => (userType = 'Pessoa Jurídica')}>Pessoa Jurídica</button
					>
				</div>
				{@render buttonClose(OpenCloseSignup)}
			{:else}
				<h2>Formulário de Cadastro: {userType}</h2>
				<form onsubmit={submitForm} action="/api/chat">
					{#if userType === 'Pessoa Física'}
						{@render buttonBack()}
						{@render buttonClose(OpenCloseSignup)}
						<div class="form-group">
							<label for="name">Nome:</label>
							<input type="text" id="name" placeholder="Nome Completo" required />
						</div>
						<div class="form-group">
							<label for="dob">Data de Nascimento:</label>
							<input type="date" id="dob" min={today} required />
						</div>
						<div class="form-group">
							<label for="cpf">CPF:</label>
							<input
								type="text"
								id="cpf"
								placeholder="000.000.000-00"
								required
								pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2}"
								title="CPF no formato 000.000.000-00"
							/>
						</div>
					{:else if userType === 'Pessoa Jurídica'}
						{@render buttonBack()}
						{@render buttonClose(OpenCloseSignup)}
						<div class="form-group">
							<label for="razao-social">Razão Social:</label>
							<input type="text" id="razao-social" placeholder="Razão Social" required />
						</div>
						<div class="form-group">
							<label for="data-abertura">Data de Abertura:</label>
							<input type="date" id="data-abertura" min={today} required />
						</div>
						<div class="form-group">
							<label for="cnpj">CNPJ:</label>
							<input
								type="text"
								id="cnpj"
								placeholder="00.000.000/0000-00"
								required
								pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2}"
								title="CNPJ no formato 00.000.000/0000-00"
							/>
						</div>
					{/if}
					<!-- Campos Comuns -->
					<div class="form-group">
						<label for="email">E-mail:</label>
						<input type="email" id="email" placeholder="E-mail" required />
					</div>
					<div class="form-group">
						<label for="telefone">Telefone:</label>
						<input
							type="tel"
							id="telefone"
							placeholder="(00) 00000-0000"
							pattern="/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/"
							required
						/>
					</div>
					<div class="form-group">
						<label for="senha">Senha:</label>
						<input
							type="password"
							id="senha"
							bind:value={password}
							oninput={checkPasswordStrength}
							required
						/>
					</div>
					<div class="password-strength">
						<p>Força da senha: {passwordStrength}</p>
						<div class="progress-bar" data-strength={passwordStrength}></div>
					</div>
					<button type="submit" class={`${btn} w-full`}>Cadastrar</button>
				</form>
			{/if}
		</div>
	{/if}

	<!-- Estrutura do formulário de pop-up -->
	{#if isFormOpen}
		<div
			class="popup-overlay"
			aria-hidden="true"
			transition:fade={{ duration: 300 }}
			onclick={() => (isFormOpen = !isFormOpen)}
		></div>
		<div class="popup-form" transition:fade={{ duration: 300 }}>
			<h2>Formulário de Contratação</h2>
			<form method="POST" action="/api/chat">
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
			{@render buttonClose(OpenCloseForm)}
		</div>
	{/if}

	{#if isLoginOpen}
		<div
			class="login-overlay"
			role="button"
			tabindex="0"
			onclick={OpenCloseLogin}
			onkeydown={(e) => e.key === 'Escape' && OpenCloseLogin()}
		></div>
		<div class="login-form">
			<h2>Login</h2>
			<form onsubmit={handleLogin}>
				<div class="form-group">
					<label for="login-email">E-mail, CPF ou CNPJ:</label>
					<input type="text" id="login-email" name="login-email" required />
				</div>
				<div class="form-group">
					<label for="login-password">Senha:</label>
					<input type="password" id="login-password" name="login-password" required />
				</div>
				<button type="submit" class={`${btn} w-96 justify-self-center`}>Entrar</button>
			</form>
			{@render buttonClose(OpenCloseLogin)}
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
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		margin-top: 1rem;
		margin-inline: auto;
		background-color: white;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		z-index: 11;
		width: 100%;
		max-width: 600px;
		/* max-height: 90vh; */
		max-height: 90vh;
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
		grid-gap: 1rem;
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
		margin-bottom: 10px;
	}

	textarea {
		resize: vertical;
		height: 100px;
		resize: none;
	}

	.popup-overlay-cad {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(5px);
		z-index: 10;
		justify-content: space-between;
	}

	.popup-form-cad {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		margin-top: 1rem;
		margin-inline: auto;
		background-color: white;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		z-index: 11;
		width: 100%;
		max-width: 600px;
		max-height: 90vh;
		overflow-y: auto;
		justify-content: space-between;
	}

	.popup-form-cad h2 {
		font-weight: bold;
		text-align: center;
		font-size: large;
		padding-bottom: 1rem;
	}

	.password-strength {
		margin-top: 10px;
	}
	.password-strength .progress-bar {
		height: 5px;
		background-color: grey;
		width: 0; /* Initial width */
		transition: width 0.3s ease;
		border: rgba(0, 0, 0, 0.2);
		border-radius: 12px;
	}
	.password-strength .progress-bar[data-strength='fácil'] {
		width: 33%;
		background-color: rgb(255, 168, 96);
	}
	.password-strength .progress-bar[data-strength='médio'] {
		width: 66%;
		background-color: rgb(255, 149, 63);
	}
	.password-strength .progress-bar[data-strength='forte'] {
		width: 100%;
		background-color: rgb(209, 94, 0);
	}

	/*Login*/

	.login-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100svw;
		height: 100svh;
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(5px);
		z-index: 10;
	}

	.login-form {
		position: relative;
		margin: 0 auto;
		background-color: white;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		z-index: 11;
		width: 100%;
		max-width: 600px;
		max-height: 90vh;
		overflow-y: auto;
	}

	.login-form h2 {
		margin-bottom: 15px;
		text-align: center;
		font-weight: bold;
		font-size: 1.5rem;
	}

	.close-btn {
		position: absolute;
		top: 5px;
		right: 5px;
		background: none;
		border: none;
		font-size: 1.2rem;
		cursor: pointer;
		color: #333;
	}
</style>
