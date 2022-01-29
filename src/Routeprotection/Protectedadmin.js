import React from 'react';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import Login from '../component/auth/login';

export default function Protectedadmin() {
    const data = useSelector(state => state.login.UserData);
    const admin = data.data.user.role == 'admin';
    return admin ? <Outlet /> : <Login />
}
