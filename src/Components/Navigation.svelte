<script>
  import ThemePicker from './ThemePicker.svelte'
  import Link from './Link.svelte'

  const toggleTerminal = () => {
    const cl = document.getElementById('body').classList
    if (cl.contains('terminal')) {
      cl.remove('terminal')
    } else {
      cl.add('terminal')
    }
  }
</script>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    font-weight: bolder;

    padding: 16px 0;
  }

  @media print {
    nav {
      display: none;
    }
  }

  button {
    padding: 0 16px;
    border: none;
    background: none;
  }
</style>

<nav>
  <div class="left-nav">
    <Link href="/">Home</Link>
  </div>
  <div class="right-nav">
    <Link href="/about">About</Link>
    <ThemePicker />
    <button on:click={toggleTerminal}>💻</button>
  </div>
</nav>
