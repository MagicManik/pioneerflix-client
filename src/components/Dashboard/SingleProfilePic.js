import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SingleProfilePic = () => {
    const [user] = useAuthState(auth);
    
    return (
        <div className="w-full lg:w-1/3 md:mx-2 lg:mt-1 p-3">
            <div className="bg-white p-5 rounded-br-lg rounded-bl-lg border-t-4 border-[#125f82]">
                <div className="image overflow-hidden">
                    <img
                        className="h-auto w-full mx-auto"
                        src={`${user
                            ? user?.photoURL
                            : "https://i.ibb.co/T1D3tqN/images.png"
                            }`}
                        alt=""
                    />
                </div>
                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                    {user ? user?.displayName : "- - -"}
                </h1>
                <h3 className="text-gray-600 text-lg font-semibold">
                    {user ? user?.email : "- - -"}
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