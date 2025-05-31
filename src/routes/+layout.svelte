<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>


<svelte:head>
<!-- Primary Meta Tags -->
<title>Who Is Not Following Me?</title>
<meta name="title" content="Who Is Not Following Me?" />
<meta name="description" content="Put in your data and find out who is not following you back!" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://followback.bobbynooby.dev/" />
<meta property="og:title" content="Who Is Not Following Me?" />
<meta property="og:description" content="Put in your data and find out who is not following you back!" />
<meta property="og:image" content="https://raw.githubusercontent.com/BobbyNooby/who-is-not-following-me/refs/heads/master/static/favicon.png" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://followback.bobbynooby.dev/" />
<meta property="twitter:title" content="Who Is Not Following Me?" />
<meta property="twitter:description" content="Put in your data and find out who is not following you back!" />
<meta property="twitter:image" content="https://raw.githubusercontent.com/BobbyNooby/who-is-not-following-me/refs/heads/master/static/favicon.png" />

<!-- Meta Tags Generated with https://metatags.io -->
</svelte:head>	

<main class="balsamiq-sans-regular bg-black min-h-screen w-full text-white text-center">
{@render children()}
</main>
