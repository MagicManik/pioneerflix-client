import React from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useDeleteUiVideoMutation } from '../../services/post';

const DeleteUiVideoRow = ({ detail, index, refetch }) => {
    const [deleteVideo, data] = useDeleteUiVideoMutation();
    const MySwal = withReactContent(Swal)

    const deleteUiVideo = (id) => {
        // using redux
        deleteVideo(id)
        refetch()
        toast.success(`${id} is deleted from UI`)
        MySwal.fire({
            title: <strong>The video has been deleted!</strong>,
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
        })

        // else {
        //     toast.error(`${id} is not deleted from UI`)
        // }


        // const url = `https://server-production-b237.up.railway.app/uiVideo/${id}`;
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
                        <a href={detail?.videoLink} className='text-black' target="_blank" alt=''>{detail?.title.slice(0, 25)}</a>
                    </div>
                </div>
            </td>
            <td>
                <span className='text-black'>{detail?.category}</span><br />
                <span className='text-black'>{detail?.uploader}</span>
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