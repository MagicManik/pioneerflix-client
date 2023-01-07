import { useQuery } from '@tanstack/react-query';
import React from 'react';
import DeleteUiVideos from './DeleteUiVideos';
import ManageVideosRow from './ManageVideosRow';

const ManageVideos = () => {
    const url = 'https://server-production-b237.up.railway.app/uploadedVideo';
    const { data, refetch } = useQuery(['uploadedVideo'], () =>
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
    )
    refetch();

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
            <DeleteUiVideos />
        </div>
    );
};

export default ManageVideos;