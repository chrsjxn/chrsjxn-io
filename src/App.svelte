<script>
  import About from './Routes/About.svelte'
  import Error404 from './Routes/404.svelte'
  import Home from './Routes/Home.svelte'
  import ReviewingCodeLikeAJunior from './Routes/ReviewingCodeLikeAJunior.svelte'
  import router from 'page'
  import PolaroidDemo from './Routes/PolaroidDemo.svelte'
  import { theme } from './Stores/theme'

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

<div class="root {$theme.name}">
  <svelte:component this={page} {params} theme={$theme} />
</div>
