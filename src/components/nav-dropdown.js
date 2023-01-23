import styles from "@/styles/components/HoverDropdown.module.scss";
import { useRouter } from "next/router";

export function NavDropdown({children, title, titleUrl}) {
    const router = useRouter();

    const handleTitleClick = () => {
        if (titleUrl) {
            router.push(titleUrl);
        }
    };

    return (
        <div className={styles.dropdown}>
            <button className={styles.dropbtn} onClick={handleTitleClick}>{title}</button>
            <div className={styles.dropdownContent}>
                {children}
            </div>
        </div>
    );
}

export function NavDropdownItem({title, url}) {
    return <a href={url}>{title}</a>
}