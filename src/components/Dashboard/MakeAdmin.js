import React from 'react';
import UserRow from './UserRow';

const MakeAdmin = () => {
    return (
        <div className="w-11/12 lg:w-full mb-40">
            <div className='w-full flex justify-center mt-0'>
                <p className='section-title text-[20px] md:text-[30px]'>Make admin</p>
            </div>
            <div class="overflow-x-scroll">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th className="text-center">Role</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <UserRow></UserRow>
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default MakeAdmin;