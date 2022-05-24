import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';


const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patientEmail=${user.email}`, {
                method: "GET",
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }

            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        navigate("/");
                    }
                    return res.json()
                })
                .then(data => setAppointments(data))
        }
    }, [navigate, user])

    return (
        <div className='pl-2'>
            <h2 className='font-semibold text-red-400 text-xl pl-2'>My appointments: <span className='text-accent'>{appointments?.length}</span> </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments?.map((a, index) => (<tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>{a.patientName}</td>
                                <td>{a.treatment}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>
                                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-sm bg-indigo-500'>Pay</button></Link>}
                                    {(a.price && a.paid) && <div>
                                        <p className='p-1 bg-green-500 rounded-lg inline-block'>Paid</p>
                                        <p className='p-1  rounded-lg text-xs uppercase font-medium'>Transaction id: <span className='font-semibold text-sm text-red-900'>{a.transactionId}</span></p>
                                    </div>}

                                </td>
                            </tr>))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;