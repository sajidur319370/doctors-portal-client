import React from 'react';
import treatment from "../../../assets/images/treatment.png"
import PrimaryButton from '../../PrimaryButton/PrimaryButton';

const Care = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl w-full" alt='' />
                <div className='p-10'>
                    <h3 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h3>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Treatment</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Care;