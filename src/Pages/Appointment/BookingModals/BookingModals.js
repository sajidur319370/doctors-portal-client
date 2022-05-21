import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import { toast } from 'react-toastify';

const BookingModals = ({ treatment, date, setTreatment }) => {
    const [user] = useAuthState(auth)
    const { _id, name, slots } = treatment;
    const formattedDate = format(date, "PP")
    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patientEmail: user.email,
            patientName: user.displayName,
            phone: event.target.phone?.value

        }


        fetch("http://localhost:5000/booking", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(booking),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast(`Treament booked on ${formattedDate} at ${slot}`);
                } else {
                    toast.error(`You have alrady an apointment on ${data.booking?.date} at ${data.booking?.slot}`);
                }
                setTreatment(null)
            })

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" disabled readOnly value={format(date, 'PP')} className="input input-bordered input-secondary w-full max-w-xs mb-4" />

                        <select name='slot' defaultValue=" " className="select w-full max-w-xs mb-4">
                            <option disabled value=" ">Select A slot</option>
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" disabled value={user?.displayName} className="input input-bordered input-secondary w-full max-w-xs mb-4" />
                        <input type="text" disabled value={user?.metadata.phonNumber} className="input input-bordered input-secondary w-full max-w-xs mb-4" />
                        <input type="email" disabled value={user?.email} className="input input-bordered input-secondary w-full max-w-xs mb-4" />
                        <div>
                            <button type='submit' className="btn btn-primary bg-gradient-to-r from-primary to-secondary uppercase text-white font-bold">Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModals;