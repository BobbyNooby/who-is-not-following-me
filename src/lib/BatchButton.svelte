<script lang="ts">
	import type { UserEntry } from './types';

	let {
		userEntries,
		startIndex,
		endIndex
	}: { userEntries: UserEntry[]; startIndex: number; endIndex: number } = $props();

	let clicked = $state(false);

	function handleClick() {
		for (const userEntry of userEntries) {
			window.open(userEntry.string_list_data[0].href, '_blank');
		}

        clicked = true;
	}
</script>

<button
	class="rounded-md border border-white p-2 hover:bg-gray-800 transition-colors duration-200"
	class:bg-gray-500={clicked}
	onclick={handleClick}
>
	Open Batch {startIndex}-{endIndex}
</button>
