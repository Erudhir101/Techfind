<script lang="ts">
	import { enhance } from '$app/forms';
	import { CircleUserRound, X, Send, Search } from '@lucide/svelte';
	import { Dialog, Button, Label } from 'bits-ui';
</script>

<Dialog.Root>
	<Dialog.Trigger
		class="bg-principal-5 hover:bg-principal-3 inline-flex flex-wrap items-center justify-center gap-2 self-center rounded-lg p-4 font-semibold whitespace-nowrap shadow-sm transition-colors duration-300 active:scale-[0.95] sm:gap-4"
	>
		<Search /> Pesquisar novamente
	</Dialog.Trigger>
	<Dialog.Portal>
		<Dialog.Overlay class="fixed inset-0 z-50 bg-black/80" />
		<Dialog.Content
			class="bg-principal-1 fixed top-[50%] left-[50%] z-50 flex w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] flex-col gap-8 rounded-lg border p-5 shadow-sm outline-hidden sm:max-w-[490px] md:w-full"
		>
			<Dialog.Title class="flex w-full items-center justify-center tracking-tight">
				<div class="flex flex-col items-center justify-between">
					<h3 class="text-2xl font-bold">Pesquisar</h3>
				</div>
			</Dialog.Title>

			<form
				method="POST"
				action="?/pesquisar"
				class="flex flex-col items-center justify-center gap-16"
			>
				<Label.Root for="descricao" class="text-sm font-medium"></Label.Root>
				<textarea
					id="descricao"
					placeholder="Descreva o seu projeto..."
					class="placeholder:text-principal-4 h-full w-full border-2 border-black"
				>
				</textarea>
				<Button.Root
					class="bg-principal-5 hover:bg-principal-3 inline-flex flex-wrap items-center justify-center gap-2 self-center rounded-lg p-4 font-semibold whitespace-nowrap shadow-sm transition-colors duration-300 active:scale-[0.95] sm:gap-4"
					>Pesquisar</Button.Root
				>
			</form>
			<Dialog.Close
				class="focus-visible:ring-foreground focus-visible:ring-offset-background absolute top-5 right-5 rounded-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden active:scale-[0.98]"
			>
				<X class="hover:text-principal-4 size-6 text-black" />
			</Dialog.Close>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
