import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/styles/Works.module.scss";

export default function WorkListItem({title, imgSrc, url}) {
    const router = useRouter();

    const handleClick = () => {
        if (url) {
            router.push(url);
        }
    };

    return (
        <div className={styles.workListItem} onClick={handleClick}>
            <div className={styles.workListItemImage}>
                <Image src={imgSrc} alt="" fill priority/>
            </div>
            <p className={styles.workListItemText}>{title}</p>
        </div>
    );
}