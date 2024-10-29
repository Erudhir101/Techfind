import { createOllama } from 'ollama-ai-provider';
import { streamText } from 'ai';

const ollama = createOllama();
const form = `considerando o texto antes do '-' monte um ranking de melhores características e tags para se procurar usando os seguintes valores:
características:
valor da hora;
disponibilidade;
tags:
angular;
node;
python;
java;
svelte;
react;
javascript;
css;
typescript;
frontend;
backend;
fullstack;
engenheiro de software;
PO;
QA;
linux;
quando for fornecer o ranking, apenas dê a nota de cada característica e valor.
`;

// export async function POST({ request }) {
// 	const { messages } = await request.json();
//
// 	const result = await streamText({
// 		model: ollama('llama3.2:3b'),
// 		messages: convertToCoreMessages(messages)
// 	});
//
// 	return result.toDataStreamResponse();
// }
//

export async function POST({ request }) {
	const { messages } = await request.json();

	const result = await streamText({
		model: ollama('llama3.2:3b'),
		prompt: `${messages} - ${form}`
	});

	return result.toDataStreamResponse();
}
