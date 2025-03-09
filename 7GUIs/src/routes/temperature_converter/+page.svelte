<script lang="ts">
  let c = $state(0);
  let f = $state(0);

  function cToF() {
    f = c * (9 / 5) + 32;
  }

  function fToC() {
    c = f * (9 / 5) + 32;
  }
</script>

<div>
  <input id="celsius" type="number" bind:value={c} oninput={cToF} />
  <label for="celsius">Celsius</label>
  <span>=</span>
  <input id="fahrenheit" type="number" bind:value={f} oninput={fToC} />
  <label for="fahrenheit">Fahrenheit</label>
</div>
