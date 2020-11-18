<script>
  import Layout from '../Components/Layout.svelte'

  import { theme } from '../Stores/theme'

  import { Highlight } from 'svelte-highlight'
  import { css, javascript } from 'svelte-highlight/languages'
  import { a11yLight, a11yDark } from 'svelte-highlight/styles'

  const mediaQueryExample = `
@media (prefers-color-scheme: dark) {
  --background-color: midnightblue;
}

@media (prefers-color-scheme: light) {
  --background-color: snow;
}
`.trim()

  const jsMatchMediaExample = `
const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')

const darkModeEnabled = darkModeQuery.matches

darkModeQuery.addListener(event => {
    console.log('Theme changed to:', event.matches ? 'dark' : 'light')
})
`.trim()

  const storeExample1 = `
import { writable } from 'svelte/store'

// Set up our MediaQueryList
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)')

// Initial theme config from current state
export const theme = writable(prefersDarkMode.matches ? 'dark' : 'light')
`.trim()

  const storeExample2 = `
// Update the store if OS preference changes
const updateThemeOnChange = e => theme.set(e.matches ? 'dark' : 'light')
prefersDarkMode.addListener(updateThemeOnChange)

// Export a function to clean up the listener if needed
export const cleanUp = () => prefersDarkMode.removeListener(updateThemeOnChange)
`.trim()
</script>

<style>
  h1 {
    font-size: 36pt;
    line-height: 40pt;
    margin: 0;
    margin-top: 16px;
  }
  h2 {
    font-size: 20pt;
    line-height: 28pt;
  }

  p {
    font-size: 14pt;
    line-height: 24pt;
  }

  p code {
    color: var(--accent-color);
    font-weight: bold;
  }
</style>

<svelte:head>
  {@html $theme.name === 'new' ? a11yDark : a11yLight}
</svelte:head>
<Layout>
  <h1>Building a theme store with Svelte</h1>
  <div class="date">11/18/2020</div>
  <p>
    Dark mode has been gaining in popularity over the past few years, and now
    all of the major operating systems support a global dark theme. And a lot of
    major sites offer a dark mode toggle. But with modern browsers we can do
    better! We can use the user's OS preference to show them the color theme
    they prefer when they first land on our sites!
  </p>
  <p>
    This tutorial is going to teach you how to detect a user's OS theme in CSS
    and JavaScript, as well as how to build a Svelte store to respond to theme
    changes.
  </p>
  <h2>Detecting dark mode in CSS</h2>
  <p>
    The secret to detecting a user's OS theme is the media query
    <code>prefers-color-scheme</code>. The two major options are
    <code>light</code>
    and
    <code>dark</code>, and we can easily use them to define CSS variables to
    apply these themes for an entire site.
  </p>
  <Highlight language={css} code={mediaQueryExample} />
  <h2>Detecting dark mode in JavaScript</h2>
  <p>
    We can use the same media query to detect a user's OS theme in JavaScript,
    as well!
  </p>
  <p>
    JavaScript supports executing any media query with
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia"
      rel="noreferrer noopener"
      target="_blank"><code>window.matchMedia</code>
      (↗️)</a>. The call returns a
    <code>MediaQueryList</code>
    object that supports two features we'll need when we build the Svelte store.
  </p>
  <p>
    The two properties we care about are
    <code>matches</code>, for checking the result of the media query, and
    <code>addListener</code>
    for detecting changes.
  </p>
  <Highlight language={javascript} code={jsMatchMediaExample} />
  <h2>Building our Svelte store</h2>
  <p>
    The CSS approach is very useful for a static site, but as we add components
    or import libraries (like
    <code>highlight.js</code>, which I'm using here) that need to know about our
    theme, it becomes more important to have a single source of truth for that
    data in our app.
  </p>
  <p>So let's build a theme store for a Svelte app!</p>
  <p>
    We start by defining our writable store based on the user's OS theme when
    the store is first loaded:
  </p>
  <Highlight language={javascript} code={storeExample1} />
  <p>
    This is a great start, and it's probably enough for many apps, because users
    don't change their OS themes too often. But it's only a little bit more work
    to add an event listener to detect changes:
  </p>
  <Highlight language={javascript} code={storeExample2} />
  <p>
    Putting all of this together, we have a simple theme store that responds to
    OS theme changes quickly! If you want to see a demo, you can check it out
    <a
      href="https://svelte.dev/repl/15a88f72670845b4a173bc558fd537f9?version=3.29.7"
      rel="noreferrer noopener"
      target="_blank">on the Stelve REPL (↗️)</a>!
  </p>
  <h2>Caveats</h2>
  <p>
    There are a few small gotchas with this approach that might result in your
    users seeing the wrong theme.
  </p>
  <p>
    A few browsers, including IE, do not support the media query we're using.
    However, nearly all browsers support
    <code>matchMedia</code>, so they should fall back to whichever theme you
    picked as the default. For full details, see
    <a
      href="https://caniuse.com/prefers-color-scheme"
      rel="noreferrer noopener"
      target="_blank">Can I use prefers-color-scheme? (↗️)</a>.
  </p>
  <p>
    And if you enable some privacy settings, like
    <code>privacy.resistFingerprinting</code>
    in Firefox, this media query will default to the
    <code>light</code>
    theme. For more details here, see
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme"
      rel="noreferrer noopener"
      target="_blank">prefers-color-scheme on MDN (↗️)</a>.
  </p>
  <h2>Next steps!</h2>
  <p>
    This simple store is only a few lines of code, thanks to the power of the
    <code>prefers-color-scheme</code>
    media query. So I want to leave you with some suggestions for work you could
    do to learn a little more!
  </p>
  <p>
    The Svelte store I'm using here is relatively simple. We set an initial
    value when we create it with
    <code>writable</code>, and we can update the value with
    <code>set</code>. Can you write a React hook for this state, or implement
    the store in another state library?
  </p>
  <p>
    It's great to respond to user preferences, but what if the user wants to use
    your app with a different theme? Can you update the store to change themes
    when the user pushes a button? Can you update the store so that our app
    theme is independent from the OS theme, after they've pushed that button?
  </p>
  <p>Happy coding!</p>
</Layout>
