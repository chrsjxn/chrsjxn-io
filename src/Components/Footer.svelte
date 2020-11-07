<script>
  const currentYear = new Date().getFullYear()
</script>

<style>
  .wrapper {
    position: fixed;
    padding: 10px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--background-color);
  }

  .content {
    width: clamp(20ch, 75%, 80ch);
    margin: auto;
  }
</style>

<div class="wrapper">
  <div class="content">
    © Chris Jackson
    {currentYear}
    -
    <a
      href="https://github.com/chrsjxn/chrsjxn-io"
      target="_blank"
      rel="noopener noreferrer">src</a>
    -
    <a
      href="https://twitter.com/c_jackson_js"
      target="_blank"
      rel="noopener noreferrer">twitter</a>
    - Be kind!
  </div>
</div>
