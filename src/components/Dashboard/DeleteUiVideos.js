import React from 'react';
import DeleteUiVideoRow from './DeleteUiVideoRow';

const DeleteUiVideos = () => {
    let data;
    return (
        <div className="overflow-x-auto p-4 w-full">
            <table className="table w-full snap-none">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th className='bg-gray-300 text-[#125f82]'>Index</th>
                        <th className='bg-gray-300 text-[#125f82]'>Video</th>
                        <th className='bg-gray-300 text-[#125f82]'>Uploader</th>
                        <th className='bg-gray-300 text-[#125f82]'>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((detail, index) => <DeleteUiVideoRow
                            key={detail._id}
                            detail={detail}
                            index={index}
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