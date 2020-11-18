<script>
  import Layout from '../Components/Layout.svelte'
</script>

<style>
  li {
    list-style-position: outside;
    line-height: 2em;
  }
  li.post {
    list-style-type: '📓 ';
  }

  li.component {
    list-style-type: '⚙️ ';
  }
</style>

<Layout>
  <h1>Writing</h1>
  <h2>Code Reviews</h2>
  <ul>
    <li class="post">
      <a href="/code-review/three-tips">Three tips to be a better code reviewer
        today</a>
    </li>
    <li class="post">
      <a href="/code-review/like-a-junior">Reviewing code like a junior engineer</a>
    </li>
  </ul>
  <h2>Web Technology</h2>
  <ul>
    <li class="component">
      <a href="/components/theme-store">Building a theme store with Svelte</a>
    </li>
    <li class="component"><a href="/components/polaroid">Polaroid demo</a></li>
  </ul>
</Layout>
