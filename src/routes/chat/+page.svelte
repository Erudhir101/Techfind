<script lang="ts">
	import { chatHistory, addMessage } from '$lib/stores/chatStore';
	import { useChat } from '@ai-sdk/svelte';
	import { afterUpdate, beforeUpdate } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';
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

<div class="flex h-screen bg-white">
	<aside class="w-80 border-r">
		<div class="p-4 space-y-4">
			<div class="flex justify-between items-center">
				<h2 class="text-xl font-bold">Mensagens</h2>
				<button
					aria-label="editar"
					class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="w-6 h-6"
					>
						<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
						<path d="m15 5 4 4"></path>
					</svg>
				</button>
			</div>
			<div class="relative">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="absolute left-2.5 top-3 h-4 w-4 text-zinc-500"
				>
					<circle cx="11" cy="11" r="8"></circle>
					<path d="m21 21-4.3-4.3"></path>
				</svg>
				<input
					class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-8"
					type="search"
					placeholder="Search messages..."
				/>
				<button
					aria-label="invisivel"
					class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 absolute right-2.5 top-3"
				></button>
			</div>
			<div class="space-y-2">
				<div class="rounded-lg border bg-card text-card-foreground shadow-sm p-2" data-v0-t="card">
					<div class="p-6">
						<h3 class="font-semibold">Chats</h3>
						<p class="text-xs text-zinc-500">Last message...</p>
					</div>
				</div>
			</div>
		</div>
	</aside>
	<section class="flex flex-col w-full">
		<header class="border-b p-4">
			<h2 class="text-xl font-bold flex items-center gap-2">
				<span class="flex shrink-0 rounded-full relative overflow-visible w-10 h-10">
					<span class="absolute right-0 top-0 flex h-3 w-3 rounded-full bg-green-600"></span>
					<span class="flex h-full w-full items-center justify-center rounded-full bg-muted">U</span
					>
				</span>
				<div>
					Assistente AI<span class="text-xs text-green-600 block">Online</span>
				</div>
			</h2>
		</header>
		<main bind:this={scrollMain} class="flex-1 overflow-auto p-4">
			<div class="space-y-4">
				{#each $messages as message (message.id)}
					{#if message.role !== 'user'}
						<div class="flex items-end gap-2">
							<div class="rounded-lg bg-zinc-200 p-2">
								<p class="text-md prose">
									<SvelteMarkdown source={message.content} />
								</p>
							</div>
						</div>
					{:else}
						<div class="flex items-end gap-2 justify-end">
							<div class="rounded-lg bg-blue-500 text-white p-2">
								<p class="text-md"><SvelteMarkdown source={message.content} /></p>
							</div>
						</div>
					{/if}
				{/each}
			</div>
		</main>
		<footer class="border-t p-4">
			<form on:submit|preventDefault={handleUserSubmit} class="flex items-center gap-2">
				<button
					aria-label="emoji"
					class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
						><path
							d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
						/></svg
					>
				</button>
				<input
					bind:value={$input}
					class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-md ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
					placeholder="Type a message..."
				/>
				<button
					type="submit"
					class="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-zinc-200 text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:shadow hover:shadow-zinc-200 h-10 px-4 py-2"
				>
					Send
				</button>
			</form>
		</footer>
	</section>
</div>
