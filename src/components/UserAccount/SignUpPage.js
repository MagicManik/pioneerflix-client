import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import './SignUpPage.css';
import SocialLogin from './SocialLogin/SocialLogin';

const SignUpPage = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating] = useUpdateProfile(auth);

    const navigate = useNavigate();

    if (loading || updating) {
        return <Loading></Loading>
    }

    const handleSignUp = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(name, email, password);

        await createUserWithEmailAndPassword(email, password);

        await updateProfile({ displayName : name });
        alert('Updated your profile');

        navigate('/')
    }

    return (
        <div>
            <div className='loginRoot'>
                <div >
                    <form action="" onSubmit={handleSignUp} className='loginBody'>
                        <h1 className='text-2xl text-white border-2 uppercase border-none'>Please Sign-Up</h1>
                        <div className='loginBox'>
                            <input type="text" name='name' required />
                            <span className=''>your name</span>
                        </div>
                        <div className='loginBox'>
                            <input type="text" name='email' required />
                            <span className=''>your email</span>
                        </div>
                        <div className='loginBox'>
                            <input type="password" name='password' required />
                            <span className=''>Password</span>
                        </div>
                        <div className='button_3_body'>
                            <input type="submit" value="SIGNUP" className='button_3' />
                        </div>
                    </form>
                </div>
                <p className='text-xl text-white text-center mt-2'><small>Already have an account?</small> <Link to="/login" className='text-green-500 text-sm'>Please Login</Link> </p>
                <div className="divider text-white">OR</div>

                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default SignUpPage;