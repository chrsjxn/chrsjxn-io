<script>
  import { Layout, Link } from '../Components'
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
      <Link href="/code-review/three-tips">
        Three tips to be a better code reviewer today
      </Link>
    </li>
    <li class="post">
      <Link href="/code-review/like-a-junior">
        Reviewing code like a junior engineer
      </Link>
    </li>
  </ul>
  <h2>Web Technology</h2>
  <ul>
    <li class="component">
      <Link href="/components/theme-store">
        Building a simple theme store with Svelte
      </Link>
    </li>
    <li class="component">
      <Link href="/components/polaroid">Polaroid demo</Link>
    </li>
  </ul>
</Layout>
