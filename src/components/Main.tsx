import styles from "./Main.module.css";

function Fact(props: { message: string }) {
    return (
        <li className={styles.listItem}>
            <span className={styles.listText}>{props.message}</span>
        </li>
    );
}

export function Main() {
    return (
        <div className={styles.main}>
            <h1 className={styles.header}>Fun facts about React</h1>
            <ul>
                <Fact message={'Was first released in 2013'}/>
                <Fact message={'Was originally created by Jordan Walke'}/>
                <Fact message={'Has well over 100k stars on GitHub'}/>
                <Fact message={'Is maintained by Facebook'}/>
                <Fact message={'Powers thousands of enterprise apps, including mobile apps'}/>
            </ul>
        </div>
    );
}