<script lang="ts">
	import { Button } from 'bits-ui';
	// import { chatHistory, addMessage } from '$lib/stores/chatStore';
	// import { useChat } from '@ai-sdk/svelte';
	// import type { Message } from 'ai';
	import CardProfile from '../../components/CardProfile.svelte';
	import { ChevronLeft } from '@lucide/svelte';
	// import type { ActionData } from './$types';

	let { form } = $props();

	// const { messages } = useChat({
	// 	initialInput: text,
	// 	initialMessages: $chatHistory,
	// 	onFinish: (message: Message) => {
	// 		addMessage(message);
	// 	}
	// });

	// async function handleUserSubmit(event: Event) {
	// 	event.preventDefault();
	// 	if ($input.trim() === '') return;
	// 	addMessage({ id: crypto.randomUUID(), role: 'user', content: $input });
	// 	try {
	// 		handleSubmit(event);
	// 	} catch (err) {
	// 		console.error('Error sending message:', err);
	// 	}
	// }

	// $effect(() => console.log(form));
</script>

<Button.Root
	href="../"
	class="bg-principal-1 hover:bg-principal-4 mt-4 ml-4 inline-block rounded-full border-2 border-black shadow hover:border-black/80"
>
	<ChevronLeft class="size-10 stroke-1 hover:stroke-black/80" />
</Button.Root>

<div class="flex h-[50rem] w-full flex-col justify-center gap-8 p-4 lg:flex-row">
	<main class="border-principal-4 basis-full rounded-xl border-2 p-8 shadow-xl lg:basis-1/3">
		<h1 class="text-3xl font-bold">Resposta da IA</h1>
		<!-- <form on:submit|preventDefault={handleUserSubmit}> -->
		<!-- 	<textarea bind:value={$input} placeholder="Ask something..."></textarea> -->
		<!-- 	<button type="submit">Submit</button> -->
		<!-- </form> -->
		<div>
			<h2 class="text-md font-medium md:text-xl">Dados do formulário:</h2>
			<p><span class="text-md font-semibold md:text-lg">Segmentacao</span>: {form?.segment}</p>
			<p><span class="text-md font-semibold md:text-lg">Produto</span>: {form?.product}</p>
			<p>
				<span class="text-md font-semibold md:text-lg">Regmime de Contrato</span>: {form?.contract_regime}
			</p>
			<p>
				<span class="text-md font-semibold md:text-lg">Regmime de Trabalho</span>: {form?.work_regime}
			</p>
			<p>
				<span class="text-md text-lg font-semibold">Data de início</span>: {form?.start_date
					.split('-')
					.reverse()
					.join('/')}
			</p>
			<p><span class="text-lg font-semibold">Detalhes do Cliente</span>: {form?.client_message}</p>
			<!-- <p>Baseado no formulário apresentado, essas são as melhores características:</p> -->
			<!-- <p>{form?.resposta}</p> -->
			<!-- {#each $messages as message (message.id)} -->
			<!-- 	{#if message.role !== 'user'} -->
			<!-- 		<p class="text-md prose">{message.content}</p> -->
			<!-- 	{:else} -->
			<!-- 		<p class="text-md">{message.content}</p> -->
			<!-- 	{/if} -->
			<!-- {/each} -->
		</div>
	</main>
	<CardProfile></CardProfile>
</div>

<style>
	.princ {
		height: 100%;
	}
	@media (min-width: 1024px) {
		.princ {
			height: calc(100svh - 8rem);
		}
	}
</style>
