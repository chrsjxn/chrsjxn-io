<script>
</script>

<style>
  h1 {
    font-size: 24pt;
    line-height: 36pt;
    margin: 0;
    margin-top: 16px;
  }

  .content {
    font-size: 14pt;
    line-height: 22pt;
  }
</style>

<article>
  <h1>
    <slot name="title" />
  </h1>
  <div class="content">
    <slot name="content" />
  </div>
</article>
