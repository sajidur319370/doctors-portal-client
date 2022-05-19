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
            <form class="w-1/2 mx-auto">
                <div class="flex items-center flex-col  my-6">
                    <div class="md:w-full">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full mb-2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" type="Email" value="Your Email" />
                    </div>
                    <div class="md:w-full">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full mb-2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" type="text" value="Your Name" />
                    </div>
                    <div class="md:w-full">
                        <textarea class="bg-gray-200 appearance-none border-2 border-gray-200 rounded mb-2 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Your Message" />
                    </div>
                </div>


            </form>
            <PrimaryButton>Submit</PrimaryButton>
        </div>
    );
};

export default Form;