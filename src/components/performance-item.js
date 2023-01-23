import styles from "@/styles/Performances.module.scss";

export function PerformanceItem({ children }) {
    return (
        <div className={styles.performanceItem}>
            {children}
        </div>
    );
}
