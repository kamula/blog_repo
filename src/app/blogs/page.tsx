'use client'
import Link from 'next/link'
import BlogCard from '@/components/blog/BlogCard'
import blogPosts from '../../data/blogData'
import { FaSearch } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { filterPosts } from '../../utils/filterUtils';
import useSearchStore from '@/utils/store/useSearchStore';
import Pagination from '@/components/home/Pagination';

const BlogHomePage = () => {
  const { searchQuery, setSearchQuery } = useSearchStore();
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [filteredPostsCount, setFilteredPostsCount] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);




  useEffect(() => {
    const filtered = filterPosts(blogPosts, searchQuery);
    setFilteredPosts(filtered);
    setFilteredPostsCount(filtered.length);
  }, [searchQuery]);

  const handleSearch = (event: any) => {
    setSearchQuery(event.target.value);
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
      <div className="flex justify-center py-2">
        <Pagination postsPerPage={postsPerPage} totalPosts={filteredPosts.length} paginate={paginate} />
      </div>
    </div>
  )
}

export default BlogHomePage;
