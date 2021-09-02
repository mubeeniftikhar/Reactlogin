
import React, {useEffect, useState} from 'react';

import React, { useState, useEffect } from 'react';


import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {

    useEffect(() => {

        const loginuser = localStorage.getItem('IsLoggedIn');
        if (loginuser === '1') {
            setIsLoggedIn(true);
        }

    }, []);


    const loginHandler = (email, password) => {

        useEffect(() => {
            const storedLoggedInValue = localStorage.getItem('isLoggedIn', isLoggedIn);
            if (storedLoggedInValue === '1')
                setIsLoggedIn(true)
        }, []);
        const loginHandler = (email, password) => {
            // We should of course check email and password
            // But it's just a dummy/ demo anyways
            localStorage.setItem("isLoggedIn", '1')
            setIsLoggedIn(true);
            localStorage.setItem('IsLoggedIn', '1');
        };

        const logoutHandler = () => {
            setIsLoggedIn(false);

            localStorage.setItem('IsLoggedIn', '0');

            localStorage.removeItem('isLoggedIn')
        };

        return (
            <React.Fragment>
                <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler}/>
                <main>
                    {!isLoggedIn && <Login onLogin={loginHandler}/>}
                    {isLoggedIn && <Home onLogout={logoutHandler}/>}
                </main>
            </React.Fragment>
        );
    }
}
export default App;
