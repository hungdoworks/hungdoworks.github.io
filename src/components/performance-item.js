import styles from "@/styles/Performances.module.scss";
import clsx from "clsx";

export function PerformanceItem({ reverse, children }) {
    const classNames = clsx(styles.performanceItem, reverse && styles.reverse);

    return (
        <div className={classNames}>
            {children}
        </div>
    );
}
