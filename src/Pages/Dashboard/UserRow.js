import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data);
                toast.success("Successfully Make an Admin!!")
            });
    }
    return (
        <tr >
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role ? <p className="bg-primary rounded-md text-accent inline-block px-2">Admin</p> : <button onClick={makeAdmin} className="btn btn-xs btn-secondary">Make Admin</button>}</td>
            <td><button className="btn btn-xs btn-secondary">Remove User</button></td>

        </tr>
    );
};

export default UserRow;