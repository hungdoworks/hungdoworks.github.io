import styles from "@/styles/components/NavDropdown.module.scss";
import Link from "next/link";

export function NavDropdown({children, title, titleUrl}) {
    return (
        <div className={styles.dropdown}>
            <Link href={titleUrl}>
                <div className={styles.dropbtn}>{title}</div>
            </Link>
            <div className={styles.dropdownContent}>
                {children}
            </div>
        </div>
    );
}

export function NavDropdownItem({title, url}) {
    return <Link href={url}>{title}</Link>
}