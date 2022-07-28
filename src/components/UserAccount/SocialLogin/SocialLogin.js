import React, { useEffect } from 'react';
import { useSignInWithGoogle, useSignInWithFacebook } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, userFB, loadingFB, errorFB] = useSignInWithFacebook(auth);

    let location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";

    let errorMessage;

    useEffect( () => {

        if (user || userFB) {
            navigate(from, { replace: true });
        }

    }, [user, userFB, navigate, from])

    if (loading || loadingFB) {
        return <Loading></Loading>
    }

    if (error || errorFB) {
        errorMessage = <p className='text-danger'>Error: {error?.message} {errorFB?.message}</p>
    }

    return (
        <div>
            <div className='social-button '>
                {errorMessage}
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