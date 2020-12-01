<script>
  import About from './Routes/About.svelte'
  import Error404 from './Routes/404.svelte'
  import Home from './Routes/Home.svelte'
  import router from 'page'
  import { posts } from './Modules/posts'

  let page = About
  let nextPost = null

  router('*', (_, next) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })

    next()
  })

  posts.forEach((post, i) => {
    router(post.path, () => {
      nextPost = posts[i + 1]
      page = post.component
    })
  })

  router('/', () => (page = Home))
  router('/about', () => (page = About))
  router('*', () => (page = Error404))

  router.start()
</script>

<svelte:component this={page} {nextPost} />
