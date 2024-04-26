import Link from 'next/link'
import blogPosts from '../data/blogData'
import BlogCard from '@/components/blog/BlogCard'

const HomePage = () => {
  return (
    <div className='container mx-auto'>
      <div className="flex flex-col p-5">
        <h5 className='font-bold text-3xl'>The Accessibility Blog</h5>
        <p>The voice of the excluded</p>
      </div>
      <div className="w-full p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        {
          blogPosts && blogPosts.map((item) => (
            <Link key={item.id} href={`/blogs/${item.slug}`} className="w-full">
              <BlogCard
                title={item.title}
                date={item.date}
                briefExcerpt={item.briefExcerpt}
                image={item.image} />
            </Link>
          ))
        }
      </div>

    </div>
  )
}

export default HomePage