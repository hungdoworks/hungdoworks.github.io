import styles from "@/styles/NavigationBar.module.scss";
import Link from "next/link";
import { HoverDropdown, HoverDropdownItem } from "./hover-dropdown";

const NavigationData = [
    {title: "Home", url: "/"},
    {title: "Performance", url: "/",
        sub: [
            { title: <span>A <span style={{wordSpacing: "-10px"}}>Wo │ man</span></span>, url: "/" },
            { title: "L'ego", url: "/" },
            { title: "Cramped", url: "/" },
        ]
    },
    {title: "Choreography", url: "/",},
    {title: "Workshop", url: "/"},
    {title: "Video", url: "/"},
    {title: "About", url: "/"},
];


export default function NavigationBar() {
    return (
        <div className={styles.container}>
            <div className={styles.navList}>
                {
                    NavigationData.map((item, index) => {
                        if (item.sub) {
                            return (
                                <HoverDropdown title={item.title}>
                                    {
                                        item.sub.map((subItem, subIndex) => 
                                            <HoverDropdownItem 
                                                key={subIndex} 
                                                title={subItem.title}
                                                url={subItem.url} 
                                            />
                                        )
                                    }
                                </HoverDropdown>
                            )
                        }
                        return <Link key={index} href={item.url}>{item.title}</Link>
                    })
                }
            </div>
        </div>
    );
};