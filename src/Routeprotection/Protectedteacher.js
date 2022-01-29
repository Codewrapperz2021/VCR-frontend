import React from 'react';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import Login from '../component/auth/login';

export default function Protectedteacher() {
    const data = useSelector(state => state.login.UserData);
    const teacher = data.data.user.role == 'teacher';
    return teacher ? <Outlet /> : <Login />
}