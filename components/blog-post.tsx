import Link from 'next/link'

import { Card } from 'components/card'
import { getBlogPosts } from 'lib/post'
import { formatDate } from 'lib/utils'

export default function BlogPost() {
  const allPosts = getBlogPosts()

  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 mt-12 max-sm:px-4">
      {allPosts
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1
          } else {
            return 1
          }
        })
        .map((post) => (
          <Card key={post.slug} asChild>
            <Link href={`/blog/${post.slug}`}>
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold text-title">{post.metadata.title}</h1>
                <time
                  dateTime={post.metadata.publishedAt}
                  className="text-span text-sm"
                >
                  {formatDate(post.metadata.publishedAt, true)}
                </time>
              </div>
              <p className="text-text mt-5 text-ellipsis">{post.metadata.summary}</p>
            </Link>
          </Card>
        ))
      }
    </div>
  )
}
