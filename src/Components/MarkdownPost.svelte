<script>
  import hljs from 'highlight.js'
  import 'highlight.js/styles/a11y-dark.css'
  import MarkdownIt from 'markdown-it'
  import Layout from './Layout.svelte'

  export let markdown = ''

  const md = new MarkdownIt({
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error('Failed to highlight string')
        }
      }

      return '' // use external default escaping
    },
  })

  const rendered = md.render(markdown)
</script>

<Layout>
  {@html rendered}
</Layout>
