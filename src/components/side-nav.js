import { useRef } from "react";
import styles from "@/styles/components/SideNavigation.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function SideNavigation({ children }) {
    const sideNavRef = useRef(null);
    const contentRef = useRef(null);

    /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
    const openNav = () => {
        sideNavRef.current.style.width = "250px";
        contentRef.current.style.transform = "translate(250px, 0)";
    }

    /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
    const closeNav = () => {
        sideNavRef.current.style.width = "0";
        contentRef.current.style.transform = "translate(0, 0)";
    }

    return (
        <>
            <div className={styles.sideNav} ref={sideNavRef}>
                <button className={styles.closeBtn} onClick={closeNav}>&times;</button>
                <Link href="/" onClick={closeNav}>Home</Link>
                <Link href="/works" onClick={closeNav}>Works</Link>
                <Link href="/workshops" onClick={closeNav}>Workshops</Link>
                <Link href="/others" onClick={closeNav}>Others</Link>
                <Link href="/contact" onClick={closeNav}>Contact</Link>
            </div>

            {/* Use any element to open the sidenav */}
            <div className={styles.sideNavBar}>
                <Image 
                    src="/icons/ic_menu.svg" 
                    alt="" 
                    width={40} 
                    height={40} 
                    onClick={openNav}
                />
            </div>

            <div className={styles.pageContent} ref={contentRef}>
                {children}
            </div>
        </>
    );
}