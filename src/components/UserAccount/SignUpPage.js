import React from 'react';
import './SignUpPage.css';
import SocialLogin from './SocialLogin/SocialLogin';

const SignUpPage = () => {
    return (
        <div>
            <div className='loginRoot'>
                <div >
                    <form action="" className='loginBody'>
                        <h1 className='text-2xl text-white border-2 uppercase border-none'>Please Sign-Up</h1>
                        <div className='loginBox'>
                            <input type="text" required />
                            <span className=''>your name</span>
                        </div>
                        <div className='loginBox'>
                            <input type="text" required />
                            <span className=''>your email</span>
                        </div>
                        <div className='loginBox'>
                            <input type="password" required />
                            <span className=''>Password</span>
                        </div>
                        <div className='button_3_body'>
                            <input type="submit" value="SIGNUP" className='button_3' />
                        </div>
                    </form>
                </div>
                <div className="divider text-white">OR</div>

                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default SignUpPage;