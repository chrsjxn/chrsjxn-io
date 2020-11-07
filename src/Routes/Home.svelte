<script>
  import Layout from '../Components/Layout.svelte'
</script>

<style>
  li {
    list-style-position: outside;
  }
  li.post {
    list-style: '📓 ';
  }

  li.component {
    list-style: '⚙️ ';
  }
</style>

<Layout>
  <h1>Writing</h1>
  <h2>Code Reviews</h2>
  <ul>
    <li class="post">
      <a href="/code-review/like-a-junior">Reviewing Code like a Junior Engineer</a>
    </li>
  </ul>
  <h1>Component Demos</h1>
  <ul>
    <li class="component"><a href="/components/polaroid">Polaroid Demo</a></li>
  </ul>
</Layout>
