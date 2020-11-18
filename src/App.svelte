<script>
  import About from './Routes/About.svelte'
  import Error404 from './Routes/404.svelte'
  import Home from './Routes/Home.svelte'
  import ReviewingCodeLikeAJunior from './Routes/ReviewingCodeLikeAJunior.svelte'
  import router from 'page'
  import PolaroidDemo from './Routes/PolaroidDemo.svelte'
  import { theme } from './Stores/theme'
  import ThreeTipsReview from './Routes/ThreeTipsReview.svelte'
  import ThemePickerDemo from './Routes/ThemePickerDemo.svelte'

  let page
  let params

  router('/', () => (page = Home))
  router('/code-review/like-a-junior', () => (page = ReviewingCodeLikeAJunior))
  router('/code-review/three-tips', () => (page = ThreeTipsReview))
  router('/about', () => (page = About))
  router('/components/polaroid', () => (page = PolaroidDemo))
  router('/components/theme-store', () => (page = ThemePickerDemo))
  router('*', () => (page = Error404))

  router.start()
</script>

<svelte:component this={page} {params} theme={$theme} />
