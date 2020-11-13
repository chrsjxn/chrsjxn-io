<script>
  import Layout from '../Components/Layout.svelte'
</script>

<style>
  li {
    list-style-position: outside;
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
  </ul>
  <h1>Component Demos</h1>
  <ul>
    <li class="component"><a href="/components/polaroid">Polaroid demo</a></li>
  </ul>
</Layout>
