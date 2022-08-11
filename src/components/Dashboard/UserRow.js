import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ ud, index, refetch }) => {
    const { profileEmail, profileName, role } = ud;

    const makeAdmin = () => {
        const url = `http://localhost:5000/allUserData/admin/${profileEmail}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                refetch();
                toast.success(`${profileName} has successfully become a admin`)
            })
    };

    const removeAdmin = () => {
        
    };

    return (
        <tr className='text-black'>
            <td>{index + 1}</td>
            <td>{profileName}</td>
            <td>{profileEmail}</td>
            <td className="text-center">
                {role !== "admin" && <button
                    onClick={makeAdmin}
                    className={`btn btn-xs btn-success hover:text-white rounded-full}`}
                >
                    Make admin
                </button>}
            </td>
            <td className="text-center">
                <button
                    onClick={removeAdmin}
                    className={`btn btn-xs btn-error hover:text-white rounded-full}`}
                >
                    Remove
                </button>
            </td>
        </tr>
    );
};

export default UserRow;