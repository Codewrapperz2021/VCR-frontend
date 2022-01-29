import React from 'react';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import Login from '../component/auth/login';

export default function Masterprotection() {
    const data = useSelector(state => state.login.UserData);
    const master = data.data;
    return master ? <Outlet /> : <Login />
}