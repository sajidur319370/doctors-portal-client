import React from 'react';

const AppointmentCard = ({ service, setTreatment }) => {
    const { name, slots, price } = service;
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <h2 className="card-title mx-auto">{name}</h2>
                <p>
                    {
                        slots.length ? <span>{slots[0]}</span> : <span className='text-red-800'>Unavilable slot</span>
                    }
                </p>
                <p>
                    {slots.length} Spaces available
                </p>
                <p className="text-indigo-900 font-normal text-md uppercase">Price: <span className=' text-lg text-red-900 font-medium'>${price}</span></p>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal" onClick={() => setTreatment(service)} disabled={slots.length === 0} className="btn btn-primary bg-gradient-to-r from-primary to-secondary uppercase text-white font-bold">Books Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;