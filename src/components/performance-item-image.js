import styles from "@/styles/Performances.module.scss";
import Image from "next/image";

export function PerformanceItemImage({ src }) {
    return (
        <div className={styles.performanceItemImage}>
            <Image src={src} alt="" fill placeholder="blur"/>
        </div>
    );
}
