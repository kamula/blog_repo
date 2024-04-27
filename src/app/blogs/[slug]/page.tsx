'use client'
import Link from 'next/link';
import Image from 'next/image';
import blogPosts from '../../../data/blogData';
import { useEffect, useState } from 'react';
import { formatDate } from '@/utils/formatDate';

interface BlogPost {
    id: number;
    title: string;
    date: string;
    slug: string;
    image: string;
    briefExcerpt: string;
    content: string;
}

const BlogDetailspage = ({ params }: { params: { slug: string } }) => {
    const { slug } = params;
    const [blog, setBlog] = useState<BlogPost>();

    useEffect(() => {
        // get single blog using slug
        const blogPost = blogPosts.find(post => post.slug === slug);
        if (blogPost) {
            setBlog(blogPost);
        }
    }, [slug]);

    if (!blog) {
        return <p>Loading...</p>;
    }


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
            {blog &&
                <div className="p-5">
                    <div className="text-center">
                        <h5 className='text-4xl font-bold'>{blog.title}</h5>
                        <p className='text-sm font-medium py-2'>{formatDate(blog.date)} . 5 min Read</p>
                    </div>
                    <div className='w-full flex justify-center items-center bg-slate-200 py-3'>
                        <Image
                            src={blog.image}
                            width={500}
                            height={500}
                            alt={blog.title}
                            objectFit='cover'
                            className='object-cover'
                        />
                    </div>
                    <div>
                        <p>
                            {blog.content}
                            {blog.content}
                            {blog.content}
                            {blog.content}
                            {blog.content}
                            {blog.content}
                            {blog.content}
                            {blog.content}
                        </p>

                    </div>
                </div>
            }


        </div>
    );
};

export default BlogDetailspage;
