import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../Firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h3 className='text-secondary p-2 font-semibold text-4xl'>Dashboard</h3>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-2 overflow-y-auto w-48 bg-white text-accent">
                    {/* <!-- Sidebar content here --> */}
                    <li className='font-semibold'><Link to='/dashboard'>My Appointments</Link></li>
                    <li className='font-semibold'><Link to='/dashboard/review'>My Reviews</Link></li>
                    <li className='font-semibold'><Link to='/dashboard/introduction'>My Introduction</Link></li>
                    {admin && <li className='font-semibold'><Link to='/dashboard/users'>All Users</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;