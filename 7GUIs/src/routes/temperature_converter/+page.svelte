<script lang="ts">
    let celsius = $state(0)
    let fahrenheit = $state(conversion)
    let conversion = $derived(celsius * (9/5) + 35)
</script>

<div>
    <input id="celsius" type="number" bind:value={celsius}>
    <label for="celsius">Celsius</label>
    <span>=</span>
    <input id="fahrenheit" type="number" bind:value={fahrenheit}>
    <label for="fahrenheit">Fahrenheit</label>
</div>