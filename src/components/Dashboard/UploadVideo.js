import React from 'react';
import { useForm } from 'react-hook-form';
import { FiUpload } from 'react-icons/fi';

const UploadVideo = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data, e) => {
        console.log(data);
        e.target.reset();

    };
    return (
        <div className='mb-20'>
            <div className='w-full mt-0'>
                <p className='section-title text-[20px] md:text-[30px]'>Upload your favorite video</p>
            </div>
            <div class="card mx-auto sm:w-[80%] md:w-[50%] bg-base-100 shadow-xl">
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                    <span className="text-green-500 inline-block">
                        <FiUpload className='inline-block mr-1' />
                    </span>
                </div>
                <div className="text-gray-700 w-[90%] mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                        <div className="">
                            <div className="w-full my-2">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Video Title
                                </label>
                                <textarea
                                    type="text"
                                    {...register("title")}
                                    required
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    placeholder="Title"
                                />
                                {errors?.name && (
                                    <p className="error">{errors.name.message}</p>
                                )}
                            </div>

                            <div className="w-full my-2">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Video Description
                                </label>
                                <textarea
                                    {...register("description")}
                                    required
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    type="text"
                                    placeholder="Description"
                                />
                            </div>
                            <div className="w-full my-2">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Select Type
                                </label>
                                <select
                                    {...register("category")}
                                    required
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    type="text"
                                    placeholder="Category"
                                >
                                    <option value=""></option>
                                    <option value="Drama">Drama</option>
                                    <option value="Bangla Movie">Bangla Movie</option>
                                    <option value="Hindi Movie">Hindi Movie</option>
                                    <option value="English Movie">English Movie</option>
                                    <option value="Funny Video">Funny Video</option>
                                    <option value="Educational">Educational</option>
                                    <option value="Kids Video">Kids Video</option>
                                </select>
                            </div>
                            <div className="w-full my-2">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Your Video Link
                                </label>
                                <input
                                    {...register("videoLink")}
                                    required
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    type="text"
                                    placeholder="Video Link"
                                />
                            </div>
                        </div>
                        <div className="flex  gap-5 -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Duration
                                </label>
                                <input
                                    {...register("duration")}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    type="text"
                                    placeholder="Video Duration"
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Image for Display
                                </label>
                                <input
                                    {...register("imgLink")}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    type="text"
                                    placeholder="Image Link"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="text-center block w-full text-primary text-md shadow font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
                        >
                            <span className="text-green-500 inline-block">
                                <FiUpload className='inline-block mr-1' />
                                Upload Video
                            </span>
                        </button>
                    </form>
                </div>
            </div>

        </div >
    );
};

export default UploadVideo;