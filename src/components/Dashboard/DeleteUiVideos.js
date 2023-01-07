import React from 'react';
// import { useQuery } from '@tanstack/react-query';
import DeleteUiVideoRow from './DeleteUiVideoRow';
import { useGetAllVideosQuery } from '../../services/post';
import Loading from '../Shared/Loading/Loading';

const DeleteUiVideos = () => {
    const { data, refetch, isLoading } = useGetAllVideosQuery();
    // console.log(data);

    if (isLoading) {
        return <Loading />
    }


    // const url = 'https://server-production-b237.up.railway.app/videos'
    // const { data, refetch } = useQuery(['videos'], () =>
    //     fetch(url, {
    //         method: 'GET',
    //         headers: {
    //             'content-type': 'application/json'
    //         }
    //     })
    //         .then(res => res.json())
    // );


    return (
        <div className="overflow-x-auto px-4 pt-6 w-full">
            <p className='text-xl text-green-500 font-bold'>Total videos in UI {data?.length}</p>
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th className='bg-gray-300 text-[#125f82]'>Index</th>
                        <th className='bg-gray-300 text-[#125f82]'>Video</th>
                        <th className='bg-gray-300 text-[#125f82]'>Category & Uploader</th>
                        <th className='bg-gray-300 text-[#125f82]'>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((detail, index) => <DeleteUiVideoRow
                            key={detail._id}
                            detail={detail}
                            index={index}
                            refetch={refetch}
                        ></DeleteUiVideoRow>)
                    }
                </tbody>
                {/* <!-- foot --> */}
                <tfoot>
                    <tr>
                        <th className='bg-gray-300 text-[#125f82]'>Index</th>
                        <th className='bg-gray-300 text-[#125f82]'>Video</th>
                        <th className='bg-gray-300 text-[#125f82]'>Uploader</th>
                        <th className='bg-gray-300 text-[#125f82]'>Remove</th>
                    </tr>
                </tfoot>

            </table>
        </div>
    );
};

export default DeleteUiVideos;