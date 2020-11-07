<script>
  import About from './Routes/About.svelte'
  import Error404 from './Routes/404.svelte'
  import Home from './Routes/Home.svelte'
  import ReviewingCodeLikeAJunior from './Routes/ReviewingCodeLikeAJunior.svelte'
  import router from 'page'
  import PolaroidDemo from './Routes/PolaroidDemo.svelte'

  let page
  let params

  router('/', () => (page = Home))
  router('/code-review/like-a-junior', () => (page = ReviewingCodeLikeAJunior))
  router.redirect('/code-review', '/code-review/like-a-junior')
  router('/about', () => (page = About))
  router('/components/polaroid', () => (page = PolaroidDemo))
  router.redirect('/components', '/components/polaroid')
  router('*', () => (page = Error404))

  router.start()
</script>

<style>
  :global(body) {
    --primary-color: darkslategray;
    --accent-color: crimson;
    --background-color: hsl(40, 1%, 99%);

    color: var(--primary-color);
    font-family: Proxima Nova, sans-serif;
    padding: 0;

    height: 100%;

    background-color: var(--background-color);
  }

  :global(a) {
    color: var(--accent-color);
    text-decoration: none;
  }

  :global(a):hover {
    filter: brightness(85%);
    text-decoration: underline;
  }

  :global(a):visited {
    filter: brightness(85%);
  }
</style>

<svelte:component this={page} {params} />
