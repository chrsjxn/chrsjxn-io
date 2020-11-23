<script>
  import hljs from 'highlight.js/lib/highlight'
  import bash from 'highlight.js/lib/languages/bash'
  import javascript from 'highlight.js/lib/languages/javascript'
  import css from 'highlight.js/lib/languages/css'
  import 'highlight.js/styles/a11y-dark.css'
  import MarkdownIt from 'markdown-it'

  hljs.registerLanguage('bash', bash)
  hljs.registerLanguage('javascript', javascript)
  hljs.registerLanguage('css', css)

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

<!-- Render with the `@html` directive -->
{@html rendered}
