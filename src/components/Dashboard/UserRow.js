import React from 'react';

const UserRow = () => {

    const handleMakeAdmin = (id) => {
        
      };

    return (
        <tr className='text-black'>
            <td>1</td>
            <td>Name</td>
            <td>name@gmail.com</td>
            <td className="text-center">Admin</td>
            <td className="text-center">
                <button
                    onClick={() => handleMakeAdmin()}
                    className={`btn btn-xs btn-outline btn-primary hover:text-white rounded-full}`}
                >
                    Make Admin
                </button>
            </td>
        </tr>
    );
};

export default UserRow;