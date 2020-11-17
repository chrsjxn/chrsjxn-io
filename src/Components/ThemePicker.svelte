<script>
  import { theme, cycleTheme, nextTheme } from '../Stores/theme'

  const cycleAndPersistTheme = () => {
    window.localStorage.setItem('theme', nextTheme($theme).name)
    cycleTheme()
  }
</script>

<style>
  button {
    border: none;
    background: none;
  }
</style>

<button
  on:click={cycleAndPersistTheme}
  aria-label="Toggle theme">{$theme.icon}</button>
