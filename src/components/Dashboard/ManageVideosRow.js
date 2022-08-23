import React from 'react';
import { toast } from 'react-toastify';

const ManageVideosRow = ({ detail, index, refetch }) => {
    // console.log(detail);

    const deleteVideo = (id) => {
        const url = `https://infinite-island-65121.herokuapp.com/uploadedVideo/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })

            .then(res => res.json())
            .then(result => {
                alert('Are You sure???')
                toast.success(`${id} is deleted`)
                refetch()
            })
            .then(res => res.json())
            .then(result => {
                alert('Are You sure???')
                toast.success(`${id} is deleted`)
                refetch()
            })
    }

    return (
        <tr>
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
                        <a href={detail?.videoLink} className='text-black' target="_blank" alt=''>{detail?.videoLink}</a>
                    </div>
                </div>
            </td>

            <td>
                <span className='text-black'>{detail?.uploader}</span>
            </td>
            <td>
                <button
                    className="btn btn-success btn-xs"
                >Final Upload</button>
            </td>
            <th>
                <button
                    className="btn btn-error btn-xs"
                    onClick={() => deleteVideo(detail._id)}
                >Delete</button>
            </th>
        </tr>
    );
};

export default ManageVideosRow;