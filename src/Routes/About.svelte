<script>
  import Layout from '../Components/Layout.svelte'
</script>

<style>
  .pronouns {
    font-size: 14pt;
  }

  li {
    list-style: "👋 ";
    list-style-position: outside;
  }
</style>

<Layout>
  <h1>Chris Jackson <span class="pronouns">(he/him)</span></h1>
  <p>
    I am a senior web engineer (react, typescript), working on building up my
    full stack skills (graphql, node).
  </p>
  <p>
    I am a prolific code reviewer. I think a good code review practice helps the
    whole team learn and stay connected. I think code review is one of the best
    chances for engineers to get feedback about their work, and how to improve.
  </p>
  <p>I believe diverse voices improve products, teams, and the world.</p>
  <h2>Find me elsewhere:</h2>
  <ul>
    <li><a href="https://github.com/chrsjxn">github</a></li>
    <li><a href="https://twitter.com/c_jackson_js">twitter</a></li>
  </ul>
</Layout>
