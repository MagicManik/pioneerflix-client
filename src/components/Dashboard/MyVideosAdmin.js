import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useTranslation } from 'react-i18next';
import auth from '../../firebase.init';
import { FcLike } from 'react-icons/fc';
import LoaderIOS from '../Shared/Loader/LoaderIOS';

const MyVideosAdmin = () => {
    const [user] = useAuthState(auth);
    const { t } = useTranslation("dashboard")

    const url = `https://pioneerflix-server.onrender.com/adminUploadVideo?email=${user?.email}`
    const { data, isLoading } = useQuery(['adminUploadVideo'], () =>
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
    )

    return (
        <div>
            <div className='w-full flex justify-center mt-0'>
                <p className='section-title text-green-500 text-[15px] md:text-[25px]'>{t("All of my videos")}</p>
            </div>
            {
                isLoading ?
                    <LoaderIOS />
                    :
                    <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 sm:gap-1 gap-4 mb-4'>
                        {
                            data?.map(movie =>
                                <div className='bg-black rounded-md h-auto'>
                                    <div className='zoom-div-I pb-2 pl-2 pt-6 pr-4 video-div' key={movie._id}>
                                        <img className='w-full' src={movie.imgLink} alt="" />
                                    </div>
                                    <div>
                                        <p className='test-xs md:text-xs lg:text-xs text-white'><span className='font-bold text-green-500 pl-2'>Description: </span>{movie?.description}</p>
                                        <p><FcLike className='my-2 ml-2 inline-block' />1.8M <span className='text-sm'> ({movie?.duration}min)</span></p>

                                    </div>
                                </div>
                            )
                        }
                    </div>
            }
        </div>
    );
};

export default MyVideosAdmin;