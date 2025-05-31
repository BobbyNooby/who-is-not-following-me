<script lang="ts">
	import BatchButton from '$lib/BatchButton.svelte';
	import { FileHandler } from '$lib/fileHandler.svelte';
	import FileUploader from '$lib/FileUploader.svelte';
	import type { UserEntry } from '$lib/types';
	import UserEntryComponent from '$lib/UserEntryComponent.svelte';

	const fileHandler = new FileHandler();

	function splitEntries(entries: UserEntry[], batchSize: number): UserEntry[][] {
		const batches: UserEntry[][] = [];
		for (let i = 0; i < entries.length; i += batchSize) {
			batches.push(entries.slice(i, i + batchSize));
		}
		return batches;
	}
</script>

<div class="flex min-h-screen w-full flex-col items-center justify-center px-4 py-8">
	<p class="mb-6 text-center text-7xl">
		Who Is Not Following Me <span class="emoji-font">😡</span>
	</p>

    <a class="mb-6 underline" target="_blank" href="https://github.com/BobbyNooby/who-is-not-following-me">Source and README</a>

	<div class="mb-6 flex flex-row gap-4">
		<FileUploader {fileHandler} type="following" />
		<FileUploader {fileHandler} type="followers" />

		<button
			on:click={() => console.log(fileHandler.generateFollowingNotFollowedBack())}
			class="rounded border-2 px-4 py-2 text-white transition-colors duration-300 enabled:hover:bg-gray-800 disabled:border-gray-800 disabled:bg-gray-600 disabled:text-gray-500"
			disabled={fileHandler.followers.length === 0 || fileHandler.following.length === 0}
		>
			Check
		</button>
	</div>

	{#if fileHandler.notFollowedBack.length > 0}
		<p class="mb-4 text-3xl">Batch Open :</p>
		<div class="mb-6 flex flex-wrap justify-center gap-2">
			{#each splitEntries(fileHandler.notFollowedBack, 20) as batch, i}
				<BatchButton userEntries={batch} startIndex={i * 20 + 1} endIndex={i * 20 + batch.length} />
			{/each}
		</div>

		<p class="mb-4 text-3xl">People Not Followed Back: {fileHandler.notFollowedBack.length}</p>
		<div class="grid w-full max-w-5xl grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
			{#each fileHandler.notFollowedBack as userEntry}
				<UserEntryComponent {userEntry} />
			{/each}
		</div>
	{/if}
</div>
