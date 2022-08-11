import React from 'react';

const UserRow = ({ ud }) => {
    const { profileEmail, profileName, _id} = ud;

    const handleMakeAdmin = (id) => {
        console.log(id);
    };

    return (
        <tr className='text-black'>
            <td>1</td>
            <td>{profileName}</td>
            <td>{profileEmail}</td>
            <td className="text-center">Admin</td>
            <td className="text-center">
                <button
                    onClick={() => handleMakeAdmin(_id)}
                    className={`btn btn-xs btn-success btn-primary hover:text-white rounded-full}`}
                >
                    Make Admin
                </button>
            </td>
        </tr>
    );
};

export default UserRow;