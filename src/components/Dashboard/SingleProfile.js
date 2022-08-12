import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SingleProfile = ({ pd, refetch, setIsEdit }) => {
    const [user] = useAuthState(auth);
    const { profileEmail, profileName, phone, gender, education, address } = pd;

    return (
        <div className="bg-white p-5 rounded-br-lg rounded-bl-lg shadow-sm rounded-sm">
            <div className="text-gray-700">
                <div className="text-xs lg:text-md">
                    <div className="grid grid-cols-2">
                        <div className="py-2 font-semibold">Name</div>
                        <div className="py-2">
                            {user ? profileName : user?.displayName}
                        </div>
                    </div>

                    <div className="grid grid-cols-2">
                        <div className="py-2 font-semibold">Email.</div>
                        <div className="py-2 w-[20ch]">
                            {user ? profileEmail : user?.email}
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="py-2 font-semibold">Gender</div>
                        <div className="py-2">
                            {user ? gender : '.......'}

                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="py-2 font-semibold">Contact No.</div>
                        <div className="py-2">
                            {user ? phone : '......'}

                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="py-2 font-semibold">Address</div>
                        <div className="py-2">
                            {user ? address : '......'}

                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="py-2 font-semibold">Education</div>
                        <div className="py-2">
                            {user ? education : '......'}

                        </div>
                    </div>
                </div>
            </div>
            <label
                htmlFor="my-modal-6"
                onClick={() => setIsEdit(true)}
                className="text-center block w-full text-primary text-md shadow font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
            >
                Edit Profile
            </label>
        </div>
    );
};

export default SingleProfile;