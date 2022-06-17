import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Agregar from '../components/CRUD/Agregar';
import Home from '../components/Home';
import NavBars from '../components/NavBars';

const DashboardRouters = () => {
    return (
        <>
            <NavBars />
            <Routes>
            <Route path="/" element={<Home/>}/>
               <Route path="/add" element={<Agregar />}/>
            </Routes>
        </>
    );
};

export default DashboardRouters;