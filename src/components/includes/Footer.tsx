import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    const date = new Date()
    return (
        <div className='bg-slate-200'>
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
                <div className='hidden md:flex space-x-4 items-center'>
                    <p className='font-bold'>
                        Copyright @ {date.getFullYear()}. BlogPost
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer