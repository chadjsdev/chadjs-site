import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { format } from 'date-fns'

export const metadata = {
  title: 'Blog - Chad Scoville',
  description: 'Insights on DevSecOps, cloud security, federal compliance, and government contracting.',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Blog
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Insights on DevSecOps, cloud security, federal compliance, and government contracting
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Blog posts coming soon! Check back later for insights on DevSecOps, 
              CMMC compliance, and cloud security.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-x-4 text-xs mb-4">
                    <time dateTime={post.date} className="text-gray-500">
                      {format(new Date(post.date), 'MMMM d, yyyy')}
                    </time>
                    {post.category && (
                      <span className="relative z-10 rounded-full bg-primary-50 px-3 py-1.5 font-medium text-primary-600">
                        {post.category}
                      </span>
                    )}
                  </div>
                  <div className="group relative">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-3 text-gray-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="mt-4">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-semibold text-primary-600 hover:text-primary-700"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
