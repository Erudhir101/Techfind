<script lang="ts">
	//TODO: fazer o formulario
	import { Dialog, Label } from 'bits-ui';
	import { X } from '@lucide/svelte';
	import { Tween } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	let data = $props();

	let password = $state('');
	let strength = $derived(checkPasswordStrength());

	let progress = Tween.of(() => strength, {
		duration: 400,
		easing: cubicOut
	});
	function stringPassword() {
		if (strength * 10 === 2) return 'senha fraca';
		if (strength * 10 === 4) return 'senha media';
		if (Math.floor(strength * 10) === 6 || strength * 10 === 8) return 'senha forte';
		if (strength === 1) return 'senha muito forte';
		return '';
	}

	function checkPasswordStrength(): number {
		let sum: number = 0;
		sum += password.length >= 8 ? 0.2 : 0;
		sum += /[A-Z]/.test(password) ? 0.2 : 0;
		sum += /[a-z]/.test(password) ? 0.2 : 0;
		sum += /[0-9]/.test(password) ? 0.2 : 0;
		sum += /[^A-Za-z0-9]/.test(password) ? 0.2 : 0;
		return sum;
	}
</script>

{#snippet login()}
	<form method="post" action="?/login">
		<div class="flex flex-col items-start gap-1 py-4">
			<Label.Root for="email" class="text-sm font-medium">Email, CPF ou CNPJ:</Label.Root>
			<div class="relative w-full">
				<input
					type="email"
					name="email"
					class="h-10 rounded-sm bg-principal-1 line focus:outline-hidden inline-flex w-full items-center border border-zinc-300 px-4 text-base focus:ring-2 focus:ring-offset-2 sm:text-sm"
				/>
			</div>
		</div>
		<div class="flex flex-col items-start gap-1 py-4 mb-8">
			<Label.Root for="password" class="text-sm font-medium">Senha</Label.Root>
			<div class="relative w-full">
				<input
					type="password"
					name="password"
					class="h-10 rounded-sm bg-principal-1 focus:outline-hidden inline-flex w-full items-center border px-4 border-zinc-300 text-base focus:ring-2 focus:ring-offset-2 sm:text-sm"
				/>
			</div>
		</div>
		<div class="flex w-full justify-center">
			<button
				class="h-10 rounded-lg bg-principal-5 text-black shadow-sm hover:bg-principal-3 transition-colors duration-300 inline-flex items-center justify-center px-12 font-semibold active:scale-[0.95]"
			>
				Entrar
			</button>
		</div>
	</form>
{/snippet}

{#snippet cadastro()}
	<form method="post" action="?/signup">
		<div class="flex flex-col items-start gap-1 py-4">
			<Label.Root for="name" class="text-sm font-medium">Nome Completo:</Label.Root>
			<div class="relative w-full">
				<input
					type="text"
					name="name"
					class="h-10 rounded-sm bg-principal-1 placeholder:text-foreground-alt/50 border-zinc-300 focus:outline-hidden inline-flex w-full items-center border px-4 text-base focus:ring-2 focus:ring-offset-2 sm:text-sm"
				/>
			</div>
		</div>
		<div class="flex flex-col items-start gap-1 py-4">
			<Label.Root for="date" class="text-sm font-medium">Data de Nascimento:</Label.Root>
			<div class="relative w-full">
				<input
					type="date"
					min={new Date().toISOString().split('T')[0]}
					name="date"
					class="h-10 rounded-sm bg-principal-1 placeholder:text-foreground-alt/50 border-zinc-300 focus:outline-hidden inline-flex w-full items-center border px-4 text-base focus:ring-2 focus:ring-offset-2 sm:text-sm"
				/>
			</div>
		</div>
		<div class="flex flex-col items-start gap-1 py-4">
			<Label.Root for="cpf" class="text-sm font-medium">CPF:</Label.Root>
			<div class="relative w-full">
				<input
					type="text"
					placeholder="000.000.000-00"
					name="cpf"
					class="h-10 rounded-sm bg-principal-1 placeholder:text-foreground-alt/50 border-zinc-300 focus:outline-hidden inline-flex w-full items-center border px-4 text-base focus:ring-2 focus:ring-offset-2 sm:text-sm"
				/>
			</div>
		</div>
		<div class="flex flex-col items-start gap-1 py-4">
			<Label.Root for="phone" class="text-sm font-medium">Telefone:</Label.Root>
			<div class="relative w-full">
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
			<div class="relative w-full">
				<input
					type="email"
					name="email"
					class="h-10 rounded-sm bg-principal-1 placeholder:text-foreground-alt/50 border-zinc-300 focus:outline-hidden inline-flex w-full items-center border px-4 text-base focus:ring-2 focus:ring-offset-2 sm:text-sm"
				/>
			</div>
		</div>
		<div class="flex flex-col items-start gap-1 py-4">
			<Label.Root for="password" class="text-sm font-medium">Senha:</Label.Root>
			<div class="relative w-full">
				<input
					bind:value={password}
					type="password"
					name="password"
					class="h-10 rounded-sm bg-principal-1 placeholder:text-foreground-alt/50 border-zinc-300 focus:outline-hidden inline-flex w-full items-center border px-4 text-base focus:ring-2 focus:ring-offset-2 sm:text-sm"
				/>
				<progress class="progress rounded-lg mt-2" value={progress.current}></progress>
				<span class="text-principal-6 font-semibold">{stringPassword()}</span>
			</div>
		</div>
		<div class="flex w-full justify-center">
			<button
				type="submit"
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
		{data.title}
	</Dialog.Trigger>
	<Dialog.Portal>
		<Dialog.Overlay class="fixed inset-0 z-50 bg-black/80" />
		<Dialog.Content
			class="rounded-lg bg-principal-1 shadow-sm outline-hidden fixed left-[50%] top-[50%] z-50 w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] border p-5 sm:max-w-[490px] md:w-full"
		>
			<Dialog.Title
				class="flex w-full items-center justify-center text-2xl font-bold tracking-tight "
			>
				{data.title}
			</Dialog.Title>
			{#if data.tp === 'login'}
				{@render login()}
			{:else}
				{@render cadastro()}
			{/if}
			<Dialog.Close
				class="focus-visible:ring-foreground focus-visible:ring-offset-background focus-visible:outline-hidden absolute right-5 top-5 rounded-md focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98]"
			>
				<div>
					<X class="text-black size-6 hover:text-principal-4" />
					<span class="sr-only">Close</span>
				</div>
			</Dialog.Close>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>

<style>
	.progress::-webkit-progress-bar {
		background-color: #f3f3f3; /* Background color */
	}

	.progress::-webkit-progress-value,
	.progress::-moz-progress-bar {
		background-color: var(--color-principal-4);
	}
</style>
