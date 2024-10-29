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

	// $: console.log($messages.length);
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

<div>alguma coisa</div>
