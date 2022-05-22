import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import UserRow from './UserRow';

const Allusers = () => {
    const { data: users, isLoading, refetch } = useQuery("users", () => fetch('http://localhost:5000/user', {

        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='font-semibold text-red-400 text-xl pl-2'>All Users:{users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Address</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <UserRow refetch={refetch} index={index} user={user} key={user._id}></UserRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;