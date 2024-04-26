'use client'
import Link from 'next/link'
import BlogCard from '@/components/blog/BlogCard'
import blogPosts from '../../data/blogData'
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

const BlogHomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [filteredPostsCount, setFilteredPostsCount] = useState(0);


  const handleSearch = (event: any) => {
    const value = event.target.value.toLowerCase();
    setSearchQuery(value);
    const filtered = blogPosts.filter(post =>
      post.title.toLowerCase().includes(value) ||
      post.content.toLowerCase().includes(value)
    );
    setFilteredPosts(filtered);
    setFilteredPostsCount(filteredPosts.length);

  };

  return (
    <div className='mx-auto mt-2'>
      <div className="p-5">
        <Link href='/' className='text-lg'>
          <div className="flex items-center text-lg no-underline text-black hover:text-gray-600 font-bold">
            <span className="mr-2">&larr;</span>
            Back to blog posts
          </div>
        </Link>
      </div>
      <div className="p-5 text-center">
        <h5 className='text-2xl font-bold'>Search Blogs</h5>
        <div className="relative w-80 mx-auto py-2">
          <input
            type="text"
            className="pl-3 pr-10 py-1 border border-black rounded w-full"
            onChange={handleSearch}
            value={searchQuery}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 pointer-events-none">
            <FaSearch />
          </div>
        </div>
        {
          searchQuery ?
            <div className="font-bold">
              {`Showing ${filteredPostsCount} of "${searchQuery}"`}
            </div> :
            <></>
        }
      </div>
      <div className="w-full p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        {
          filteredPosts && filteredPosts.map((item) => (
            <Link key={item.id} href={`/blogs/${item.slug}`} className="w-full">
              <BlogCard
                title={item.title}
                date={item.date}
                briefExcerpt={item.briefExcerpt}
                image={item.image}
              />
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default BlogHomePage;
