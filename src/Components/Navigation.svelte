<script>
  import ThemePicker from './ThemePicker.svelte'
  import Link from './Link.svelte'
</script>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    font-weight: bolder;

    padding: 16px 0;
  }
</style>

<nav>
  <div class="left-nav">
    <Link href="/">Home</Link>
  </div>
  <div class="right-nav">
    <Link href="/about">About</Link>
    <ThemePicker />
  </div>
</nav>
