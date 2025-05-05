<script lang="ts">
	import { enhance } from '$app/forms';
	import {
		CircleUserRound,
		X,
		Send,
		Search,
		Check,
		ChevronsDown,
		ChevronsUpDown,
		Citrus,
		ChevronsUp
	} from '@lucide/svelte';
	import { Dialog, Button, Label, Combobox } from 'bits-ui';

	let label = 'text-sm font-semibold';
	let div = 'flex h-full w-full flex-col gap-2';

	let regimeContratacao = ['frelancer', 'clt'];
	let regimeTrabalho = ['presencial', 'home office', 'híbrido'];
</script>

{#snippet combobox(list)}
	<Combobox.Root
		type="single"
		name="favoriteFruit"
		onOpenChange={(o) => {
			if (!o) searchValue = '';
		}}
	>
		<div class="relative">
			<Combobox.Input
				disabled
				oninput={(e) => (searchValue = e.currentTarget.value)}
				class="bg-principal-1 inline-flex h-10 w-full items-center rounded-sm border border-zinc-500 px-4 text-sm focus:ring-2 focus:ring-offset-2 focus:outline-hidden sm:text-lg"
				placeholder="Escolha um regime"
				aria-label="Escolha um regime"
			/>
			<Combobox.Trigger class="absolute top-0 left-0 size-6 h-full w-full">
				<ChevronsUpDown class="absolute top-0 right-1 size-6 h-full text-black" />
			</Combobox.Trigger>
		</div>
		<Combobox.Portal>
			<Combobox.Content
				class="z-50 max-h-[var(--bits-combobox-content-available-height)] w-[var(--bits-combobox-anchor-width)] rounded-xl border border-black bg-white px-1 py-3 shadow outline-hidden select-none data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1"
				sideOffset={10}
			>
				<Combobox.ScrollUpButton class="flex w-full items-center justify-center py-1">
					<ChevronsUp class="size-5" />
				</Combobox.ScrollUpButton>
				<Combobox.Viewport class="p-1">
					{#each list as item (item)}
						<Combobox.Item
							class="flex h-10 w-full items-center rounded-md py-3 pr-1.5 pl-5 text-sm font-semibold capitalize outline-hidden select-none hover:bg-black/20"
							value={item}
							label={item}
						>
							{#snippet children({ selected })}
								{item}
								{#if selected}
									<div class="ml-auto">
										<Check class="text-principal-4" />
									</div>
								{/if}
							{/snippet}
						</Combobox.Item>
					{:else}
						<span class="block px-5 py-2 text-sm text-muted-foreground">
							No results found, try again.
						</span>
					{/each}
				</Combobox.Viewport>
				<Combobox.ScrollDownButton class="flex w-full items-center justify-center py-1">
					<ChevronsDown class="size-5" />
				</Combobox.ScrollDownButton>
			</Combobox.Content>
		</Combobox.Portal>
	</Combobox.Root>
{/snippet}

<Dialog.Root>
	<Dialog.Trigger
		class="bg-principal-5 hover:bg-principal-3 inline-flex flex-wrap items-center justify-center gap-2 self-center rounded-lg p-4 font-semibold whitespace-nowrap shadow-sm transition-colors duration-300 active:scale-[0.95] sm:gap-4"
	>
		<Search /> Realizar pesquisa
	</Dialog.Trigger>
	<Dialog.Portal>
		<Dialog.Overlay class="fixed inset-0 z-50 bg-black/80" />
		<Dialog.Content
			class="bg-principal-1 fixed top-[50%] left-[50%] z-50 flex w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] flex-col gap-8 rounded-lg border p-5 shadow-sm outline-hidden sm:max-w-[490px] md:w-full"
		>
			<Dialog.Title class="flex w-full items-center justify-center tracking-tight">
				<div class="flex flex-col items-center justify-between">
					<h3 class="text-2xl font-bold">Formulário de pesquisa</h3>
				</div>
			</Dialog.Title>

			<form
				method="POST"
				action="?/pesquisar"
				class="flex flex-col items-center justify-center gap-4"
			>
				<div class={div}>
					<Label.Root for="segmentacao" class={label}>Segmentação do Negócio:</Label.Root>
					<input
						type="text"
						id="segmentacao"
						placeholder="segmentação do projeto"
						class="bg-principal-1 inline-flex h-10 w-full items-center rounded-sm border border-zinc-500 px-4 text-sm focus:ring-2 focus:ring-offset-2 focus:outline-hidden sm:text-lg"
					/>
				</div>
				<div class={div}>
					<Label.Root for="tipoProduto" class={label}>Tipo produto/serviço:</Label.Root>
					<input
						type="text"
						id="tipoProduto"
						placeholder="Digite o produto ou serviço"
						class="bg-principal-1 inline-flex h-10 w-full items-center rounded-sm border border-zinc-500 px-4 text-sm focus:ring-2 focus:ring-offset-2 focus:outline-hidden sm:text-lg"
					/>
				</div>
				<div class={div}>
					<Label.Root for="regimeContratacao" class={label}>Regime de Contratação:</Label.Root>
					{@render combobox(regimeContratacao)}
				</div>
				<div class={div}>
					<Label.Root for="regimeTrabalho" class={label}>Regime de Trabalho:</Label.Root>
					{@render combobox(regimeTrabalho)}
				</div>
				<div class={div}>
					<Label.Root for="date" class={label}>Data para pesquisa:</Label.Root>
					<div class="w-full">
						<input
							type="date"
							max={new Date().toISOString().split('T')[0]}
							name="date"
							class="bg-principal-1 inline-flex h-10 w-full items-center rounded-sm border border-zinc-500 px-4 text-sm focus:ring-2 focus:ring-offset-2 focus:outline-hidden sm:text-lg"
						/>
					</div>
				</div>
				<div class={div}>
					<Label.Root for="descricao" class={label}>Área de Descrição:</Label.Root>
					<textarea
						id="descricao"
						placeholder="Descreva o seu projeto..."
						class="bg-principal-1 inline-flex h-20 w-full items-center rounded-sm border border-zinc-500 px-4 text-sm focus:ring-2 focus:ring-offset-2 focus:outline-hidden sm:text-lg"
					>
					</textarea>
				</div>
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
