'use client'
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { FiUploadCloud } from "react-icons/fi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


type Inputs = {
    title: string
    date: string
    slug: string
    image: File
    content: string
}
const CreateBlogForm = () => {


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        toast.success('Successfully added blog post')
        console.log(data)
    }

    const [count, setCount] = useState(100);

    const handleInput = (event: any) => {
        const inputLength = event.target.value.length;
        setCount(100 - inputLength);
    };
    return (
        <form className="mt-3 p-2" onSubmit={handleSubmit(onSubmit)}>
            <ToastContainer />
            <div>
                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-500">Blog Title</label>
                <input
                    type="text" id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:border-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Harry potter"
                    {...register("title", { required: true })}
                />
                {errors.title && <span className="text-red-500 text-xs mt-1">This field is required</span>}
            </div>
            <div className="mt-2">
                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-500">Blog Date</label>
                <input
                    type="date" id="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:border-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Harry potter"
                    {...register("date", { required: true })}
                />
                {errors.date && <span className="text-red-500 text-xs mt-1">This field is required</span>}
            </div>
            <div className="mt-2">
                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-500">Blog Slug</label>
                <input
                    type="text" id="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:border-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Harry potter"
                    {...register("slug", { required: true })}
                />
                {errors.slug && <span className="text-red-500 text-xs mt-1">This field is required</span>}
            </div>

            <div className="mt-2">
                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-500">Upload Image</label>
                <div className="relative flex flex-col items-center justify-center p-4 border-2 border-dashed border-black rounded-lg cursor-pointer">
                    <FiUploadCloud className="text-3xl text-gray-700 mb-2" />
                    <p className="text-xs text-gray-700">
                        Please upload images in 100x100 pixels size in either PNG or JPEG format
                    </p>
                    <input
                        type="file"
                        accept="image/*"
                        className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                        {...register("image", { required: "Image is required" })}
                    />
                    <span className="bg-blue-950 text-white text-sm font-bold py-2 px-4 rounded">Browse Files</span>

                </div>
                {errors.image && <span className="text-red-500 text-xs mt-1">{errors.image.message}</span>}
            </div>

            <div className="mt-2">
                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-500">Content</label>
                <textarea
                    id="content"
                    // rows="4"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter text (max 100 characters)"
                    {...register("content", { required: true })}
                    onInput={handleInput}
                />
                {errors.content && <span className="text-red-500 text-xs mt-1">This field is required</span>}
                <div className="text-sm text-gray-600 text-right mt-1">
                    {count}/100
                </div>
            </div>


            <div className="flex justify-end mt-2">
                <button
                    type="submit"
                    className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                    Save Changes
                </button>
            </div>
        </form>
    )
}

export default CreateBlogForm