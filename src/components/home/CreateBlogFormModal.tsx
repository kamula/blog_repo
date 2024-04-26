'use client'
import { ReactNode } from 'react';
import { IoClose } from 'react-icons/io5';
import { useForm, SubmitHandler } from "react-hook-form"


type Size = 'sm' | 'md' | 'lg';
const widthClasses: { [key in Size]: string } = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
};

interface CreateBlogFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    size?: Size;
}

const CreateBlogFormModal = ({ isOpen, onClose, children, size = 'md' }: CreateBlogFormModalProps) => {
    const widthClass = widthClasses[size];

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className={`bg-white p-8 rounded ${widthClass} relative flex flex-col overflow-hidden`}>
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

export default CreateBlogFormModal