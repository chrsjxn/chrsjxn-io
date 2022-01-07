<script>
  import About from './Routes/About.svelte'
  import Error404 from './Routes/404.svelte'
  import Home from './Routes/Home.svelte'
  import router from 'page'
  import { posts } from './Modules/posts'
  import Progress from './Routes/Progress.svelte'

  let page = About
  let nextPost = null

  router('*', (_, next) => {
    window.scrollTo({
      top: 0,
      left: 0,
    })

    next()
  })

  posts.forEach((post, i) => {
    router(post.path, async () => {
      nextPost = posts[i + 1]
      try {
        page = (await post.loader()).default
      } catch (err) {
        page = Error404
      }
    })
  })

  router('/', () => (page = Home))
  router('/about', () => (page = About))
  router('/progress', () => (page = Progress))
  router('*', () => (page = Error404))

  router.start()

</script>

<style global>
  body {
    font-size: 1.125rem;
    line-height: 2rem;
    margin: 1rem 0;
    padding: 0;
    position: absolute;
    width: 100%;
    min-height: 100%;
    color: var(--primary-color);
    font-family: sans-serif;
    background-color: var(--background-color);
  }

  html {
    font-size: 14px;
  }

  @media (max-width: 450px) {
    html {
      font-size: 10px;
    }
  }

  .new {
    --background-color: hsl(230, 100%, 5%);
    --accent-color: hsl(285, 100%, 65%);
    --accent-color-2: hsl(310, 100%, 55%);
    --primary-color: hsl(230, 100%, 95%);
  }

  .full {
    --primary-color: hsl(110, 10%, 5%);
    --accent-color: hsl(10, 100%, 35%);
    --accent-color-2: hsl(10, 100%, 35%);
    --background-color: hsl(100, 5%, 95%);
  }

  .terminal {
    font-size: 1.5rem;
    line-height: 2rem;
    font-family: monospace;
  }

  @media print {
    .new,
    .full {
      --background-color: white;
      --primary-color: black;
      --accent-color: darkred;
      --accent-color-2: darkblue;
    }
  }

  h1 {
    font-weight: 800;
    font-size: 3.75rem;
    line-height: 1;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 2.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  pre {
    background-color: white;
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding: 1rem;
    color: black;
    overflow-x: auto;
  }

  li {
    margin-left: 2.5rem;
  }

  a {
    font-weight: 700;
    color: var(--accent-color-2);
  }

  code {
    color: var(--accent-color);
    font-weight: 700;
  }

  pre code,
  a code {
    color: inherit;
    font-weight: inherit;
  }

  p {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  blockquote {
    border-color: rgba(209, 213, 219, 1);
    border-style: solid;
    border-left-width: 4px;
    padding-left: 1rem;
  }

  img {
    max-width: 100%;
  }

</style>

<svelte:component this={page} {nextPost} />
