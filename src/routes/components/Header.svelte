<script lang="ts">
	import logo from '$lib/images/logolaran.svg';
	import { slide, fade } from 'svelte/transition';
	import Dialog from './Dialog.svelte';
	import { AlignJustify, HelpCircle, X } from '@lucide/svelte';
	import { Collapsible } from 'bits-ui';
	import { onMount } from 'svelte';
	import HelpCenter from './help-center/HelpCenter.svelte';

	let size = $state(0);
	let isOpen = $state(false);
	let isMenu = $derived(size >= 1216 ? true : false);
	let activeSection = $state('início');
	let showHelpCenter = $state(false);

	const list = [
		{ name: 'início', href: '/', id: '' },
		{ name: 'Vantagens', href: '/#vantagens', id: 'vantagens' },
		{ name: 'Sobre nós', href: '/#aboutus', id: 'aboutus' },
		{ name: 'Planos', href: '/#planos', id: 'planos' },
		{ name: 'Suporte', href: '/#support', id: 'support' }
	];

	$effect(() => {
		if (size >= 1216 && isOpen) {
			isOpen = !isOpen;
		}
	});

	onMount(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + 150;

			// Se estiver no topo da página
			if (window.scrollY < 100) {
				activeSection = 'início';
				return;
			}

			// Verifica qual seção está visível
			for (const item of list) {
				if (item.id) {
					const element = document.getElementById(item.id);
					if (element) {
						const rect = element.getBoundingClientRect();
						const elementTop = window.scrollY + rect.top;
						const elementBottom = elementTop + element.offsetHeight;

						if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
							activeSection = item.name;
							return;
						}
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Chama imediatamente para definir a seção inicial

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function toggleHelpCenter() {
		showHelpCenter = !showHelpCenter;
		if (showHelpCenter) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}
</script>

{#snippet Modal()}
	<nav class="relative flex items-center justify-between gap-4">
		<img src={logo} alt="logo techfind" class="h-12 object-cover" />
		<ul class="flex list-none gap-4">
			{#each list as item}
				<li class="relative transition-colors duration-150">
					<a
						href={item.href}
						class="font-semibold no-underline {activeSection === item.name
							? 'text-principal-4'
							: 'hover:text-principal-4'}"
					>
						{item.name}
					</a>
					{#if activeSection === item.name}
						<div
							class="bg-principal-4 absolute -bottom-1 left-0 h-0.5 w-full rounded-full"
							transition:slide={{ axis: 'x', duration: 200 }}
						></div>
					{/if}
				</li>
			{/each}
		</ul>
		<div class="flex gap-4">
			<button
				type="button"
				onclick={toggleHelpCenter}
				class="hover:bg-principal-4 group flex items-center gap-2 rounded-xl border-2 border-principal-4 bg-transparent px-4 py-2 font-bold text-principal-4 transition-all duration-300 hover:text-white"
				aria-label="Abrir Central de Ajuda"
			>
				<HelpCircle size={20} />
				<span class="hidden lg:inline">Ajuda</span>
			</button>
			<Dialog />
		</div>
	</nav>
{/snippet}

{#snippet ModalMobile()}
	<Collapsible.Root class="w-full">
		<nav class="relative flex min-h-12 flex-col justify-center gap-8">
			<div class="flex w-full justify-between">
				<img src={logo} alt="logo techfind" class="h-8 object-cover" />
				<Collapsible.Trigger><AlignJustify /></Collapsible.Trigger>
			</div>
			<Collapsible.Content forceMount class="w-full">
				{#snippet child({ props, open })}
					{#if open}
						<div
							{...props}
							class="flex flex-wrap items-center justify-between gap-8"
							transition:slide={{ axis: 'y' }}
						>
							<ul class="flex w-full list-none flex-wrap justify-center gap-4 md:w-auto">
								{#each list as item}
									<li class="relative transition-colors duration-150">
										<a
											href={item.href}
											class="font-semibold no-underline {activeSection === item.name
												? 'text-principal-4'
												: 'hover:text-principal-4'}"
										>
											{item.name}
										</a>
										{#if activeSection === item.name}
											<div
												class="bg-principal-4 absolute -bottom-1 left-0 h-0.5 w-full rounded-full"
												transition:slide={{ axis: 'x', duration: 200 }}
											></div>
										{/if}
									</li>
								{/each}
							</ul>
							<div class="flex w-full flex-wrap justify-center gap-4 md:w-auto">
								<button
									type="button"
									onclick={toggleHelpCenter}
									class="hover:bg-principal-4 group flex items-center gap-2 rounded-xl border-2 border-principal-4 bg-transparent px-4 py-2 font-bold text-principal-4 transition-all duration-300 hover:text-white"
									aria-label="Abrir Central de Ajuda"
								>
									<HelpCircle size={20} />
									<span>Ajuda</span>
								</button>
								<Dialog />
							</div>
						</div>
					{/if}
				{/snippet}
			</Collapsible.Content>
		</nav>
	</Collapsible.Root>
{/snippet}

<header bind:clientWidth={size} class="bg-principal-1 sticky top-0 z-10 p-6 shadow-md">
	{#if isMenu}
		{@render Modal()}
	{:else}
		{@render ModalMobile()}
	{/if}
</header>

<!-- Modal da Central de Ajuda -->
{#if showHelpCenter}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<div
		class="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4 backdrop-blur-sm"
		transition:fade={{ duration: 200 }}
		onclick={(e) => {
			if (e.target === e.currentTarget) toggleHelpCenter();
		}}
		role="dialog"
		aria-modal="true"
		aria-labelledby="help-center-title"
		tabindex="-1"
	>
		<div
			class="relative my-8 w-full max-w-7xl rounded-2xl bg-white shadow-2xl"
			transition:fade={{ duration: 300, delay: 100 }}
		>
			<button
				type="button"
				onclick={toggleHelpCenter}
				class="hover:bg-principal-4 absolute right-4 top-4 z-10 rounded-full bg-gray-100 p-2 text-gray-600 transition-all duration-200 hover:text-white"
				aria-label="Fechar Central de Ajuda"
			>
				<X size={24} />
			</button>
			<HelpCenter />
		</div>
	</div>
{/if}
