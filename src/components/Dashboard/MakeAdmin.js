import React from 'react';
import UserRow from './UserRow';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

const MakeAdmin = () => {

    const {t} =useTranslation(["dashboard"])

    const url = 'https://infinite-island-65121.herokuapp.com/allUserData';
    const { data, refetch } = useQuery(['allUserData'], () =>
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    )

    return (
        <div className="w-11/12 lg:w-full mt-12 mb-40 pr-2 pl-2">
            <div className="overflow-x-scroll">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='bg-gray-300 text-[#125f82]'>Index</th>
                            <th className='bg-gray-300 text-[#125f82]'>Name</th>
                            <th className='bg-gray-300 text-[#125f82]'>Email</th>
                            <th className="text-center bg-gray-300 text-[#125f82]">Role</th>
                            <th className="text-center bg-gray-300 text-[#125f82]">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((ud, index) => <UserRow
                                key={ud._id}
                                index={index}
                                ud={ud}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default MakeAdmin;