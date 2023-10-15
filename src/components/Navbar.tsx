import Image from "next/image";
import logo from "../images/logo.png";
import styles from "./Navbar.module.css";

export function Navbar() {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.logoItem}>
                <Image src={logo} alt="React logo"/>
                <h3>ReactFacts</h3>
            </div>
            <h4 className={styles.projectItem}>React Course - Project 1</h4>
        </div>
    );
}