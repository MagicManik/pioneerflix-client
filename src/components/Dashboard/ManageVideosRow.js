import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const ManageVideosRow = ({ detail, index, refetch }) => {
    const [user] = useAuthState(auth);

    const finalUploadVideo = (id) => {
        const video = {
            id: id,
            title: detail?.title,
            description: detail?.description,
            category: detail?.category,
            videoLink: detail?.videoLink,
            duration: detail?.duration,
            imgLink: detail?.imgLink,
            finalUploader: user?.email,
            uploader: detail?.uploader,
            adminName: detail?.displayName,
            adminImg: detail?.photoURL
        }

        const url = `http://localhost:5000/finalUploadByAdmin`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(video)
        })
            .then(res => res.json())
            .then(result => {
                toast.success(`Successfully the video uploaded in UI`)
                localStorage.setItem("notificationMode", "true");
                const url = `http://localhost:5000/uploadedVideo/${id}`;
                fetch(url, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    }
                })

                    .then(res => res.json())
                    .then(result => {
                        refetch()
                    })
            })
    }

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
                    onClick={() => finalUploadVideo(detail._id)}
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