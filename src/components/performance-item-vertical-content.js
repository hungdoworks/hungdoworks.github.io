import styles from "@/styles/Performances.module.scss";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export function PerformanceItemVerticalContent({ content, title, detailsUrl, imgSrc }) {
    return (
        <div className={styles.performanceItemVerticalContent}>
            <h2>
                <Link href={detailsUrl}>
                    {title}
                </Link>
            </h2>
            <p>{content}</p>
            <div className={styles.performanceItemVerticalImage}>
                <Image src={imgSrc} alt="" fill placeholder="blur" />
            </div>
            <Link href={detailsUrl} style={{textAlign: 'center'}}>
                <span className={clsx(styles.viewMoreButton, styles.large)}>View More</span>
            </Link>
        </div>
    );
}
