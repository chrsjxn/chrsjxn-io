import AddingMarkdownToSvelte from '../Routes/AddingMarkdownToSvelte.svelte'
import CodeSplittingInSvelte from '../Routes/CodeSplittingInSvelte.svelte'
import ThemePickerDemo from '../Routes/ThemePickerDemo.svelte'
import ThreeTipsReview from '../Routes/ThreeTipsReview.svelte'
import PolaroidDemo from '../Routes/PolaroidDemo.svelte'
import ReviewingCodeLikeAJunior from '../Routes/ReviewingCodeLikeAJunior.svelte'
import WritingCodeReviewFeedback from '../Routes/WritingCodeReviewFeedback.svelte'
import CloudinarySupport from '../Routes/CloudinarySupport.svelte'
import E2ETestProsAndCons from '../Routes/E2ETestProsAndCons.svelte'

export const posts = [
  {
    title: 'End-to-End Testing: Pros and Cons',
    date: '01/20/2021',
    path: '/testing/e2e-pros-and-cons',
    component: E2ETestProsAndCons,
    external: '',
  },
  {
    title: 'Building a blog with Svelte: Fetching images via CDN',
    date: '12/16/2020',
    path: '/svelte/images-via-cdn',
    component: CloudinarySupport,
    external: '',
  },
  {
    title: "Do's and don't's of writing code review feedback",
    date: '12/9/2020',
    path: '/code-review/writing-feedback',
    component: WritingCodeReviewFeedback,
    external:
      'https://dev.to/chrsjxn/do-s-and-don-t-s-of-writing-code-review-feedback-2lcm',
  },
  {
    title: 'Building a blog with Svelte: Code splitting',
    date: '12/2/2020',
    path: '/svelte/code-splitting',
    component: CodeSplittingInSvelte,
    external:
      'https://dev.to/chrsjxn/building-a-blog-with-svelte-code-splitting-1mdi',
  },
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
