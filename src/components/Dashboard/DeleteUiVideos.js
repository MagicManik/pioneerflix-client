import React from 'react';
import { useQuery } from '@tanstack/react-query';
import DeleteUiVideoRow from './DeleteUiVideoRow';

const DeleteUiVideos = () => {

    const url = 'http://localhost:5000/videos'
    const { data, refetch } = useQuery(['videos'], () =>
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
    );

    return (
        <div className="overflow-x-auto px-4 pt-6 w-full">
            <p className='text-xl text-green-500 font-bold'>Total videos in UI {data?.length}</p>
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th className='bg-gray-300 text-[#125f82]'>Index</th>
                        <th className='bg-gray-300 text-[#125f82]'>Video</th>
                        <th className='bg-gray-300 text-[#125f82]'>Title</th>
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
                        <th className='bg-gray-300 text-[#125f82]'>Title</th>
                        <th className='bg-gray-300 text-[#125f82]'>Remove</th>
                    </tr>
                </tfoot>

            </table>
        </div>
    );
};

export default DeleteUiVideos;