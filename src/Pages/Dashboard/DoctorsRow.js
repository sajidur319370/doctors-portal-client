import React from 'react';

const DoctorsRow = ({ doctor, index, setDeletingDoctor }) => {
    const { name, img, speciality } = doctor;

    return (
        <tr >
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-8 rounded">
                    <img src={img} alt="" />
                </div>
            </div></td>
            <td><span className='bg-yellow-200 text-md text-red-900 font-medium p-1 rounded-md'>{name}</span></td>
            <td><span className='bg-yellow-200 text-md text-red-900 font-medium p-1 rounded-md'>{speciality}</span></td>
            <td>
                <label htmlFor="delete-modal" onClick={() => setDeletingDoctor(doctor)} className="btn  btn-xs modal-button btn-error">Delete</label>

            </td>
        </tr>
    );
};

export default DoctorsRow;