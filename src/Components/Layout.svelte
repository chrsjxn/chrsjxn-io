<script>
  import Navigation from './Navigation.svelte'
</script>

<style>
  main {
    min-width: 30ch;
  }

  .center-content {
    margin: auto;
    width: clamp(20ch, 75%, 80ch);
  }
</style>

<main>
  <div class="center-content">
    <Navigation />
    <slot />
  </div>
</main>
