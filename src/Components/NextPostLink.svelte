<script>
  import Link from './Link.svelte'
  export let nextPost = null
</script>

<style>
  .title {
    color: var(--primary-color);
  }
</style>

{#if nextPost}
  <div class="text-m">
    <Link href={nextPost.path}>
      <b>Continue reading:</b><br /><span class="title">{nextPost.title}
        ({nextPost.date})</span>
    </Link>
  </div>
{/if}
