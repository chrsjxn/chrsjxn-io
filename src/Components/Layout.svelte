<script>
  import Footer from './Footer.svelte'
  import Navigation from './Navigation.svelte'
</script>

<style>
  main {
    min-width: 30ch;
  }

  .center-content {
    margin: auto;
    width: clamp(20ch, 75%, 80ch);
    padding-bottom: 60px;
  }
</style>

<div class="center-content">
  <Navigation />
  <main>
    <slot />
  </main>
  <Footer />
</div>
