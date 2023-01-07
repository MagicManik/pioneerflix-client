import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading/Loading';
import './SignUpPage.css';
import SocialLogin from './SocialLogin/SocialLogin';

const SignUpPage = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating] = useUpdateProfile(auth);

    const [token] = useToken(user);

    const navigate = useNavigate();
    let signUpError;

    if (loading || updating) {
        return <Loading></Loading>
    }


    if (error) {
        signUpError = <p className='text-red-500 text-center'><small>{error?.message}</small></p>
    }

    if (token) {

        navigate('/');
    }

    const handleSignUp = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated your profile');
        toast.success('your profile updated')
    }

    return (
        <div>
            <div className='loginRoot text-[#fff]'>
                <div >
                    <form action="" onSubmit={handleSignUp} className='loginBody'>
                        <h1 className='text-2xl  border-2 uppercase border-none'>Please Sign-Up</h1>
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
                    {signUpError}
                </div>
                <p className='text-xl  text-center mt-2'><small>Already have an account?</small> <Link to="/login" className='text-green-500 text-sm'>Please Login</Link> </p>

                <div className="divider ">OR</div>

                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default SignUpPage;