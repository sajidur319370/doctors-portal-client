import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
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
                    console.log(res);
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
                            <th>Service</th>
                            <th>Date</th>
                            <th>Time</th>
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
                            </tr>))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;