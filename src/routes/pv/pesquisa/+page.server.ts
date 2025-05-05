import type { Actions } from './$types';
import { createGroq } from '@ai-sdk/groq';
import { generateText } from 'ai';
import { GROQ_API_KEY } from '$env/static/private';

const groq = createGroq({ apiKey: GROQ_API_KEY });

// export const load: PageServerLoad = async ({ locals: { supabase } }) => {
// 	const { text } = await generateText({
// 		model: groq('llama-3.3-70b-versatile'),
// 		prompt: example
// 	});
//
// 	const desc = text.split('Esses profissionais podem ser encontrados com as seguintes tags:')[0];
//
// 	const tags = text
// 		.split('Esses profissionais podem ser encontrados com as seguintes tags:')[1]
// 		.split('-')
// 		.map((value) => `tags.ilike.%${value.trim()}%`)
// 		.join(', ');
//
// 	const { data: usuarios } = await supabase.from('profile').select().eq('type', '1').or(tags);
//
// 	return { usuarios: usuarios, api: { desc: desc, tags: tags } };
// };

export const actions = {
	pesquisar: async ({ locals: { supabase } }) => {
		const { text } = await generateText({
			model: groq('llama-3.3-70b-versatile'),
			prompt: example
		});

		const desc = text.split('Esses profissionais podem ser encontrados com as seguintes tags:')[0];

		const tags = text
			.split('Esses profissionais podem ser encontrados com as seguintes tags:')[1]
			.split('-')
			.map((value) => `tags.ilike.%${value.trim()}%`)
			.join(', ');

		const { data: usuarios } = await supabase.from('profile').select().eq('type', '1').or(tags);

		return { usuarios: usuarios, api: { desc: desc, tags: tags } };
	}
} satisfies Actions;

const example = `
baseado na tabela "profile" e no texto do usuário sobre o que ele necessita para a criação de uma aplicação, escreva, em markdown, quais os profissionais e como suas características vão ajudar nesse processo. No final da resposta deve ter as principais tags para a pesquisa. seguindo o seguinte padrão "As principais tags para a pesquisa são: mobile-android-ios-backend-fullstack"

texto do usuário: preciso de um profissional de testes

tabela profile:
- id: number primary key;
- id_auth: number foreign key;
- name: string not_null;
- type: enum[1, 2] not_null;
- type_personal: string not_null;
- phone: string not_null;
- date: Date not_null;
- desc: string;
- caract: string;
- tags: string; 

lista de tags: Desenvolvimento de Software-Linguagens de Programação-Frameworks-Desenvolvimento Web-Desenvolvimento Mobile-Frontend-Backend-Fullstack-Banco de Dados-SQL-NoSQL-Administração de Banco de Dados (DBA)-Sistemas Operacionais-Linux-Windows Server-Redes de Computadores-Segurança de Rede-Cibersegurança-Segurança da Informação (Infosec)-Firewall-VPN-Computação em Nuvem-Cloud Computing-AWS-Azure-Google Cloud Platform (GCP)-SaaS-PaaS-IaaS-Infraestrutura de TI-Servidores-Virtualização-Containers-Docker-Kubernetes-DevOps-Automação-Monitoramento de Sistemas-Backup e Recuperação-Ciência de Dados-Inteligência Artificial (IA)-Machine Learning (ML)-Big Data-Análise de Dados-Gerenciamento de Projetos-Metodologias Ágeis-Scrum-Kanban-ITIL-Arquitetura de Software-Microsserviços-APIs-Análise de Sistemas-Engenharia de Software-Suporte Técnico-Help Desk-Experiência do Usuário (UX)-Interface do Usuário (UI)-Pentesting-Criptografia-Redes Sem Fio (Wireless)-Data Center-Armazenamento (Storage)

exemplo:

texto de usuário: gostaria de profissionais que de tecnologia para a criação de um site pessoal.

profile 1:
- id: 1;
- id_auth: 1;
- name: jubileu;
- type: 1;
- type_personal: 99999999999;
- phone: 99999999999;
- date: 2025-10-12;
- desc: "sou um profissional apaixonado por tecnologia.";
- caract: "profissional de tecnologia.";
- tags: "frontend-backend-fullstack-postgreSQL"; 


profile 2:
- id: 2;
- id_auth: 2;
- name: ana;
- type: 1;
- type_personal: 99999999999;
- phone: 99999999999;
- date: 2025-10-12;
- desc: "sou uma profissional da área de Banco de dados.";
- caract: "profissional de Banco de Dados.";
- tags: "Banco de dados-backend-postgreSQL"; 

resposta:
baseado na sua descrição, você necessita de profissionais na área de desenvolvimento web (frontend - tela, backend - banco de dados, métodos ágeis - para a coordenação e gerência)

para a sua necessidade, os melhores profissionais área de tecnologia são:
**1 profissional de banco de dados**;
**3 profissionais fullstack**;
**1 profissional de métodos ágeis**;

Esses profissionais podem ser encontrados com as seguintes tags: Desenvolvimento de Software Testes de Software-Pentesting-Criptografia-Segurança da Informação-Qualidade de Software-
`;
