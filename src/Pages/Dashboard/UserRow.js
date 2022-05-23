import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            }

        })
            .then(res => {
                if (res.status === 403) {
                    toast("Failed to make an admin!!!");
                }
                return res.json()
            })
            .then(data => {

                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success("Successfully Make an Admin!!");
                }

            });
    }
    return (
        <tr >
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role ? <p className="bg-green-500 rounded-md text-accent inline-block px-2">Admin</p> : <button onClick={makeAdmin} className="btn btn-xs btn-secondary">Make Admin</button>}</td>
            <td><button className="btn btn-xs bg-red-600">Remove User</button></td>

        </tr>
    );
};

export default UserRow;