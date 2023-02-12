import styles from "@/styles/Performances.module.scss";

export function PerformanceItemVertical({ children }) {
    return (
        <div className={styles.performanceItemVertical}>
            {children}
        </div>
    );
}
