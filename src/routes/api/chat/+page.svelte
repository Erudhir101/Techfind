<script lang="ts">
	// import { chatHistory, addMessage } from '$lib/stores/chatStore';
	// import { useChat } from '@ai-sdk/svelte';
	// import type { Message } from 'ai';
	import CardProfile from '../../components/CardProfile.svelte';
	import Header from '../../components/Header.svelte';
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

<Header />
<div class="princ flex justify-center w-full p-4 gap-8 flex-col lg:flex-row">
	<main class="basis-full lg:basis-1/3 p-8 border-2 border-principal-4 shadow-xl rounded-xl">
		<h1 class="font-bold text-3xl">Resposta da IA</h1>
		<!-- <form on:submit|preventDefault={handleUserSubmit}> -->
		<!-- 	<textarea bind:value={$input} placeholder="Ask something..."></textarea> -->
		<!-- 	<button type="submit">Submit</button> -->
		<!-- </form> -->
		<div>
			<h2 class="font-medium text-md md:text-xl">Dados do formulário:</h2>
			<p><span class="font-semibold text-md md:text-lg">Segmentacao</span>: {form?.segment}</p>
			<p><span class="font-semibold text-md md:text-lg">Produto</span>: {form?.product}</p>
			<p>
				<span class="font-semibold text-md md:text-lg">Regmime de Contrato</span>: {form?.contract_regime}
			</p>
			<p>
				<span class="font-semibold text-md md:text-lg">Regmime de Trabalho</span>: {form?.work_regime}
			</p>
			<p>
				<span class="font-semibold text-md text-lg">Data de início</span>: {form?.start_date
					.split('-')
					.reverse()
					.join('/')}
			</p>
			<p><span class="font-semibold text-lg">Detalhes do Cliente</span>: {form?.client_message}</p>
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
