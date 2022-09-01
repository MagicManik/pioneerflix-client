import React from 'react';
import { toast } from 'react-toastify';
import { useDeleteUiVideoMutation } from '../../services/post';

const DeleteUiVideoRow = ({ detail, index, refetch }) => {
    const [deleteVideo, data] = useDeleteUiVideoMutation()
    // console.log(deleteVideo, data);

    const deleteUiVideo = (id) => {
        deleteVideo(id)
        refetch()
        toast.success(`${id} is deleted from UI`)

        // const url = `https://infinite-island-65121.herokuapp.com/uiVideo/${id}`;
        // fetch(url, {
        //     method: 'DELETE',
        //     headers: {
        //         'content-type': 'application/json'
        //     }
        // })

        //     .then(res => res.json())
        //     .then(result => {
        //         toast.success(`${id} is deleted from UI`)
        //         refetch()
        //     })
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
                <span className='text-black'>{detail?.title}</span>
            </td>
            <th>
                <button
                    className="btn btn-error btn-xs"
                    onClick={() => deleteUiVideo(detail._id)}
                >Delete</button>
            </th>
        </tr>
    );
};

export default DeleteUiVideoRow;