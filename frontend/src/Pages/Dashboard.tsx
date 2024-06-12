// import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
        <div className=' flex gap-2 bg-white h-20 border-b border-blue-gray-100'>
            <Link to={'/'}>
                <span>Dashboard</span>
            </Link>
            <Link to={'/AppointmentBookingPage'}>
                <span>Book Appointment</span>
            </Link>
            <Link to={'/AppointmentListPage'}> 
                <span>Appointment List</span>
            </Link>
            <Link to={'/ChatPage'}>
                <span>Chat</span>
            </Link>
            <Link to={'/DoctorListPage'}>
                <span>Doctor List</span>
            </Link>
            <Link to={'/ProfilePage'}>
                <span>Profile Page</span>
            </Link>
        </div>
    </div>
  )
}

export default Dashboard;
