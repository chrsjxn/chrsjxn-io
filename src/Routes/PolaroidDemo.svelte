<script>
  import { Layout, MarkdownPost, Polaroid } from '../Components'
  import { onMount } from 'svelte'
  import NextPostLink from '../Components/NextPostLink.svelte'

  let markdown = ''

  onMount(async () => {
    markdown = (await import('../Markdown/PolaroidDemo.md')).default
  })

  export let nextPost = null
</script>

<style>
  .demo-container {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap-reverse;
    justify-content: center;
    margin-bottom: 20px;
  }
</style>

<Layout>
  <h1>Polaroid demo</h1>
  <div class="demo-container">
    <div>
      <Polaroid src="/__img_path__/raven.jpg" alt="Raven" effect="drama">
        Yellowstone 08/31/2015
      </Polaroid>
    </div>
    <div style="transform: rotate(1deg);">
      <Polaroid src="/__img_path__/gull.jpg" alt="Gull" effect="vignette">
        Marin 03/26/2016
      </Polaroid>
    </div>
    <div style="transform: rotate(-2deg);">
      <Polaroid
        src="/__img_path__/profile.jpg"
        alt="Developer self portrait"
        effect="drama">
        SF 11/01/2020
      </Polaroid>
    </div>
    <div style="transform: rotate(5deg);">
      <Polaroid
        src="/__img_path__/orange.jpg"
        alt="SF with orange sky due to wildfire smoke"
        effect="vignette">
        SF 09/09/2020
      </Polaroid>
    </div>
  </div>

  <MarkdownPost {markdown} />
  <NextPostLink {nextPost} />
</Layout>
