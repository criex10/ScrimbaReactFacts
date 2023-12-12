import {DisplayProps} from "@/components/displayTypes";
import reactIconSmall from "@/images/react-icon-small.png"
import Image from "next/image";

export default function Navbar(props: DisplayProps) {
    return (
        <nav
            className={props.darkMode ? "dark" : ""}
        >
            <Image
                className="nav--logo_icon"
                src={reactIconSmall}
                alt={'Small React icon'}
            />
            <h3 className="nav--logo_text">ReactFacts</h3>

            <div
                className="toggler"
            >
                <p className="toggler--light">Light</p>
                <div
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    );
}