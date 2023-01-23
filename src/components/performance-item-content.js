import styles from "@/styles/Performances.module.scss";

export function PerformanceItemContent({ content, title }) {
    return (
        <div className={styles.performanceItemContent}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}
