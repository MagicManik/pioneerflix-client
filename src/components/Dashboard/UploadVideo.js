import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FiUpload } from 'react-icons/fi';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import { useUploadByAdminMutation } from '../../services/post';

const UploadVideo = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const [uploadVideo, data] = useUploadByAdminMutation()
    const MySwal = withReactContent(Swal)

    const { t } = useTranslation(["dashboard"])

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data, e) => {
        const userUploadVideo = {
            title: data.title,
            description: data.description,
            category: data.category,
            videoLink: data.videoLink,
            duration: data.duration,
            imgLink: data.imgLink,
            uploader: user.email,
            adminName: user?.displayName,
            adminImg: user?.photoURL
        }

        if (admin) {
            // using redux
            uploadVideo(userUploadVideo)
            toast.success('Successfully your video uploaded!!!')
            localStorage.setItem("notificationMode", "true");
            e.target.reset();
            MySwal.fire({
                title: <strong>Wow. Good job!</strong>,
                html: <i className='text-xl font-semibold text-green-500'>Successfully your video uploaded!!!</i>,
                icon: 'success'
            })

            // const url = 'https://pioneerflix-server.onrender.com/adminUploadVideo';
            // fetch(url, {
            //     method: 'POST',
            //     headers: {
            //         'content-type': 'application/json'
            //     },
            //     body: JSON.stringify(userUploadVideo)
            // })
            //     .then(res => res.json())
            //     .then(result => {
            //         alert('Thanks for uploading')
            //         toast.success('Successfully your video uploaded!!!')
            //         localStorage.setItem("notificationMode", "true");
            //         e.target.reset();
            //     })
        }
        else {
            const url = 'https://pioneerflix-server.onrender.com/userUploadVideo';
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userUploadVideo)
            })
                .then(res => res.json())
                .then(result => {
                    toast.success('Successfully your video uploaded!!!')
                    localStorage.setItem("notificationMode", "true");
                    e.target.reset();
                    MySwal.fire({
                        title: <strong>Wow. Good job!</strong>,
                        html: <i className='text-xl font-semibold text-green-500'>Successfully your video uploaded!!!</i>,
                        icon: 'success'
                    })
                })
        }
    };

    return (
        <div className='mb-20'>
            <div className='w-full mx-auto flex mt-0'>
                <p className='section-title text-green-500 text-[15px] md:text-[25px]'>{t("Upload your favorite video")}</p>
            </div>
            <div className="card mx-auto sm:w-[80%] md:w-[50%] bg-base-100 shadow-xl">
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
                                    <option value="Bangla Movie">Bangla Movie</option>
                                    <option value="Hindi Movie">Hindi Movie</option>
                                    <option value="South Indian Movie">South Indian Movie</option>
                                    <option value="English Movie">English Movie</option>
                                    <option value="Exclusive Movies">Exclusive Movies</option>
                                    <option value="Kids Video">Kids Video</option>
                                    <option value="Most Popular">Most Popular</option>
                                    <option value="Popular Movies">Popular Movies</option>
                                    <option value="Popular Web Series">Popular Web Series</option>
                                    <option value="Bangla Song">Bangla Song</option>
                                    <option value="Hindi Song">Hindi Song</option>
                                    <option value="English Song">English Song</option>
                                    <option value="Comedy">Comedy</option>
                                    <option value="Educational">Educational</option>
                                    <option value="Live Games">Live Games</option>
                                    <option value="Music">Music</option>
                                    <option value="Thriller">Thriller</option>
                                    <option value="Detective">Detective</option>
                                    <option value="Latest">Latest</option>
                                    <option value="Clips">Clips</option>
                                    <option value="Free">Free</option>
                                    <option value="National Award Winning">National Award Winning</option>
                                    <option value="Just Added">Just Added</option>
                                    <option value="Upcoming">Upcoming</option>
                                    <option value="Drama">Drama</option>
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