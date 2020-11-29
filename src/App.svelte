<script>
  import About from './Routes/About.svelte'
  import Error404 from './Routes/404.svelte'
  import Home from './Routes/Home.svelte'
  import router from 'page'
  import { posts } from './Modules/posts'

  let page

  router('/', () => (page = Home))
  router('/about', () => (page = About))

  for (let i in posts) {
    const post = posts[i]
    router(post.path, () => (page = post.component))
  }

  router('*', () => (page = Error404))

  router.start()
</script>

<svelte:component this={page} />
