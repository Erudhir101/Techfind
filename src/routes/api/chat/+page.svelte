<script lang="ts">
	import { chatHistory, addMessage } from '$lib/stores/chatStore';
	import { useChat } from '@ai-sdk/svelte';
	import { afterUpdate, beforeUpdate } from 'svelte';
	import type { Message } from 'ai';

	const { input, handleSubmit, messages } = useChat({
		initialMessages: $chatHistory,
		onFinish: (message: Message) => {
			addMessage(message);
		}
	});

	async function handleUserSubmit(event: Event) {
		event.preventDefault();
		if ($input.trim() === '') return;
		addMessage({ id: crypto.randomUUID(), role: 'user', content: $input });
		try {
			handleSubmit(event);
		} catch (err) {
			console.error('Error sending message:', err);
		}
	}

	let scrollMain: HTMLElement;
	let autoscroll: boolean = false;

	beforeUpdate(() => {
		if (scrollMain) {
			autoscroll = scrollMain.scrollTop > scrollMain.scrollHeight - scrollMain.offsetHeight - 20;
		}
	});
	afterUpdate(() => {
		if (autoscroll) {
			scrollMain.scrollTo(0, scrollMain.scrollHeight);
		}
	});
</script>

<div class="flex w-full h-svh p-16">
	<main class="basis-1/2">
		<h1>AI Interaction</h1>
		<form on:submit|preventDefault={handleUserSubmit}>
			<textarea bind:value={$input} placeholder="Ask something..."></textarea>
			<button type="submit">Submit</button>
		</form>
		<div>
			<h2>Response:</h2>
			{#each $messages as message (message.id)}
				{#if message.role !== 'user'}
					<p class="text-md prose">{message.content}</p>
				{:else}
					<p class="text-md">{message.content}</p>
				{/if}
			{/each}
		</div>
	</main>
	<aside class="bg-red-200 basis-1/2">alguma coisa</aside>
</div>

<style>
</style>
