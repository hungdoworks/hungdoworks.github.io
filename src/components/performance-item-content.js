import styles from "@/styles/Performances.module.scss";
import Link from "next/link";

export function PerformanceItemContent({ content, title, detailsUrl }) {
    return (
        <div className={styles.performanceItemContent}>
            <h2>
                <Link href={detailsUrl}>
                    {title}
                </Link>
            </h2>
            <p>{content}</p>
            <Link href={detailsUrl}>
                <span className={styles.viewMoreButton}>View More</span>
            </Link>
        </div>
    );
}
