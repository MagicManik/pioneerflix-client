import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
    return (
        <div>
            <div className='loginRoot'>
                <div className='loginBody'>
                    <div className='loginBox'>
                        <input type="text" required />
                        <span className=''>your email</span>
                    </div>
                    <div className='loginBox'>
                        <input type="password" required />
                        <span className=''>Password</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;