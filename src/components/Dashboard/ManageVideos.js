import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ManageVideos = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th  className='bg-gray-300 text-[#125f82]'>Uploaded Video</th>
                            <th  className='bg-gray-300 text-[#125f82]'>Uploader</th>
                            <th  className='bg-gray-300 text-[#125f82]'>Upload by admin</th>
                            <th  className='bg-gray-300 text-[#125f82]'>Odd Videos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Videos Title</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Name of uploader
                                <br />
                                <span class="badge badge-ghost badge-sm">uploaderEmail@gmail.com</span>
                            </td>
                            <td>
                                <button class="btn btn-xs">Final Upload</button>
                            </td>
                            <th>
                                <button class="btn btn-xs">Delete</button>
                            </th>
                        </tr>
                        {/* <!-- row 2 --> */}
                        <tr>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Videos Title</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Name of uploader
                                <br />
                                <span class="badge badge-ghost badge-sm">uploaderEmail@gmail.com</span>
                            </td>
                            <td>
                                <button class="btn btn-xs">Final Upload</button>
                            </td>
                            <th>
                                <button class="btn btn-xs">Delete</button>
                            </th>
                        </tr>
                        {/* <!-- row 3 --> */}
                        <tr>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Videos Title</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Name of uploader
                                <br />
                                <span class="badge badge-ghost badge-sm">uploaderEmail@gmail.com</span>
                            </td>
                            <td>
                                <button class="btn btn-xs">Final Upload</button>
                            </td>
                            <th>
                                <button class="btn btn-xs">Delete</button>
                            </th>
                        </tr>
                        {/* <!-- row 4 --> */}
                        <tr>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Videos Title</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Name of uploader
                                <br />
                                <span class="badge badge-ghost badge-sm">uploaderEmail@gmail.com</span>
                            </td>
                            <td>
                                <button class="btn btn-xs">Final Upload</button>
                            </td>
                            <th>
                                <button class="btn btn-xs">Delete</button>
                            </th>
                        </tr>
                    </tbody>
                    {/* <!-- foot --> */}
                    <tfoot>
                        <tr>
                            <th  className='bg-gray-300 text-[#125f82]'>Uploaded Video</th>
                            <th  className='bg-gray-300 text-[#125f82]'>Uploader</th>
                            <th  className='bg-gray-300 text-[#125f82]'>Upload by admin</th>
                            <th  className='bg-gray-300 text-[#125f82]'>Odd Videos</th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default ManageVideos;