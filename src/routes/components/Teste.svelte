<script>
	import Support from './Support.svelte';
</script>

<main id="content">
	<div class="hidden"></div>
	<Support />
</main>
<div id="popup-overlay" class="hidden"></div>

<div id="popup" class="hidden">
	<div id="popup-content">
		<h2>Selecione o Tipo de Cadastro</h2>
		<div id="tipo-cadastro">
			<button class="btn-option" id="pf-btn">Pessoa Física</button>
			<button class="btn-option" id="pj-btn">Pessoa Jurídica</button>
		</div>

		<form id="form-pf" class="form hidden">
			<h2>Cadastro Pessoa Física</h2>
			<label for="nome">Nome:</label>
			<input type="text" id="nome" placeholder="Digite seu nome" required />

			<label for="data-nasc">Data de Nascimento:</label>
			<input type="text" id="data-nasc" placeholder="DD/MM/AAAA" required />

			<label for="email-pf">E-mail:</label>
			<input type="email" id="email-pf" placeholder="seuemail@example.com" required />

			<label for="telefone-pf">Telefone:</label>
			<input type="tel" id="telefone-pf" placeholder="(99) 99999-9999" required />

			<label for="cpf">CPF:</label>
			<input type="text" id="cpf" placeholder="999.999.999-99" required />

			<label for="senha-pf">Senha:</label>
			<input type="password" id="senha-pf" placeholder="Mínimo 10 caracteres" required />
			<div id="senha-strength-container">
				<div id="senha-strength-bar-pf"></div>
			</div>
			<p id="senha-strength-label">Força da Senha:</p>
			<button type="submit" class="btn-default">Concluir Cadastro</button>
		</form>

		<form id="form-pj" class="form hidden">
			<h2>Cadastro Pessoa Jurídica</h2>
			<label for="razao-social">Razão Social:</label>
			<input type="text" id="razao-social" placeholder="Digite a razão social" required />

			<label for="data-abertura">Data de Abertura da Empresa:</label>
			<input type="text" id="data-abertura" placeholder="DD/MM/AAAA" required />

			<label for="email-pj">E-mail:</label>
			<input type="email" id="email-pj" placeholder="seuemail@empresa.com" required />

			<label for="telefone-pj">Telefone:</label>
			<input type="tel" id="telefone-pj" placeholder="(99) 99999-9999" required />

			<label for="cnpj">CNPJ:</label>
			<input type="text" id="cnpj" placeholder="99.999.999/9999-99" required />

			<label for="senha-pj">Senha:</label>
			<input type="password" id="senha-pj" placeholder="Mínimo 10 caracteres" required />
			<div id="senha-strength-container">
				<div id="senha-strength-bar-pj"></div>
			</div>
			<p id="senha-strength-label-pj">Força da Senha:</p>

			<button type="submit" class="btn-default">Concluir Cadastro</button>
		</form>
	</div>
</div>

<div id="login-popup-overlay" class="hidden"></div>

<div id="login-popup" class="hidden">
	<div id="login-popup-content">
		<h2>Login</h2>
		<form id="login-form">
			<label for="login-username">E-mail, CPF ou CNPJ:</label>
			<input
				type="text"
				id="login-username"
				placeholder="Digite seu e-mail, CPF ou CNPJ"
				required
			/>

			<label for="login-password">Senha:</label>
			<input
				type="password"
				id="login-password"
				placeholder="Digite sua senha (mínimo 10 caracteres)"
				required
			/>

			<button type="submit" class="btn-default">Entrar</button>

			<div class="login-links">
				<button type="button" id="forgot-password" class="btn-secondary">
					Esqueci minha senha
				</button>
				<button type="button" id="signup-btn" class="btn-secondary">
					Ainda não estou cadastrado
				</button>
			</div>
		</form>
	</div>
</div>

<!-- Pop-up Plano TechBasic -->
<div id="popup-techbasic-overlay" class="plan-popup-overlay hidden"></div>
<div id="popup-techbasic" class="plan-popup hidden">
	<div class="plan-popup-content">
		<button class="close-plan-popup-btn" id="close-techbasic"> &times; </button>
		<h2>Plano TechBasic</h2>
		<p>Acesso à plataforma, suporte e consultoria de nível básico.</p>
	</div>
</div>

<!-- Pop-up Plano Tech-Empresarial -->
<div id="popup-techempresarial-overlay" class="plan-popup-overlay hidden"></div>
<div id="popup-techempresarial" class="plan-popup hidden">
	<div class="plan-popup-content">
		<button class="close-plan-popup-btn" id="close-techempresarial"> &times; </button>
		<h2>Plano Tech-Empresarial</h2>
		<p>
			Todos os recursos do plano Basic, suporte avançado, consultoria tecnológica completa e suporte
			on-demand.
		</p>
	</div>
</div>

<!-- Pop-up Plano Tech-Advanced -->
<div id="popup-techadvanced-overlay" class="plan-popup-overlay hidden"></div>
<div id="popup-techadvanced" class="plan-popup hidden">
	<div class="plan-popup-content">
		<button class="close-plan-popup-btn" id="close-techadvanced"> &times; </button>
		<h2>Plano Tech-Advanced</h2>
		<p>
			Todos os recursos do plano Empresarial, gerenciamento de projetos, governança corporativa e
			suporte customizado.
		</p>
	</div>
</div>

<footer>
	<img src="src/images/wave.svg" alt="wave" />
	<div id="footer_items">
		<span id="copyright"> &copy 2024 TechFind </span>

		<div class="social-media-buttons">
			<a
				aria-label="whatsapp"
				href="https://chat.whatsapp.com/LkR6fPlgtcuEvHk5x2A5r3"
				target="_blank"
			>
				<i class="fa-brands fa-whatsapp"></i>
			</a>

			<a aria-label="instagram" href="https://www.instagram.com/betechfind/" target="_blank">
				<i class="fa-brands fa-instagram"></i>
			</a>

			<a aria-label="github" href="https://github.com/erudhir101/TechFind_startup" target="_blank">
				<i class="fa-brands fa-github"></i>
			</a>
		</div>
	</div>
</footer>
