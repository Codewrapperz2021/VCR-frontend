import React from 'react';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import Login from '../component/auth/login';

export default function Protectedstudent() {
    const data = useSelector(state => state.login.UserData);
    const student = data.data.user.role == 'student';
    return student ? <Outlet /> : <Login />
}