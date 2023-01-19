import styles from "@/styles/components/HoverDropdown.module.scss";

export function HoverDropdown({children, title}) {
    return (
        <div className={styles.dropdown}>
            <button className={styles.dropbtn}>{title}</button>
            <div className={styles.dropdownContent}>
                {children}
            </div>
        </div>
    );
}

export function HoverDropdownItem({title, url}) {
    return <a href={url}>{title}</a>
}