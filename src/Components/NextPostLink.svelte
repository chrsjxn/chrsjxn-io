<script>
  import Link from './Link.svelte'
  export let nextPost = null

</script>

<style>
  .title {
    color: var(--primary-color);
  }

  div {
    margin-bottom: 2.5rem;
  }

  @media print {
    div {
      display: none;
    }
  }

</style>

{#if nextPost}
  <div>
    <Link href={nextPost.path}>
      <b>Continue reading:</b><br /><span class="title">{nextPost.title}
        ({nextPost.date})</span>
    </Link>
  </div>
{/if}
