'use client'
import { ReactNode } from 'react';
import { IoClose } from 'react-icons/io5';

interface CreateBlogFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    size?: 'sm' | 'md' | 'lg';
}

const widthClasses: { [key: string]: string } = {
    sm: 'w-full max-w-sm',
    md: 'w-11/12 md:w-4/5 lg:w-2/3',
    lg: 'w-11/12 md:w-3/4 lg:w-3/5',
};

const CreateBlogFormModal = ({
    isOpen,
    onClose,
    children,
    size = 'md'
}: CreateBlogFormModalProps) => {
    const widthClass = widthClasses[size];

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className={`bg-white p-8 rounded relative flex flex-col overflow-hidden ${widthClass}`}
                style={{ maxWidth: '70%' }}>
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-medium">Create a New Blog Post</h2>
                    <button onClick={onClose} className="text-lg">
                        <IoClose /> {/* Display close icon */}
                    </button>
                </div>
                <div className="mt-4 overflow-y-auto" style={{ maxHeight: '75vh' }}>
                    <p className='text-gray-500 text-sm'>Enter your blog content here. Click save and you are done</p>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default CreateBlogFormModal;
