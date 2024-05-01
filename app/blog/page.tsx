import { BlogPosts } from 'components/posts'

export const metadata = {
  title: '博客',
  description: '我的博客',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">最近发布</h1>
      <BlogPosts />
    </section>
  )
}
