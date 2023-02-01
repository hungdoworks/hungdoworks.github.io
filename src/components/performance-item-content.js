import { useRouter } from "next/router";
import styles from "@/styles/Performances.module.scss";

export function PerformanceItemContent({ content, title, detailsUrl }) {
    const route = useRouter();

    const handleViewMore = () => {
        if (detailsUrl)
            route.push(detailsUrl);
    };

    return (
        <div className={styles.performanceItemContent}>
            <h2>{title}</h2>
            <p>{content}</p>
            <button onClick={handleViewMore}>View More</button>
        </div>
    );
}
