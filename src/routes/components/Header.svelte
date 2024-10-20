<script>
	import logo from '$lib/images/logolaran.svg';
</script>

<header>
	<nav id="navbar">
		<i class="logo">
			<img src={logo} alt="Logo Techfind" id="logo" />
		</i>
		<ul id="nav_list">
			<li class="nav-item active">
				<a href="#home" class="scroll-link">Início</a>
			</li>
			<li class="nav-item">
				<a href="#menu" class="scroll-link">Vantagens</a>
			</li>
			<li class="nav-item">
				<a href="#aboutus" class="scroll-link">Sobre nós</a>
			</li>
			<li class="nav-item">
				<a href="#planos" class="scroll-link">Nossos Produtos</a>
			</li>
			<li class="nav-item">
				<a href="#support" class="scroll-link">Suporte</a>
			</li>
		</ul>

		<div class="btn-list">
			<button id="login-btn" class="btn-default entrar">Login</button>
			<button id="cadastro-btn" class="btn-default">Cadastre-se</button>
			<button class="btn-default btn-contact">
				<a href="" target="_blank">Entre em contato</a>
			</button>
		</div>
		<button id="mobile_btn">
			<i class="fa-solid fa-bars"></i>
		</button>
	</nav>

	<div id="mobile_menu">
		<ul id="mobile_nav_list">
			<li class="nav-item">
				<a href="#home" class="scroll-link">Início</a>
			</li>
			<li class="nav-item">
				<a href="#menu" class="scroll-link">Vantagens</a>
			</li>
			<li class="nav-item">
				<a href="#aboutus" class="scroll-link">Sobre nós</a>
			</li>
			<li class="nav-item">
				<a href="#planos" class="scroll-link">Nossos produtos</a>
			</li>
			<li class="nav-item">
				<a href="#support" class="scroll-link">Suporte</a>
			</li>
		</ul>
		<div class="mobile-btns">
			<button id="login-btn-mobile" class="btn-default entrar"> Login </button>
			<button id="cadastro-btn-mobile" class="btn-default"> Cadastre-se </button>
			<button class="btn-default btn-contact">
				<a href="" target="_blank">Entre em contato</a>
			</button>
		</div>
	</div>
</header>

<style>
	header {
		width: 100%;
		padding: 30px 30px;
		position: sticky;
		top: 0;
		background-color: var(--color-primary-1);
		z-index: 3;
	}

	#navbar {
		width: 100%;
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

	.btn-list {
		display: flex;
		gap: 1rem;
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

	@media screen and (max-width: 1200px) {
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

		#mobile_menu.active {
			display: flex;
			gap: 5rem;
			align-items: center;
			justify-content: center;
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
	}
</style>
