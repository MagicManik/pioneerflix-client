import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ManageVideosRow from './ManageVideosRow';

const ManageVideos = () => {
    const url = 'https://infinite-island-65121.herokuapp.com/uploadedVideo';
    const { data, refetch } = useQuery(['uploadedVideo'], () =>
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
    )
    // console.log(data);
    
    return (
        <div className=''>
            <div className="overflow-x-auto px-4 w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th className='bg-gray-300 text-[#125f82]'>Index</th>
                            <th className='bg-gray-300 text-[#125f82]'>Uploaded Video</th>
                            <th className='bg-gray-300 text-[#125f82]'>Uploader</th>
                            <th className='bg-gray-300 text-[#125f82]'>Upload by admin</th>
                            <th className='bg-gray-300 text-[#125f82]'>Odd Videos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((detail, index) => <ManageVideosRow
                            key={detail._id}
                            detail={detail}
                            index={index}
                            refetch={refetch}
                            ></ManageVideosRow>)
                        }
                    </tbody>
                    {/* <!-- foot --> */}
                    <tfoot>
                        <tr>
                            <th className='bg-gray-300 text-[#125f82]'>Index</th>
                            <th className='bg-gray-300 text-[#125f82]'>Uploaded Video</th>
                            <th className='bg-gray-300 text-[#125f82]'>Uploader</th>
                            <th className='bg-gray-300 text-[#125f82]'>Upload by admin</th>
                            <th className='bg-gray-300 text-[#125f82]'>Odd Videos</th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default ManageVideos;