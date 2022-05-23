import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingDoctor, setDeletingDoctor, refetch }) => {
    const { name, email } = deletingDoctor
    const handleDelete = () => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Doctor ${name} is deleted!!`);
                    setDeletingDoctor(null);
                    refetch();
                }
            })

    }
    return (
        <div>

            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-600">Are You sure you want to delete <span className='text-green-500'>{name}</span></h3>
                    <div className="modal-action">
                        <label htmlFor="delete-modal" className="btn btn-xs bg-green-700 ">cancel</label>
                        <button onClick={handleDelete} className="btn btn-xs bg-red-500 ">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;