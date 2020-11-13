<script>
  import Layout from '../Components/Layout.svelte'
  import Polaroid from '../Components/Polaroid.svelte'
</script>

<style>
  .pronouns {
    font-size: 14pt;
  }

  li {
    list-style: '👋 ';
    list-style-position: outside;
  }

  .polaroid-wrapper {
    transform: rotate(1deg);
  }
</style>

<Layout>
  <h1>Chris Jackson <span class="pronouns">(he/him)</span></h1>
  <div class="polaroid-wrapper">
    <Polaroid
      src="/images/githubProfile.jpg"
      alt="self portrait, github profile pic">
      Hello!
    </Polaroid>
  </div>
  <p>
    I am a senior web engineer, working on building up my full stack skills.
  </p>
  <p>
    I am a prolific code reviewer. I think a good code review practice helps the
    whole team learn and stay connected.
  </p>
  <p>I believe diverse voices improve products, teams, and the world.</p>
  <h2>Find me elsewhere:</h2>
  <ul>
    <li>
      <a
        href="https://github.com/chrsjxn"
        target="_blank"
        rel="noopener noreferrer">github (↗️)</a>
    </li>
    <li>
      <a
        href="https://twitter.com/c_jackson_js"
        target="_blank"
        rel="noopener noreferrer">twitter (↗️)</a>
    </li>
  </ul>
</Layout>
