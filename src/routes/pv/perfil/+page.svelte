<script>
	import { Button, Label } from 'bits-ui';
	import { ArrowBigLeft } from '@lucide/svelte';

	let { data } = $props();
	let { profile } = $derived(data);
</script>

<Button.Root
	href="../"
	class="inline-block bg-principal-1 rounded-full hover:bg-principal-4 mt-4 ml-4 border-2 border-black hover:border-black/80 shadow"
>
	<ArrowBigLeft class="size-10 stroke-1 hover:stroke-black/80" />
</Button.Root>

<div class="flex w-full mt-24 justify-center">
	<form
		method="post"
		action="?/signup"
		class=" flex flex-col gap-8 items-stretch shadow-lg rounded-md p-8 w-md border border-zinc-300"
	>
		<h2 class="font-bold text-2xl">PROFILE</h2>
		<div class="flex flex-col items-start gap-1">
			<Label.Root for="name" class="text-sm font-medium">Nome Completo:</Label.Root>
			<div class="w-full">
				<input
					type="text"
					name="name"
					value={profile?.name}
					class="h-10 rounded-sm bg-principal-1 placeholder:text-foreground-alt/50 border-zinc-300 focus:outline-hidden inline-flex w-full items-center border px-4 text-base focus:ring-2 focus:ring-offset-2 sm:text-sm"
				/>
			</div>
		</div>
		<div class="flex flex-col items-start gap-1">
			<Label.Root for="date" class="text-sm font-medium">Data para o trabalho:</Label.Root>
			<div class="w-full">
				<input
					type="date"
					min={new Date().toISOString().split('T')[0]}
					value={profile?.date}
					name="date"
					class="h-10 rounded-sm bg-principal-1 placeholder:text-foreground-alt/50 border-zinc-300 focus:outline-hidden inline-flex w-full items-center border px-4 text-base focus:ring-2 focus:ring-offset-2 sm:text-sm"
				/>
			</div>
		</div>
		<div class="flex flex-col items-start gap-1">
			<Label.Root for="phone" class="text-sm font-medium">Telefone:</Label.Root>
			<div class="w-full">
				<input
					type="text"
					name="phone"
					value={profile?.phone}
					placeholder="(00)00000-0000"
					class="h-10 rounded-sm bg-principal-1 placeholder:text-foreground-alt/50 border-zinc-300 focus:outline-hidden inline-flex w-full items-center border px-4 text-base focus:ring-2 focus:ring-offset-2 sm:text-sm"
				/>
			</div>
		</div>
		<div class="flex flex-col items-start gap-1">
			<Label.Root for="email" class="text-sm font-medium">Email:</Label.Root>
			<div class="w-full">
				<input
					type="email"
					name="email"
					value={data.user?.email}
					class="h-10 rounded-sm bg-principal-1 placeholder:text-foreground-alt/50 border-zinc-300 focus:outline-hidden inline-flex w-full items-center border px-4 text-base focus:ring-2 focus:ring-offset-2 sm:text-sm"
				/>
			</div>
		</div>
		<div class="flex flex-col items-start gap-1">
			<Label.Root for="password" class="text-sm font-medium">Senha:</Label.Root>
			<div class="w-full flex flex-col gap-4">
				<input
					type="password"
					name="password"
					placeholder="Nova senha"
					class="h-10 rounded-sm bg-principal-1 placeholder:text-foreground-alt/50 border-zinc-300 focus:outline-hidden inline-flex w-full items-center border px-4 text-base focus:ring-2 focus:ring-offset-2 sm:text-sm"
				/>
			</div>
		</div>
		<div class="flex w-full justify-center">
			<Button.Root
				class="h-10 rounded-lg bg-principal-5 text-black shadow-sm hover:bg-principal-3 transition-colors duration-300 inline-flex items-center justify-center px-12 font-semibold active:scale-[0.95]"
			>
				Atualizar
			</Button.Root>
		</div>
	</form>
</div>
