'use client'
import Link from 'next/link';
import useSearchStore from '@/utils/store/useSearchStore';
import blogPosts from '../data/blogData'
import BlogCard from '@/components/blog/BlogCard'
import Pagination from '@/components/home/Pagination';
import { useEffect, useState } from 'react';
import { filterPosts } from '@/utils/filterUtils';

const HomePage = () => {
  const { searchQuery } = useSearchStore();
  const [filteredPosts, setFilteredPosts]: any = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    setFilteredPosts(filterPosts(blogPosts, searchQuery));
  }, [searchQuery]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className='container mx-auto'>
      <div className="flex flex-col p-5">
        <h5 className='font-bold text-3xl'>The Accessibility Blog</h5>
        <p>The voice of the excluded</p>
      </div>
      <div className="w-full p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        {
          filteredPosts && filteredPosts.map((item: any) => (
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
      <div className="flex justify-center py-2">
        <Pagination postsPerPage={postsPerPage} totalPosts={filteredPosts.length} paginate={paginate} />
      </div>
    </div>
  )
}

export default HomePage