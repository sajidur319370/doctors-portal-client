import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { data: services, isLoading } = useQuery('services', () => fetch("http://localhost:5000/service").then(res => res.json()))

    const imageStorageApiKey = '1391f873a11301e1b864913d536e7208';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageApiKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log("imageBB Result:", result);
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        img: img
                    }
                    // send to Your database
                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success("Doctor added successfully!!");
                            } else {
                                toast.error('Failed to add rhe doctor');
                            }
                        })
                }
            })

        console.log("data", data);
    }
    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div className='pl-2'>
            <h2 className='text-semibold text-2xl text-red-400'>Add a New Doctor</h2>
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
                    <select {...register("speciality")} name='speciality' defaultValue=" " className="select input-bordered w-full max-w-xs mb-4">
                        <option disabled value=" ">Select Doctor Speciality</option>
                        {
                            services.map((service, index) => <option key={index} service={service}>{service.name}</option>)
                        }
                    </select>

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input
                        {...register("image", {
                            required: {
                                value: true,
                                message: "Image is Required"
                            },

                        })}
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt  text-red-500">{errors.image.message}</span>}
                    </label>
                    <input className='btn btn-primary bg-gradient-to-r from-primary to-secondary uppercase text-white font-bold my-2' type="submit" value='Add' />
                </div>
            </form >

        </div >
    );
};

export default AddDoctor;