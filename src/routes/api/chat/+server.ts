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
quando for fornecer o ranking, dê apenas a nota de cada característica e valor, separando elas em cada linha. Como no exemplo a seguir:
'características: 4/10\nTags: 5/10'
`;

// const usuários = [
// 	{
// 		nome: 'João',
// 		desc: 'Desenvolvedor Backend',
// 		tags: ['backend', 'servidor', 'sistemas operacionais', 'devops', 'teste'],
// 		dispo: 'seg à sex das 8:00 até 18:00'
// 	},
// 	{
// 		nome: 'Maria',
// 		desc: 'Desenvolvedora Frontend',
// 		tags: ['frontend', 'javascript', 'css', 'html', 'design responsivo'],
// 		dispo: 'seg à sex das 9:00 até 17:00'
// 	},
// 	{
// 		nome: 'Carlos',
// 		desc: 'Especialista em Data Science',
// 		tags: [
// 			'data science',
// 			'machine learning',
// 			'python',
// 			'análise de dados',
// 			'inteligência artificial'
// 		],
// 		dispo: 'seg à sex das 10:00 até 18:00'
// 	},
// 	{
// 		nome: 'Ana',
// 		desc: 'Engenheira de Software',
// 		tags: [
// 			'engenharia de software',
// 			'arquitetura de sistemas',
// 			'c++',
// 			'sistemas distribuídos',
// 			'cloud'
// 		],
// 		dispo: 'seg à sex das 8:00 até 16:00'
// 	},
// 	{
// 		nome: 'Lucas',
// 		desc: 'Desenvolvedor Mobile',
// 		tags: ['mobile', 'android', 'ios', 'kotlin', 'swift'],
// 		dispo: 'seg à sex das 10:00 até 19:00'
// 	},
// 	{
// 		nome: 'Roberto',
// 		desc: 'Administrador de Redes',
// 		tags: ['redes', 'segurança', 'firewall', 'VPN', 'Linux'],
// 		dispo: 'seg à sex das 7:00 até 16:00'
// 	},
// 	{
// 		nome: 'Beatriz',
// 		desc: 'Desenvolvedora Full Stack',
// 		tags: ['full stack', 'javascript', 'node.js', 'react', 'banco de dados', 'docker'],
// 		dispo: 'seg à sex das 9:00 até 18:00'
// 	},
// 	{
// 		nome: 'Eduardo',
// 		desc: 'Analista de Suporte',
// 		tags: ['suporte técnico', 'helpdesk', 'windows', 'troubleshooting', 'TI'],
// 		dispo: 'seg à sex das 8:00 até 17:00'
// 	},
// 	{
// 		nome: 'Juliana',
// 		desc: 'Engenheira de Dados',
// 		tags: ['engenharia de dados', 'ETL', 'big data', 'python', 'SQL', 'data pipeline'],
// 		dispo: 'seg à sex das 10:00 até 19:00'
// 	},
// 	{
// 		nome: 'Fernando',
// 		desc: 'Especialista em Cloud',
// 		tags: ['cloud', 'AWS', 'Azure', 'Google Cloud', 'devops', 'orquestração'],
// 		dispo: 'seg à sex das 9:00 até 17:30'
// 	}
// ];

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
