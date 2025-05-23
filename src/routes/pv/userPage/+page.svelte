<script>
	import { ChevronLeft } from '@lucide/svelte';
	import { Button } from 'bits-ui';

	let usuario = $props();

	let provider = {
		name: usuario?.data?.usuario?.name || 'Nome desconhecido',
		title: usuario?.data?.usuario?.caract || 'Título desconhecido',
		description: usuario?.data?.usuario?.desc || 'Descrição não fornecida',
		expertise: usuario?.data?.usuario?.tags?.split('-') || [],
		completedProjects: 156,
		activeContracts: 12,
		satisfactionRate: 98,
		avatar:
			'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=150',
		coverPhoto:
			'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260',
		verifiedBusiness: true,
		rating: 4.9
	};
</script>

<svelte:head>
	<title>{provider.name} - Perfil de Usuário</title>
	<meta name="description" content="área do usuário, com todas as suas informações" />
</svelte:head>

<Button.Root
	href="../pv/pesquisa"
	class="bg-principal-1 hover:bg-principal-4 ml-4 mt-4 inline-block rounded-full border-2 border-black shadow hover:border-black/80"
>
	<ChevronLeft class="size-10 stroke-1 hover:stroke-black/80" />
</Button.Root>
<div class="profile">
	<div class="cover-photo" style="background-image: url({provider.coverPhoto})">
		<div class="avatar">
			<img src={provider.avatar} alt={provider.name} />
			{#if provider.verifiedBusiness}
				<span class="verified-badge">✓</span>
			{/if}
		</div>
	</div>

	<div class="profile-info">
		<div class="header">
			<div class="provider-info">
				<div class="name-container">
					<h1>{provider.name}</h1>
					<div class="rating">
						<span class="stars">{'★'.repeat(Math.floor(provider.rating))}</span>
						<span class="rating-number">({provider.rating})</span>
					</div>
				</div>
				<p class="title">{provider.title}</p>
			</div>
			<Button.Root
				class="bg-principal-4 hover:bg-principal-3 rounded-md border-none px-4 py-4 font-semibold transition-colors duration-300"
				>Requirir o Serviço</Button.Root
			>
		</div>

		<p class="description">{provider.description}</p>

		<div class="expertise">
			<h2 class="font-bold">Áreas de Expertize</h2>
			<div class="tags">
				{#each provider.expertise as skill}
					<span class="tag">{skill}</span>
				{/each}
			</div>
		</div>

		<div class="stats">
			<div class="stat">
				<span class="number">{provider.completedProjects}</span>
				<span class="label">Completed Projects</span>
			</div>
			<div class="stat">
				<span class="number">{provider.activeContracts}</span>
				<span class="label">Active Contracts</span>
			</div>
			<div class="stat">
				<span class="number">{provider.satisfactionRate}%</span>
				<span class="label">Satisfaction Rate</span>
			</div>
		</div>
	</div>
</div>

<style>
	.profile {
		background: white;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		margin: 20px auto;
		max-width: 900px;
		overflow: hidden;
	}

	.cover-photo {
		height: 200px;
		background-size: cover;
		background-position: center;
		position: relative;
	}

	.avatar {
		position: absolute;
		bottom: -50px;
		left: 20px;
		border: 4px solid white;
		border-radius: 50%;
		overflow: hidden;
		height: 150px;
		width: 150px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.avatar img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.verified-badge {
		position: absolute;
		bottom: 10px;
		right: 10px;
		background: var(--color-principal-4);
		color: white;
		width: 24px;
		height: 24px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 2px solid white;
		font-size: 14px;
	}

	.profile-info {
		padding: 70px 20px 20px;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 20px;
	}

	.provider-info h1 {
		margin: 0;
		font-size: 28px;
		text-align: left;
	}

	.name-container {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.rating {
		display: flex;
		align-items: center;
		gap: 4px;
	}

	.stars {
		color: #ffd700;
		letter-spacing: -2px;
	}

	.rating-number {
		color: #666;
	}

	.title {
		color: #666;
		margin: 4px 0;
		font-style: italic;
		font-size: 1.1em;
	}

	.description {
		margin-bottom: 24px;
		line-height: 1.6;
		color: #444;
	}

	.expertise {
		margin-bottom: 24px;
	}

	.expertise h2 {
		font-size: 1.2em;
		margin-bottom: 12px;
		color: #333;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.tag {
		background: #f0f0f0;
		padding: 6px 12px;
		border-radius: 16px;
		font-size: 0.9em;
		color: #555;
	}

	.stats {
		display: flex;
		gap: 40px;
		border-top: 1px solid #eee;
		padding-top: 24px;
		margin-top: 24px;
	}

	.stat {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.number {
		font-size: 24px;
		font-weight: bold;
		color: var(--color-principal-4);
	}

	.label {
		color: #666;
		font-size: 14px;
		margin-top: 4px;
		text-align: center;
	}

	@media (max-width: 768px) {
		.header {
			flex-direction: column;
			gap: 16px;
		}

		.stats {
			flex-direction: column;
			gap: 20px;
			align-items: center;
		}
	}
</style>
