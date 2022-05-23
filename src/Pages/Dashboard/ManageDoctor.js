import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorsRow from './DoctorsRow';

const ManageDoctor = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const { data: doctors, isLaoding, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLaoding) {
        return <Loading></Loading>
    }

    return (
        <div className='pl-2'>
            <h2 className='text-semibold text-2xl text-red-400'>All Doctors:{doctors?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avator</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map((doctor, index) => <DoctorsRow refetch={refetch} key={doctor._id} index={index} doctor={doctor} setDeletingDoctor={setDeletingDoctor} ></DoctorsRow>)
                        }

                    </tbody>
                </table>
                {
                    deletingDoctor && <DeleteConfirmModal deletingDoctor={deletingDoctor} setDeletingDoctor={setDeletingDoctor} refetch={refetch}></DeleteConfirmModal>
                }
            </div>

        </div>
    );
};

export default ManageDoctor;