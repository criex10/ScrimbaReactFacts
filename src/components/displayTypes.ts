import {MouseEventHandler} from "react";

export interface DisplayProps {
    darkMode: boolean,
    toggleDarkMode: MouseEventHandler<HTMLDivElement>
}