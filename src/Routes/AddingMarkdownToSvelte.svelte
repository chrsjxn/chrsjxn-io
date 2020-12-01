<script>
  import { Layout, MarkdownPost } from '../Components'
  import { onMount } from 'svelte'
  import NextPostLink from '../Components/NextPostLink.svelte'

  let markdown = ''

  onMount(async () => {
    markdown = (await import('../Markdown/AddingMarkdownToSvelte.md')).default
  })

  export let nextPost = null
</script>

<Layout>
  <MarkdownPost {markdown} />
  <NextPostLink {nextPost} />
</Layout>
