import styles from './page.module.css';
import {Navbar} from "@/components/Navbar";
import {Main} from "@/components/Main";

export default function Home() {
    return (
        <main>
            <Navbar/>
            <Main/>
        </main>
    );
}
