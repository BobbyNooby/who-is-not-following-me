<script lang="ts">
	import type { UserEntry } from "./types";

    let {userEntry} : {userEntry : UserEntry} = $props();
</script>


<button class="p-2 border border-white rounded-md hover:bg-gray-800 transition-colors duration-200" onclick={() => window.open(userEntry.string_list_data[0].href, '_blank')}>
    <p>{userEntry.string_list_data[0].value}</p>
</button>