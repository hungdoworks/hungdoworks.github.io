import { useRouter } from "next/router";
import styles from "@/styles/Performances.module.scss";

export function PerformanceItemContent({ content, title, detailsId }) {
    const route = useRouter();

    const handleViewMore = () => {
        route.push("/performances/details/" + detailsId);
    };

    return (
        <div className={styles.performanceItemContent}>
            <h2>{title}</h2>
            <p>{content}</p>
            <button onClick={handleViewMore}>View More</button>
        </div>
    );
}
