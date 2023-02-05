import Image from "next/image";
import styles from "@/styles/Works.module.scss";
import Link from "next/link";

export default function WorkListItem({title, imgSrc, url}) {
    return (
        <Link href={url}>
            <div className={styles.workListItem}>
                <div className={styles.workListItemImage}>
                    <Image src={imgSrc} alt="" fill placeholder="blur"/>
                </div>
                <p className={styles.workListItemText}>{title}</p>
            </div>
        </Link>
    );
}