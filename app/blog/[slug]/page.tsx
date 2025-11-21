import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { format } from 'date-fns'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} - Chad Scoville`,
    description: post.excerpt,
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="bg-white py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to blog
        </Link>

        <header className="mb-8">
          <div className="flex items-center gap-x-4 text-sm mb-4">
            <time dateTime={post.date} className="text-gray-500">
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </time>
            {post.category && (
              <span className="relative z-10 rounded-full bg-primary-50 px-3 py-1.5 font-medium text-primary-600">
                {post.category}
              </span>
            )}
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="mt-4 text-xl text-gray-600">
              {post.excerpt}
            </p>
          )}
        </header>

        <div
          className="prose prose-lg prose-primary max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all posts
          </Link>
        </footer>
      </div>
    </article>
  )
}
