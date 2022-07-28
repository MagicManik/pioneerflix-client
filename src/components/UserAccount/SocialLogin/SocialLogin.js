import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <div className='social-button'>
                <button
                    // onClick={() => signInWithGoogle()}
                    className="button_3 justify-center mx-auto"
                >Sigh In With Google
                </button>
                <button
                    // onClick={() => signInWithGoogle()}
                    className="button_3 justify-center mx-auto"
                >Sigh In With Facebook
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;