import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";
import auth from '../../firebase.init';
import { useUpdateUserProfileMutation } from '../../services/post';
import Loading from '../Shared/Loading/Loading';
import SingleProfile from './SingleProfile';
import SingleProfilePic from './SingleProfilePic';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [isEdit, setIsEdit] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [updateUserProfile, userData] = useUpdateUserProfileMutation()
    console.log(userData, userData.status);
    const MySwal = withReactContent(Swal)

    const url = `https://infinite-island-65121.herokuapp.com/userProfile?email=${user?.email}`
    const { data, isLoading, refetch } = useQuery(['userProfile'], () =>
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
    )

    if (isLoading) {
        refetch();
        <Loading></Loading>
    }
    const updatedProfileData = data;
    const onSubmit = (data, e) => {
        const imgStorageKey = "d92a7867dc5f803eaff37ac866069fb5";
        const image = e.target.photo.files[0];
        const formData = new FormData();
        formData.append("image", image);


        fetch(`https://api.imgbb.com/1/upload?key=${imgStorageKey}`, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((result) => {
                // if img upload success then upload data in data base 
                if (result.success) {
                    const image = result.data.url;
                    const userProfile = {
                        profileName: data.name,
                        gender: data.gender,
                        education: data.education,
                        phone: data.phone,
                        address: data.address,
                        profileImage: image,
                        profileEmail: user.email,
                    }
                    // using redux
                    updateUserProfile(userProfile)
                    if (userData?.status === 'fulfilled') {
                        e.target.reset();
                        refetch();
                        toast.success('Your profile updated successfully!!!')
                        MySwal.fire({
                            title: <strong>Wow. Good job!</strong>,
                            html: <i className='text-xl text-green-500'>Successfully updated your profile</i>,
                            icon: 'success'
                        })
                    }

                    // const url = `https://infinite-island-65121.herokuapp.com/userProfile/${user?.email}`
                    // fetch(url, {
                    //     method: 'PUT',
                    //     headers: {
                    //         'content-type': 'application/json'
                    //     },
                    //     body: JSON.stringify(userProfile)
                    // })
                    //     .then(res => res.json())
                    //     .then(result => {
                    //         // console.log(result);
                    //         toast.success('Your profile updated successfully!!!')
                    //         e.target.reset();
                    //         refetch();
                    //     })
                }

                else {
                    toast.error('Please give your photo .')
                }
            })
    };
    return (
        <div className="container w-full mx-auto p-5 lg:p-10 mb-40">
            <div className="md:flex w-full no-wrap md:-mx-2">
                {
                    updatedProfileData?.map(pd => <SingleProfilePic
                        key={pd._id}
                        pd={pd}
                        refetch={refetch}
                    ></SingleProfilePic>)
                }
                <div className="grid grid-cols-1 w-full">
                    <div className="w-full my-4 h-64  border-t-4 border-[#125f82]">
                        {
                            updatedProfileData?.map(pd => <SingleProfile
                                key={pd._id}
                                pd={pd}
                                refetch={refetch}
                                setIsEdit={setIsEdit}
                            ></SingleProfile>)
                        }

                    </div>
                    <div className="my-4"></div>
                    <div
                        className={`${isEdit ? "block" : "hidden"} bg-white w-full border-t-4 border-[#125f82] mx-auto p-5 my-5 mt-16 rounded-br-lg rounded-bl-lg shadow-sm rounded-sm relative`}
                    >
                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                            <span className="text-green-500">
                                <svg
                                    className="h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </span>
                            <span className="tracking-wide">Edit</span>
                            <button
                                onClick={() => setIsEdit(false)}
                                className="btn btn-primary btn-sm btn-circle absolute right-2 top-2"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="text-gray-700 w-full">
                            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                                <div className="flex gap-5 -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            {...register("name", {
                                                minLength: {
                                                    value: 4,
                                                    message: "Minimum Four Characters",
                                                },
                                            })}
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            placeholder="Your Name"
                                        />
                                        {errors?.name && (
                                            <p className="error">{errors.name.message}</p>
                                        )}
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Gender
                                        </label>
                                        <select
                                            {...register("gender")}
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            type="text"
                                            placeholder="Gender"
                                        >
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex gap-5 -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Education
                                        </label>
                                        <input
                                            {...register("education")}
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            type="text"
                                            placeholder="Education"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Contact No.
                                        </label>
                                        <input
                                            {...register("phone")}
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            type="number"
                                            placeholder="Contact No."
                                        />
                                    </div>
                                </div>
                                <div className="flex  gap-5 -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Address
                                        </label>
                                        <input
                                            {...register("address")}
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            type="text"
                                            placeholder="Address"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Image URL
                                        </label>
                                        <input
                                            {...register("image")}
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            type="file"
                                            name='photo'
                                            placeholder="Your Image Link"
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="text-center block w-full text-primary text-md shadow font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
                                >
                                    Save Changes
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MyProfile;
