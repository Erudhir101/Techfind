<script lang="ts">
	import { Button, ScrollArea } from 'bits-ui';
	// import { chatHistory, addMessage } from '$lib/stores/chatStore';
	// import { useChat } from '@ai-sdk/svelte';
	// import type { Message } from 'ai';
	import CardProfile from '../../components/CardProfile.svelte';
	import { ChevronLeft } from '@lucide/svelte';
	// import type { ActionData } from './$types';

	let { data } = $props();

	$inspect(data.usuarios);
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

<div class="flex h-full w-full flex-col gap-8 p-4 md:h-[50rem] lg:flex-row">
	<main
		class="border-principal-4 flex basis-1/2 flex-col gap-4 overflow-hidden rounded-xl border-2 p-8 shadow-xl"
	>
		<h1 class="text-3xl font-bold">Resposta da IA</h1>
		<ScrollArea.Root class="rounded-md bg-white/80 p-4 text-justify">
			<ScrollArea.Viewport>
				{data.api.split('As principais tags para a pesquisa são:')[0]}
			</ScrollArea.Viewport>
			<ScrollArea.Scrollbar orientation="horizontal">
				<ScrollArea.Thumb />
			</ScrollArea.Scrollbar>
			<ScrollArea.Corner />
		</ScrollArea.Root>

		<!-- <form on:submit|preventDefault={handleUserSubmit}> -->
		<!-- 	<textarea bind:value={$input} placeholder="Ask something..."></textarea> -->
		<!-- 	<button type="submit">Submit</button> -->
		<!-- </form> -->
	</main>
	<CardProfile></CardProfile>
</div>
