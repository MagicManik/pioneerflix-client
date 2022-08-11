import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SingleProfilePic = ({ pd }) => {
    const [user] = useAuthState(auth);
    const { profileEmail, profileName, profileImage } = pd;

    return (
        <div className="w-full lg:w-1/3 md:mx-2 lg:mt-1 p-3">
            <div className=" bg-primary p-5 rounded-br-lg rounded-bl-lg border-t-4 border-[#125f82]">
                <div className="image overflow-hidden">
                    <img
                        className="h-auto w-full mx-auto rounded"
                        src={`${user
                            ? profileImage
                            : user?.photoURL
                            }`}
                        alt=""
                    />
                </div>
                <h1 className="text-secondary font-bold text-xl leading-8 my-1">
                    {user ? profileName : user?.displayName}
                </h1>
                <h3 className="text-secondary sm:text-sm font-semibold">
                    {user ? profileEmail : user?.email}
                </h3>
                <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                    <li className="flex items-center py-3">
                        <span>Role</span>
                        <span className="ml-auto">
                            <span className="bg-[#125f82] py-1 px-2 rounded text-white text-sm">
                                {user && "User"}
                            </span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SingleProfilePic;