import AddingMarkdownToSvelte from '../Routes/AddingMarkdownToSvelte.svelte'
import ThemePickerDemo from '../Routes/ThemePickerDemo.svelte'
import ThreeTipsReview from '../Routes/ThreeTipsReview.svelte'
import PolaroidDemo from '../Routes/PolaroidDemo.svelte'
import ReviewingCodeLikeAJunior from '../Routes/ReviewingCodeLikeAJunior.svelte'

export const posts = [
  {
    title: 'Building a blog with Svelte: Adding Markdown',
    date: '11/25/2020',
    path: '/svelte/adding-markdown',
    component: AddingMarkdownToSvelte,
    external:
      'https://dev.to/chrsjxn/building-a-blog-with-svelte-adding-markdown-17k1',
  },
  {
    title: 'Building a simple theme store with Svelte',
    date: '11/18/2020',
    path: '/svelte/theme-store',
    component: ThemePickerDemo,
    external:
      'https://dev.to/chrsjxn/building-a-simple-theme-store-with-svelte-9bo',
  },
  {
    title: 'Three tips to be a better code reviewer today',
    date: '11/13/2020',
    path: '/code-review/three-tips',
    component: ThreeTipsReview,
    external:
      'https://dev.to/chrsjxn/three-tips-to-be-a-better-code-reviewer-today-4g2j',
  },
  {
    title: 'Polaroid component demo',
    date: '11/05/2020',
    path: '/components/polaroid',
    component: PolaroidDemo,
  },
  {
    title: 'Reviewing code like a junior engineer',
    date: '11/05/2020',
    path: '/code-review/like-a-junior',
    component: ReviewingCodeLikeAJunior,
  },
]