"use client"

import Navbar from "@/components/Navbar";
import {Main} from "@/components/Main";

function toggleStub(firstArg: any) {
    console.log(`Dark mode toggled ${typeof firstArg}`);
}

export default function Home() {
    let darkMode = true;
    return (
        <div>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleStub}/>
            <Main darkMode={darkMode} toggleDarkMode={toggleStub}/>
        </div>
    );
}
