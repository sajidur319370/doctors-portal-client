import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';

const Appointment = () => {
    return (
        <div className='flex items-center mt-48' style={{ background: `url(${appointment})` }}>
            <div className='-mt-36 hidden lg:block'><img src={doctor} alt="" /></div>
            <div className="">
                <div className="text-start text-white">

                    <h3 className="text-3xl font-bold text-primary">Appointment</h3>
                    <h2 className="text-4xl font-semibold">Make An Appointment Today</h2>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Appointment</PrimaryButton>

                </div>
            </div>

        </div>
    );
};

export default Appointment;