import React from 'react';
import { useSignInWithGoogle, useSignInWithFacebook } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, userFB, loadingFB, errorFB] = useSignInWithFacebook(auth);

    if(user || userFB){
        console.log(user, userFB);
    }

    return (
        <div>
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