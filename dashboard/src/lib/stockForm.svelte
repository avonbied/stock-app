<script lang="ts">
export let id: string = '1';
</script>

<form {id}>
	<label for="symbol">Enter Symbol:
		<input type="search" name="symbol" id="symbol" placeholder="Symbol (Ex. AAPL)" />
	</label>
	<output></output>
</form>

<style>
form {
	border: 2px solid gray;
	padding: 32px;
}
</style>