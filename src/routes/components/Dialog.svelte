<script lang="ts">
	import { Dialog, Meter, Label, RadioGroup } from 'bits-ui';
	import { X } from '@lucide/svelte';
	import { page } from '$app/stores';
	import { superForm } from 'sveltekit-superforms';
	import { fly } from 'svelte/transition';

	let { title, tp } = $props();

	const { errors: signupErrors, enhance: signupEnhance } = superForm($page.data.formSignup);
	const { errors: loginErrors, enhance: loginEnhance } = superForm($page.data.formLogin);

	$inspect($signupErrors);

	let isCPF = $state('CPF');
	let placeholdCPF = $derived(isCPF === 'CPF' ? '000.000.000-00' : '00.000.000/0000-00');

	let password = $state('');
	let strength = $derived(checkPasswordStrength() * 100);

	const colorName = $derived.by(() => {
		if (strength <= 20) return 'text-red-500 dark:text-red-400';
		if (strength <= 40) return 'text-orange-500 dark:text-orange-400';
		if (strength <= 60) return 'text-yellow-500 dark:text-yellow-400';
		return 'text-green-500 dark:text-green-400';
	});

	const colorMeter = $derived.by(() => {
		if (strength <= 20) return 'bg-red-500 dark:bg-red-400';
		if (strength <= 40) return 'bg-orange-500 dark:bg-orange-400';
		if (strength <= 60) return 'bg-yellow-500 dark:bg-yellow-400';
		return 'bg-green-500 dark:bg-green-400';
	});

	function stringPassword() {
		if (strength === 20) return 'senha fraca';
		if (strength === 40) return 'senha media';
		if (Math.floor(strength) === 60 || strength === 80) return 'senha forte';
		if (strength === 100) return 'senha muito forte';
		return '';
	}

	function checkPasswordStrength(): number {
		let sum: number = 0;
		sum += password.length >= 8 ? 0.2 : 0;
		sum += /[A-Z]/.test(password) ? 0.2 : 0;
		sum += /[a-z]/.test(password) ? 0.2 : 0;
		sum += /[0-9]/.test(password) ? 0.2 : 0;
		sum += /[^A-Za-z0-9]/.test(password) ? 0.2 : 0;
		if (password.length >= 15) return 1;
		return sum;
	}
</script>

{#snippet login()}
	<form method="post" action="?/login" use:loginEnhance>
		<div class="flex flex-col items-start gap-1 py-4">
			<Label.Root for="email" class="text-sm font-medium">Email:</Label.Root>
			<div class="w-full">
				<input
					type="email"
					name="email"
					aria-invalid={$loginErrors.email ? 'true' : undefined}
					class="h-10 rounded-sm bg-principal-1 line focus:outline-hidden inline-flex w-full items-center border border-zinc-300 px-4 text-base focus:ring-2 focus:ring-offset-2 sm:text-sm"
				/>
			</div>
			{#if $loginErrors.email}<span class="text-red-500 font-bold mt-1 pl-2"
					>{$loginErrors.email}</span
				>{/if}
		</div>
		<div class="flex flex-col items-start gap-1 py-4 mb-8">
			<Label.Root for="password" class="text-sm font-medium">Senha:</Label.Root>
			<div class="w-full">
				<input
					type="password"
					name="password"
					aria-invalid={$loginErrors.password ? 'true' : undefined}
					class="h-10 rounded-sm bg-principal-1 focus:outline-hidden inline-flex w-full items-center border px-4 border-zinc-300 text-base focus:ring-2 focus:ring-offset-2 sm:text-sm"
				/>
			</div>
			{#if $loginErrors.password}<span class="text-red-500 font-bold mt-1 pl-2"
					>{$loginErrors.password}</span
				>{/if}
		</div>
		<div class="flex flex-col gap-4 w-full items-center">
			<button
				class="mb-4 h-10 w-2/3 rounded-lg bg-principal-5 text-black shadow-sm hover:bg-principal-3 transition-colors duration-300 inline-flex items-center justify-center px-12 py-6 font-semibold active:scale-[0.95]"
			>
				Entrar
			</button>
			{#if $loginErrors._errors && !($loginErrors.password || $loginErrors.email)}
				<span class="text-red-500 font-bold" in:fly={{ x: 200, duration: 1000 }}>
					{$loginErrors._errors}
				</span>
			{/if}
		</div>
	</form>
{/snippet}

{#snippet cadastro()}
	<form method="post" action="?/signup" use:signupEnhance>
		<div class="flex flex-col items-start gap-1 py-4">
			<Label.Root for="name" class="text-sm font-medium">Nome Completo:</Label.Root>
			<div class="w-full">
				<input
					type="text"
					name="name"
					class="h-10 rounded-sm bg-principal-1 placeholder:text-foreground-alt/50 border-zinc-300 focus:outline-hidden inline-flex w-full items-center border px-4 text-base focus:ring-2 focus:ring-offset-2 sm:text-sm"
				/>
			</div>
		</div>
		<div class="flex flex-col items-start gap-1 py-4">
			<Label.Root for="date" class="text-sm font-medium">Data para o trabalho:</Label.Root>
			<div class="w-full">
				<input
					type="date"
					min={new Date().toISOString().split('T')[0]}
					name="date"
					class="h-10 rounded-sm bg-principal-1 placeholder:text-foreground-alt/50 border-zinc-300 focus:outline-hidden inline-flex w-full items-center border px-4 text-base focus:ring-2 focus:ring-offset-2 sm:text-sm"
				/>
			</div>
		</div>
		<div class="flex flex-col items-start gap-2 py-4">
			<Label.Root for="typePersonal" class="w-1/2 text-sm font-medium text-black"
				><RadioGroup.Root
					name="radio"
					bind:value={isCPF}
					class="flex flex-wrap flex-1 gap-4 justify-between text-sm font-medium"
				>
					{#each ['CPF', 'CNPJ'] as itens (itens)}
						<div class="flex items-center gap-4">
							<RadioGroup.Item
								id={itens}
								value={itens}
								class="hover:border-black/40 data-[state=checked]:border-6 data-[state=checked]:border-principal-3 size-6 shrink-0 cursor-default rounded-full border-2 border-black transition-all duration-100 ease-in-out"
							></RadioGroup.Item><Label.Root for={itens} class="">{itens}</Label.Root>
						</div>
					{/each}
				</RadioGroup.Root></Label.Root
			>
			<div class="w-full">
				<input
					type="text"
					placeholder={placeholdCPF}
					name="typePersonal"
					class="h-10 rounded-sm bg-principal-1 placeholder:text-foreground-alt/50 border-zinc-300 focus:outline-hidden inline-flex w-full items-center border px-4 text-base focus:ring-2 focus:ring-offset-2 sm:text-sm"
				/>
			</div>
		</div>
		<div class="flex flex-col items-start gap-1 py-4">
			<Label.Root for="phone" class="text-sm font-medium">Telefone:</Label.Root>
			<div class="w-full">
				<input
					type="text"
					name="phone"
					placeholder="(00)00000-0000"
					class="h-10 rounded-sm bg-principal-1 placeholder:text-foreground-alt/50 border-zinc-300 focus:outline-hidden inline-flex w-full items-center border px-4 text-base focus:ring-2 focus:ring-offset-2 sm:text-sm"
				/>
			</div>
		</div>
		<div class="flex flex-col items-start gap-1 py-4">
			<Label.Root for="email" class="text-sm font-medium">Email:</Label.Root>
			<div class="w-full">
				<input
					type="email"
					name="email"
					class="h-10 rounded-sm bg-principal-1 placeholder:text-foreground-alt/50 border-zinc-300 focus:outline-hidden inline-flex w-full items-center border px-4 text-base focus:ring-2 focus:ring-offset-2 sm:text-sm"
				/>
			</div>
		</div>
		<div class="flex flex-col items-start gap-1 py-4">
			<Label.Root for="password" class="text-sm font-medium">Senha:</Label.Root>
			<div class="w-full flex flex-col gap-4">
				<input
					bind:value={password}
					type="password"
					name="password"
					class="h-10 rounded-sm bg-principal-1 placeholder:text-foreground-alt/50 border-zinc-300 focus:outline-hidden inline-flex w-full items-center border px-4 text-base focus:ring-2 focus:ring-offset-2 sm:text-sm"
				/>
				<div class="flex w-[60%] flex-col">
					<Meter.Root
						aria-valuetext="password strength {strength}% - {stringPassword()}"
						value={strength}
						min={0}
						max={100}
						class="bg-dark-10 shadow-mini-inset relative h-[15px] overflow-hidden rounded-full"
					>
						<div
							class="shadow-mini-inset h-full w-full flex-1 rounded-full transition-all duration-1000 ease-in-out {colorMeter}"
							style="transform: translateX(-{100 - (100 * (strength ?? 0)) / 100}%)"
						></div>
					</Meter.Root>
					<span class="font-bold transition-all duration-1000 ease-in-out {colorName}"
						>{stringPassword()}</span
					>
				</div>
			</div>
		</div>
		<div class="flex w-full justify-center">
			<button
				class="h-10 rounded-lg bg-principal-5 text-black shadow-sm hover:bg-principal-3 transition-colors duration-300 inline-flex items-center justify-center px-12 font-semibold active:scale-[0.95]"
			>
				Cadastrar
			</button>
		</div>
	</form>
{/snippet}

<Dialog.Root>
	<Dialog.Trigger
		class="rounded-lg bg-principal-5 hover:bg-principal-3 text-black shadow-sm inline-flex h-12 items-center justify-center whitespace-nowrap px-[21px] text-[15px] font-semibold transition-colors duration-300 active:scale-[0.95]"
	>
		{title}
	</Dialog.Trigger>
	<Dialog.Portal>
		<Dialog.Overlay class="fixed inset-0 z-50 bg-black/80" />
		<Dialog.Content
			class="rounded-lg bg-principal-1 shadow-sm outline-hidden fixed left-[50%] top-[50%] z-50 w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] border p-5 sm:max-w-[490px] md:w-full"
		>
			<Dialog.Title
				class="flex w-full items-center justify-center text-2xl font-bold tracking-tight "
			>
				{title}
			</Dialog.Title>
			{#if tp === 'login'}
				{@render login()}
			{:else}
				{@render cadastro()}
			{/if}
			<Dialog.Close
				class="focus-visible:ring-foreground focus-visible:ring-offset-background focus-visible:outline-hidden absolute right-5 top-5 rounded-md focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98]"
			>
				<X class="text-black size-6 hover:text-principal-4" />
			</Dialog.Close>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
