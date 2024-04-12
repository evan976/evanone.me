import Link from 'next/link'

import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  const allPosts = getBlogPosts()

  return (
    <div>
      {allPosts
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1
          } else {
            return 1
          }
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex items-center flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 text-sm dark:text-neutral-400 w-20 tabular-nums">
                {formatDate(post.metadata.publishedAt, true)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))
      }
    </div>
  )
}
