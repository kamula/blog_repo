'use client'
import Link from 'next/link';
import Image from 'next/image';
import useSearchStore from '../../utils/store/useSearchStore';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import CreateBlogFormModal from '../home/CreateBlogFormModal';
import CreateBlogForm from '../home/CreateBlogForm';

const NavBar = () => {
    const { searchQuery, setSearchQuery } = useSearchStore();
    const [isModalOpen, setModalOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='bg-slate-200 relative w-full'>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4 mx-auto">
                {/* Logo and Hamburger Menu always visible */}
                <div className="flex items-center justify-start">

                    <Link href="/" passHref>
                        <Image
                            src="/logo.svg"
                            width={150} // Reduced size for small screens
                            height={150}
                            alt="Blog logo"
                            style={{ cursor: 'pointer' }} // Keep cursor pointer style directly on the image
                        />
                    </Link>
                </div>

                {/* Search Input and Creation Button - visible on medium and larger screens */}
                <div className="hidden md:flex space-x-4 items-center">
                    <Link href="/blogs" passHref>
                        <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Blogs</span>
                    </Link>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search blogs..."
                            className="px-2 py-1 border border-black rounded w-full pl-3 pr-10"
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                        >
                            <FaSearch />
                        </button>
                    </div>
                    <button
                        onClick={() => setModalOpen(true)}
                        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Create Blog Post
                    </button>
                </div>

                {/* Search Input for small screens */}
                <div className="flex-1 md:hidden">
                    <input
                        type="text"
                        placeholder="Search blogs..."
                        className="px-2 py-1 border border-black rounded w-full"
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="md:hidden mr-2">
                    <button onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close Menu" : "Open Menu"} className="text-gray-700 hover:text-gray-900 focus:outline-none focus:shadow-outline">
                        {menuOpen ? (
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>


                {menuOpen && (
                    <ul className="absolute bg-white shadow-lg rounded-lg p-5 top-full right-0 left-0 z-10 flex flex-col">
                        <li className="p-2">
                            <Link href="/blogs" passHref>
                                <div className="text-gray-700 hover:text-gray-900 cursor-pointer">Blogs</div>
                            </Link>
                        </li>
                        <li className="p-2">
                            <button
                                onClick={() => { setModalOpen(true); setMenuOpen(false); }}
                                className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                            >
                                Create Blog Post
                            </button>
                        </li>
                    </ul>
                )}

            </div>
            <CreateBlogFormModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <CreateBlogForm />
            </CreateBlogFormModal>
        </nav>
    );
};

export default NavBar;
