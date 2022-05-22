import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token] = useToken(user)
    useEffect(() => {
        if (token) {
            console.log(user);
            navigate(from, { replace: true });
        }
    }, [from, navigate, token, user])



    if (loading) {
        return <Loading></Loading>
    }
    let errorMaessage;
    if (error) {
        errorMaessage = <p className='text-red-500'>{error?.message}</p>
    }
    return (
        <div className='text-center'>
            {
                errorMaessage
            }
            <button onClick={() => signInWithGoogle()} className="btn btn-primary bg-gradient-to-r from-primary to-secondary uppercase text-white font-bold">Continue With Google</button>
        </div>
    );
};

export default SocialLogin;