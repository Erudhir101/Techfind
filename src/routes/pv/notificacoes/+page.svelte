<script>
	import { AlertDialog, Button, Dialog, ScrollArea } from 'bits-ui';
	import { ChevronLeft, NotebookText, X } from '@lucide/svelte';
	import Contract from '../../components/Contract.svelte';

	let { data } = $props();
	let { notConts, profile } = $derived(data);
	$inspect(profile);
</script>

<Button.Root
	href="../"
	class="bg-principal-1 hover:bg-principal-4 mt-4 ml-4 inline-block rounded-full border-2 border-black shadow hover:border-black/80"
>
	<ChevronLeft class="size-10 stroke-1 hover:stroke-black/80" />
</Button.Root>

<div class="mt-16 flex w-full flex-col items-center justify-center gap-8">
	<h2 class="text-2xl font-bold">NOTIFICAÇÕES DE CONTRATOS</h2>
	<div class="mb-15 flex flex-col gap-10">
		{#each notConts as notCont (notCont.id)}
			<Dialog.Root>
				<Dialog.Trigger
					class="bg-principal-2 hover:bg-principal-3 inline-flex items-center justify-between gap-2 rounded-lg px-5 py-5 font-semibold whitespace-nowrap text-black shadow-sm transition-colors duration-300 active:scale-[0.95]"
				>
					<NotebookText strokeWidth={2} />
					<div class="overflow-hidden font-medium italic">
						"{notCont.id}"
					</div>
					<div class="text-principal-5">
						{new Date(notCont.created_at).toLocaleString('pt-BR')}
					</div>
				</Dialog.Trigger>
				<Dialog.Portal>
					<Dialog.Overlay class="fixed inset-0 z-50 bg-black/80" />
					<Dialog.Content
						class="bg-principal-1 fixed top-[50%] left-[50%] z-50 w-2/3 translate-x-[-50%] translate-y-[-50%] rounded-lg border p-5 shadow-sm outline-hidden"
					>
						<Dialog.Title
							class="flex w-full items-center justify-center text-2xl font-bold tracking-tight "
						>
							Notificação
						</Dialog.Title>
						<ScrollArea.Root class="overflow-hidden">
							<ScrollArea.Viewport class="flex h-full max-h-[50rem] flex-col">
								<Contract contract={notCont.contract} />
								<div class="flex w-full items-center justify-center">
									<AlertDialog.Root>
										<AlertDialog.Trigger
											class="bg-principal-4 hover:bg-principal-4/80 inline-flex h-12 items-center justify-center rounded-lg px-[21px] text-[15px] font-semibold whitespace-nowrap text-black shadow-sm transition-all select-none active:scale-[0.98]"
										>
											Assinar o Contrato
										</AlertDialog.Trigger>
										<AlertDialog.Portal>
											<AlertDialog.Overlay class="fixed inset-0 z-50 bg-black/80" />
											<AlertDialog.Content
												class="fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-zinc-900 p-7 shadow-md outline-hidden sm:max-w-lg md:w-full "
											>
												<div class="flex flex-col gap-4 pb-6">
													<AlertDialog.Title
														class="text-lg font-semibold tracking-tight text-white/95"
													>
														Confirme a sua Assinatura
													</AlertDialog.Title>
													<AlertDialog.Description class="text-sm text-white/95">
														Esse é uma assinatura de um projeto feito pelo <span
															class="text-principal-2 font-bold"
															>{notCont.contract.creator.name}</span
														>.{' '}Caso aceite deverá cumprir o contrato mostrado anteriormente.
														<span class="text-principal-2 font-bold">
															Gostaria de aceitar o contrato?</span
														>
													</AlertDialog.Description>
												</div>
												<form method="POST" action="?/assinar">
													<input type="hidden" name="contract" value={notCont.id_contract} />
													<input type="hidden" name="contratado" value={notCont.id_contratado} />
													<input type="hidden" name="notification" value={notCont.id} />
													<div class="flex w-full items-center justify-center gap-2">
														<AlertDialog.Cancel
															class="inline-flex w-full items-center justify-center rounded-sm bg-white/95 px-2.5 py-2.5 text-[15px] font-medium shadow-sm transition-all hover:bg-white/80 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden active:scale-[0.98]"
														>
															Cancelar
														</AlertDialog.Cancel>
														<AlertDialog.Action
															type="submit"
															class="bg-principal-4 hover:bg-principal-3 inline-flex h-10 w-full items-center justify-center rounded-sm px-2.5 py-2.5 text-[15px] font-semibold text-black shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden active:scale-[0.98]"
														>
															Aceitar
														</AlertDialog.Action>
													</div>
												</form>
											</AlertDialog.Content>
										</AlertDialog.Portal>
									</AlertDialog.Root>
								</div>
							</ScrollArea.Viewport>
							<ScrollArea.Scrollbar
								orientation="vertical"
								class="bg-princical-2 flex w-2.5 touch-none rounded-full border-l border-l-transparent p-px transition-all duration-200 select-none hover:w-3"
							>
								<ScrollArea.Thumb class="bg-principal-4 flex-1 rounded-full" />
							</ScrollArea.Scrollbar>
							<ScrollArea.Scrollbar
								orientation="horizontal"
								class="bg-principal-2 flex w-2.5 touch-none rounded-full border-l border-l-transparent p-px transition-all duration-200 select-none hover:w-3"
							>
								<ScrollArea.Thumb class="bg-principal-4 flex-1 rounded-full" />
							</ScrollArea.Scrollbar>
							<ScrollArea.Corner />
						</ScrollArea.Root>
						<Dialog.Close
							class="focus-visible:ring-foreground focus-visible:ring-offset-background absolute top-5 right-5 rounded-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden active:scale-[0.98]"
						>
							<X class="hover:text-principal-4 size-6 text-black" />
						</Dialog.Close>
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>
		{/each}
	</div>
</div>
