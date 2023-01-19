import styles from "@/styles/NavigationBar.module.scss";
import Link from "next/link";

const NavigationData = [
    {title: "Home", url: "/"},
    {title: "Performance", url: "/"},
    {title: "Choreography", url: "/"},
    {title: "Workshop", url: "/"},
    {title: "Video", url: "/"},
    {title: "About", url: "/"},
];

const PerformanceData = [
    {title: "A Wo|man", url: "/"},
    {title: "L'ego", url: "/"},
    {title: "Cramped", url: "/"},
];


export default function NavigationBar() {
    return (
        <div className={styles.container}>
            <div className={styles.navList}>
                {
                    NavigationData.map((item, index) => {
                        return <Link key={index} href={item.url}>{item.title}</Link>
                    })
                }
                <div style={{flexGrow: 1}}></div>
            </div>
        </div>
    );
};