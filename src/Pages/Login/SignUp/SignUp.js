import React, { useEffect } from 'react';
import auth from '../../../Firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import useToken from '../../../hooks/useToken';
const SignUp = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        toast('Updated profile');

    }
    const [token] = useToken(user);
    useEffect(() => {
        if (token) {
            console.log(user);
            navigate(from, { replace: true });
        }
    }, [from, navigate, token, user])


    if (loading || updating) {
        return <Loading></Loading>
    }
    let errorMaessage;
    if (error || updateError) {
        errorMaessage = <p className='text-red-500'>{error?.message}</p>
    }

    return (
        <div className='flex justify-center items-center h-screen my-40'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-4xl">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="text-center">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is Required"
                                    },

                                })}
                                type="Text"
                                placeholder="Type Your Name"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt  text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is Required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email' // JS only: <p>error message</p> TS only support string
                                    }
                                })}
                                type="email"
                                placeholder="Type Your Email"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt  text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is Required"
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
                                        message: 'Passweord should be minimum 6 character contain at least one letter and one number and one Special character '
                                    }
                                })}
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt  text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        <input className='btn btn-primary bg-gradient-to-r from-primary to-secondary uppercase text-white font-bold my-2' type="submit" value='Sign Up' />
                    </form>
                    {
                        errorMaessage
                    }
                    <p className='text-center my-2'>Already have an account? <Link className='text-secondary' to="/login">Please Login</Link></p>

                    <div className="divider">OR</div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>

        </div>
    );
};

export default SignUp;