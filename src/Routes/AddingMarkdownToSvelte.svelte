<script>
  import { MarkdownPost } from '../Components'
  import Layout from '../Components/Layout.svelte'
  import content from '../Markdown/AddingMarkdownToSvelte.md'
</script>

<Layout>
  <MarkdownPost markdown={content} />
</Layout>
