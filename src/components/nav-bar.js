import styles from "@/styles/NavigationBar.module.scss";
import Link from "next/link";
import { NavDropdown, NavDropdownItem } from "./nav-dropdown";

const NavigationData = [
    {title: "Home", url: "/"},
    {title: "Works", url: "/works"},
    {title: "Workshops", url: "/workshops"},
    {title: "Others", url: "/others"},
    {title: "Contact", url: "/contact"},
];


export default function NavigationBar() {
    return (
        <div className={styles.container}>
            <div className={styles.navList}>
                {
                    NavigationData.map((item, index) => {
                        if (item.sub) {
                            return (
                                <NavDropdown title={item.title} titleUrl={item.url}>
                                    {
                                        item.sub.map((subItem, subIndex) => 
                                            <NavDropdownItem 
                                                key={subIndex} 
                                                title={subItem.title}
                                                url={subItem.url} 
                                            />
                                        )
                                    }
                                </NavDropdown>
                            )
                        }
                        return <Link key={index} href={item.url}>{item.title}</Link>
                    })
                }
            </div>
        </div>
    );
};