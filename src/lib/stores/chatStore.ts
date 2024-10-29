import { derived } from 'svelte/store';
import { persisted } from 'svelte-persisted-store';
import type { Message } from 'ai';

// Create a persisted store for the chat history with the Message[] type
export const chatHistory = persisted<Message[]>('ollamaChatHistory', []);

// Create a derived store for messages in the format expected by Ollama
export const ollamaMessages = derived<typeof chatHistory, Message[]>(
	chatHistory,
	($chatHistory) => $chatHistory
);

// Function to add a new message to the chat history
export function addMessage(message: Message): void {
	chatHistory.update((history) => [...history, message]);
}

// Function to clear the chat history
export function clearChatHistory(): void {
	chatHistory.set([]);
}

// Function to get the last n messages (useful for context window management)
export function getLastMessages(n: number) {
	return derived(ollamaMessages, ($ollamaMessages) => $ollamaMessages.slice(-n));
}
