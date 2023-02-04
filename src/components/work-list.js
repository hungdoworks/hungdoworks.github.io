import styles from "@/styles/Works.module.scss";

export default function WorkList({children}) {
    return (
        <div className={styles.workList}>
            {children}
        </div>
    );
}