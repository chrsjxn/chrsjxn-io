<script>
  import About from './Routes/About.svelte'
  import Home from './Routes/Home.svelte'
  import ReviewingCodeLikeAJunior from './Routes/ReviewingCodeLikeAJunior.svelte'
  import router from 'page'

  let page
  let params

  router('/', () => (page = Home))
  router(
    '/reviewing-code-like-a-junior-engineer',
    () => (page = ReviewingCodeLikeAJunior)
  )
  router('/about', () => (page = About))

  router.start()
</script>

<style>
  :global(body) {
    --primary-color: darkslategray;
    --accent-color: crimson;

    color: var(--primary-color);
    font-family: Proxima Nova, sans-serif;
    padding: 0;

    width: 100%;
    height: 100%;
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
