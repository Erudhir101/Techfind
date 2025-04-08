import { createOllama } from 'ollama-ai-provider';
import { streamText } from 'ai';
import type { RequestHandler } from '@sveltejs/kit';

const ollama = createOllama();

export const POST: RequestHandler = async ({ request }) => {
	const { messages } = await request.json();

	const result = await streamText({
		model: ollama('llama3.2:3b'),
		prompt: messages
	});

	return result.toDataStreamResponse();
};
