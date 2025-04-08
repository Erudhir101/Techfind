<script>
	import { superForm } from 'sveltekit-superforms';
	import '../app.css';
	import About from './components/About.svelte';
	import Footer from './components/Footer.svelte';
	import Header from './components/Header.svelte';
	import Menu from './components/Menu.svelte';
	import Planos from './components/Planos.svelte';
	import Section from './components/Section.svelte';
	import Support from './components/Support.svelte';

	// let { data } = $props();
	// const { errors: formSignup } = superForm(data.formSignup);
	// const { errors: formLogin } = superForm(data.formLogin);
	// $inspect($formSignup, $formLogin);
</script>

<Header />
<Section />
<Menu />
<About />
<Planos />
<Support />
<Footer />
