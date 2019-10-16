<script>
	export let name = '';
</script>

<style>
	input {
		padding: 2px
	}
</style>

<input bind:value={name} placeholder="enter your name">
<p>Hello {name || 'stranger'}!</p>
