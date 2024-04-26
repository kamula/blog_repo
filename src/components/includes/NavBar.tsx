import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
    return (
        <nav className='bg-slate-200'>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4 mx-auto">
                <div className="flex items-center">
                    <Link href="/" passHref>
                        <Image
                            src="/logo.svg"
                            width={150}
                            height={150}
                            alt="Blog logo"
                            style={{ cursor: 'pointer' }} // Added cursor style
                        />
                    </Link>
                </div>
                <div className="hidden md:flex space-x-4 items-center">
                    <Link href="/blogs">
                        <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Blogs</span>
                    </Link>
                    <div>
                        <input type="text" placeholder="Search blogs..." className="px-2 py-1 border rounded" />
                    </div>
                    <Link href="/blogs/create">
                        <span className="bg-gray-500 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded cursor-pointer">
                            Create Blog Post
                        </span>
                    </Link>
                </div>
                <div className="md:hidden">
                    <button aria-label="Open Menu" className="text-gray-700 hover:text-gray-900 focus:outline-none focus:shadow-outline">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
