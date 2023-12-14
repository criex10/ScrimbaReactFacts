"use client"

import React from 'react';
import Navbar from "@/components/Navbar";
import {Main} from "@/components/Main";

export default function Home() {
    let [darkMode, setDarkMode] = React.useState(true);

    let toggleDarkMode = function() {
        setDarkMode((prevMode: boolean) => !prevMode);
    }

    return (
        <div>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <Main darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        </div>
    );
}
