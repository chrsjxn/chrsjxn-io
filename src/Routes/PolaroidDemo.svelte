<script>
  import Layout from '../Components/Layout.svelte'
  import Polaroid from '../Components/Polaroid.svelte'

  import { Highlight, HighlightSvelte } from 'svelte-highlight'
  import { css } from 'svelte-highlight/languages'
  import { github } from 'svelte-highlight/styles'

  const svelteExample = `
<Polaroid
    src="/images/profile.jpg"
    alt="Developer self portrait"
    effect="drama">
    SF 11/01/2020
</Polaroid>
  `

  const cssExample = `
.vignette::after {
    content: '';

    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    background: radial-gradient(
        circle,
        hsla(36, 76%, 60%, 20%) 60%,
        hsla(36, 0%, 0%, 75%) 150%
    );
    mix-blend-mode: darken;
}`
</script>

<style>
  .demo-container {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap-reverse;
    justify-content: center;
    margin-bottom: 20px;
  }

  code {
    font-size: 14pt;
  }

  p {
    font-size: 14pt;
    line-height: 22pt;
  }
</style>

<svelte:head>
  {@html github}
</svelte:head>
<Layout>
  <h1>Polaroid Demo</h1>
  <div class="demo-container">
    <div>
      <Polaroid src="/images/raven.jpg" alt="Raven" effect="drama">
        Yellowstone 08/31/2015
      </Polaroid>
    </div>
    <div style="transform: rotate(1deg);">
      <Polaroid src="/images/gull.jpg" alt="Gull" effect="vignette">
        Marin 03/26/2016
      </Polaroid>
    </div>
    <div style="transform: rotate(-2deg);">
      <Polaroid
        src="/images/profile.jpg"
        alt="Developer self portrait"
        effect="drama">
        SF 11/01/2020
      </Polaroid>
    </div>
    <div style="transform: rotate(5deg);">
      <Polaroid
        src="/images/orange.jpg"
        alt="SF with orange sky due to wildfire smoke"
        effect="vignette">
        SF 09/09/2020
      </Polaroid>
    </div>
  </div>

  <p>
    Credit to Una Kravets for inspiration on the polaroid effects. Check out her
    <a href="https://una.im/lomo/" target="_blank" rel="noopener noreferrer">CSS
      lomography (↗️)</a>
    post for more!
  </p>

  <h2>Description</h2>

  <p>
    This Polaroid component is a quick abstraction around an
    <code>img</code>
    tag. It renders a lightly processed version of an image, using CSS
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter"
      target="_blank"
      rel="noopener noreferrer">filters (↗️)</a>
    to make the image look more vintage.
  </p>
  <p>
    The Polaroid component also takes an optional effect prop, rendering more
    complex effects via CSS gradient overlays.
  </p>
  <h3>Component example</h3>
  <HighlightSvelte code={svelteExample} />

  <h2>How it works</h2>

  <h3>CSS effects</h3>

  <p>
    CSS effects in the polaroid component are controlled via the
    <code>effect</code>
    prop, which toggles an extra class on the image wrapper.
  </p>

  <p>
    Those extra classes are used to control an
    <code>::after</code>
    selector that renders a gradient overlay above the image. (<code>img</code>
    is a replaced element, so we can't use
    <code>::after</code>
    on it directly. If it weren't for this, I could save a
    <code>div</code>
    😭)
  </p>

  <h4>Example effect</h4>

  <Highlight language={css} code={cssExample} />

  <h3>A11y</h3>

  <p>
    One nice feature of using an
    <code>img</code>
    tag in this component, rather than the CSS
    <code>background</code>
    properties, is that it allows for easy use of a11y attributes like
    <code>alt</code>!
  </p>

  <h3>Browser support</h3>

  <p>Does this component work in IE?</p>
  <p>
    Nope! IE doesn't support the
    <code>filter</code>
    CSS that powers part of the effect, but you may be able to achieve a
    reasonable fallback with just the gradient overlays.
  </p>
  <p>
    (Svelte also doesn't currently support IE11 without an extra transpilation
    step! But that's mostly a problem with my laziness, instead of a browser
    compatibility issue.)
  </p>

  <h3>Want to tinker?</h3>
  <p>
    If you'd like to play around with the code, check it out on the
    <a
      href="https://svelte.dev/repl/c3eed60a7dd34ad3a94a670747f85341?version=3.29.4"
      target="_blank"
      rel="noopener noreferrer">svelte repl (↗️)</a>!
  </p>
</Layout>
