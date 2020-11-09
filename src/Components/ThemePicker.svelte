<script>
  import { theme, cycleTheme } from '../Stores/theme'
</script>

<style>
  button {
    border: none;
    background: none;
  }
</style>

<button on:click={cycleTheme} aria-label="Toggle theme">{$theme.icon}</button>
