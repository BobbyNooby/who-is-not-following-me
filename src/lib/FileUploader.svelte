<script lang="ts">
	import type { FileHandler } from "./fileHandler.svelte";



    let { fileHandler, type } : { fileHandler: FileHandler, type: 'following' | 'followers'} = $props();
</script>


<div class="flex flex-col border border-white rounded-md p-2 space-y-2">
    <p>{type == "following" ? "Following List JSON (following.json)" : "Followers List JSON (followers_1.json)"}</p>
    <div class="border-white border rounded-md">
    <input class="p-1" type="file" accept=".json" onchange={(event) => fileHandler.handleOnFileUpload(event, type)}>
    </div>  
</div>