<script>
  import {
    theme,
    cycleTheme,
    nextTheme,
    removeOSThemeListener,
  } from '../Stores/theme'

  const cycleAndPersistTheme = () => {
    window.localStorage.setItem('theme', nextTheme($theme).name)
    removeOSThemeListener()
    cycleTheme()
  }
</script>

<style>
  button {
    border: none;
    background: none;
    padding: 0 16px;
  }
</style>

<button
  on:click={cycleAndPersistTheme}
  aria-label="Toggle theme">{$theme.icon}</button>
