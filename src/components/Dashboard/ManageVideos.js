import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';

const ManageVideos = () => {
    const url = 'http://localhost:5000/uploadedVideo';
    const { data, refetch } = useQuery(['uploadedVideo'], () =>
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
    )
    console.log(data);
    const deleteVideo = (id) => {
        const url = `http://localhost:5000/uploadedVideo/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res=> res.json())
        .then(result => {
            alert('Are You sure???')
            toast.success(`${id} is deleted`)
            refetch()
        })
    }

    return (
        <div>
            <div className="overflow-x-auto w-full">
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
                            data?.map((detail, index) => <tr key={detail._id}>
                                <td>
                                    <span className='text-primary'>{index + 1}</span>
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={detail?.imgLink} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <a href={detail?.videoLink} className='text-primary' target="_blank" alt=''>{detail?.videoLink}</a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className='text-primary'>{detail?.uploader}</span>
                                </td>
                                <td>
                                    <button 
                                    className="btn btn-success btn-xs"
                                    >Final Upload</button>
                                </td>
                                <th>
                                    <button 
                                    className="btn btn-error btn-xs"
                                    onClick={()=>deleteVideo(detail._id)}
                                    >Delete</button>
                                </th>
                            </tr>)
                        }
                        <tr>

                        </tr>
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