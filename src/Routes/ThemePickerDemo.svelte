<script>
  import { Layout, MarkdownPost } from '../Components'
  import { onMount } from 'svelte'

  let markdown = ''

  onMount(async () => {
    markdown = (await import('../Markdown/SvelteThemeStore.md')).default
  })
</script>

<Layout>
  <MarkdownPost {markdown} />
</Layout>
