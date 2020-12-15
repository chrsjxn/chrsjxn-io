<script>
  import { Layout, MarkdownPost } from '../Components'
  import { onMount } from 'svelte'
  import NextPostLink from '../Components/NextPostLink.svelte'

  let markdown = ''

  onMount(async () => {
    markdown = (await import('../Markdown/CloudinarySupport.md')).default
  })

  export let nextPost = null
</script>

<Layout>
  <MarkdownPost {markdown} />
  {#if markdown}
    <NextPostLink {nextPost} />
  {/if}
</Layout>
