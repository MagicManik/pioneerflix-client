import React, { useEffect } from 'react';
import { useSignInWithGoogle, useSignInWithFacebook } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, userG, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, userFB, loadingFB, errorFB] = useSignInWithFacebook(auth);

    const [token] = useToken(userG || userFB);

    let location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";

    let errorMessage;

    useEffect(() => {

        if (token) {
            navigate(from, { replace: true });
        }

    }, [token, navigate, from])

    if (loading || loadingFB) {
        return <Loading></Loading>
    }

    if (error || errorFB) {
        errorMessage = <p className='text-red-500 text-center'>Error: {error?.message} {errorFB?.message}</p>
    }

    return (
        <div>
            {errorMessage}
            <div className='social-button '>
                <button
                    onClick={() => signInWithGoogle()}
                    className="button_3 justify-center mx-auto uppercase"
                >Sigh In With Google
                </button>
                <button
                    onClick={() => signInWithFacebook()}
                    className="button_3 justify-center mx-auto uppercase"
                >Sigh In With Facebook
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;