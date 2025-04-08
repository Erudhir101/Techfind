<script lang="ts">
	import logo from '$lib/images/logolaran.svg';
	import { slide } from 'svelte/transition';
	import { AlignJustify } from '@lucide/svelte';
	import { Collapsible, Button } from 'bits-ui';
	import { goto } from '$app/navigation';

	let { data, children } = $props();
	let { supabase, session } = $derived(data);

	let size = $state(0);
	let isOpen = $state(false);
	let isMenu = $derived(size >= 1216 ? true : false);

	const list = [{}];

	$effect(() => {
		if (size >= 1216 && isOpen) {
			isOpen = !isOpen;
		}
	});

	const logout = async () => {
		if (session) {
			const { error } = await supabase.auth.signOut();
			if (error) console.log(error);
			goto('/');
		}
	};
</script>

{#snippet Modal()}
	<nav class="relative flex gap-4 items-center justify-between">
		<img src={logo} alt="logo techfind" class="h-12 object-cover" />
		<ul class="flex gap-4 list-none">
			{#each list as item}
				<li class="hover:text-principal-4 transition-colors duration-150">
					<a href={item.href} class="no-underline font-semibold">{item.name}</a>
				</li>
			{/each}
		</ul>
		<div class="flex gap-4">
			<Button.Root
				onclick={logout}
				class="font-medium text-xl bg-principal-4 hover:bg-principal-3 px-4 py-2 rounded-lg shadow-md transition-colors duration-300"
				>Sair</Button.Root
			>
		</div>
	</nav>
{/snippet}

{#snippet ModalMobile()}
	<Collapsible.Root class="w-full">
		<nav class="min-h-12 relative gap-8 flex flex-col justify-center">
			<div class="w-full flex justify-between">
				<img src={logo} alt="logo techfind" class="h-8 object-cover" />
				<Collapsible.Trigger><AlignJustify /></Collapsible.Trigger>
			</div>
			<Collapsible.Content forceMount class="w-full">
				{#snippet child({ props, open })}
					{#if open}
						<div
							{...props}
							class="flex justify-between gap-8 items-center flex-wrap"
							transition:slide={{ axis: 'y' }}
						>
							<ul class="flex flex-wrap justify-center w-full md:w-auto gap-4 list-none">
								{#each list as item}
									<li class="hover:text-principal-4 transition-colors duration-150">
										<a href={item.href} class="no-underline font-semibold">{item.name}</a>
									</li>
								{/each}
							</ul>
							<div class="flex flex-wrap w-full md:w-auto justify-center gap-4">
								<Button.Root
									onclick={logout}
									class="font-medium text-xl bg-principal-4 hover:bg-principal-3 px-4 py-2 rounded-lg shadow-md transition-colors duration-300"
									>Sair</Button.Root
								>
							</div>
						</div>
					{/if}
				{/snippet}
			</Collapsible.Content>
		</nav>
	</Collapsible.Root>
{/snippet}

<header bind:clientWidth={size} class="p-6 sticky top-0 z-10 bg-principal-1 shadow-md">
	{#if isMenu}
		{@render Modal()}
	{:else}
		{@render ModalMobile()}
	{/if}
</header>
{@render children()}
