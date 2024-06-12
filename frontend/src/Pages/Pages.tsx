// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppointmentBooking from './AppointmentBookingPage';
import AppointmentList from './AppointmentListPage';
import ChatPage from './ChatPage';
import DoctorList from './DoctorListPage';
import Profile from './ProfilePage';
import Dashboard from './Dashboard';
import LandingPage from './LandingPage';
import Login from '../Components/auth/LoginForm';
import RegisterForm from '../Components/auth/RegisterForm';

const Pages = () => {
    return (
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/Dashboard' element={<Dashboard/>}/>
            <Route path='/AppointmentBookingPage' element={<AppointmentBooking/>}/>
            <Route path='/AppointmentListPage' element={<AppointmentList/>}/>
            <Route path='/ChatPage' element={<ChatPage/>}/>
            <Route path='/DoctorListPage' element={<DoctorList/>}/>
            <Route path='/ProfilePage' element={<Profile/>}/>
            <Route path='/LoginForm' element={<Login />} />
            <Route path='/RegisterForm' element={<RegisterForm />} />
        </Routes>
    );
}

export default Pages;
