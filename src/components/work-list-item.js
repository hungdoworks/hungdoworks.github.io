import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/styles/Works.module.scss";
import Link from "next/link";

export default function WorkListItem({title, imgSrc, url}) {
    const router = useRouter();

    const handleClick = () => {
        if (url) {
            router.push(url);
        }
    };

    return (
        <Link href={url}>
            <div className={styles.workListItem}>
                <div className={styles.workListItemImage}>
                    <Image src={imgSrc} alt="" fill />
                </div>
                <p className={styles.workListItemText}>{title}</p>
            </div>
        </Link>
    );
}