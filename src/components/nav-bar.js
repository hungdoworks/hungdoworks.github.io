import styles from "@/styles/NavigationBar.module.scss";
import Link from "next/link";
import { HoverDropdown, HoverDropdownItem } from "./hover-dropdown";

const NavigationData = [
    {title: "Home", url: "/"},
    {title: "Works", url: "/works"},
    // {title: "Performance", url: "/performances",
    //     sub: [
    //         { title: <span>A <span style={{wordSpacing: "-10px"}}>Wo │ man</span></span>, url: "/" },
    //         { title: "L'ego", url: "/" },
    //         { title: "Cramped", url: "/" },
    //     ]
    // },
    {title: "Workshops", url: "/"},
    {title: "Others", url: "/"},
    {title: "Contact", url: "/"},
];


export default function NavigationBar() {
    return (
        <div className={styles.container}>
            <div className={styles.navList}>
                {
                    NavigationData.map((item, index) => {
                        if (item.sub) {
                            return (
                                <HoverDropdown title={item.title} titleUrl={item.url}>
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