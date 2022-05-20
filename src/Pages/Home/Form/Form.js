import React from 'react';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import apointment from "../../../assets/images/appointment.png"

const Form = () => {
    return (
        <div className='text-center my-20 p-5' style={{ background: `url(${apointment})` }}>
            <div className="text-start">
                <h3 className="text-3xl font-bold text-primary">Contact Us</h3>
                <h2 className="text-4xl font-semibold text-white">Stay Connected with Us</h2>
            </div>
            <form className="w-1/2 mx-auto">

                <div className="md:w-full my-5">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full mb-2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" type="Email" placeholder="Your Email" />

                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full mb-2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" type="text" placeholder="Your Name" />

                    <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded mb-2 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="message" cols="30" rows="10" placeholder="Your Message" />
                </div>


                <PrimaryButton>Submit</PrimaryButton>
            </form>

        </div>
    );
};

export default Form;