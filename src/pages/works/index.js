import styles from "@/styles/Works.module.scss";
import Image from "next/image";

export default function WorksPage() {
    return (
        <div className={styles.container}>
            <div className={styles.background}></div>
            <div className={styles.content}>
                <WorkList>
                    <WorkListItem title="Performances" imgSrc="/images/perf_a_woman.jpg" />
                    <WorkListItem title="Choreography" imgSrc="/images/perf_plum_apricot.jpg" />
                    <WorkListItem title="Dance & Film" imgSrc="/images/film.png" />
                </WorkList>
            </div>
        </div>
    );
}

function WorkList({children}) {
    return (
        <div className={styles.workList}>
            {children}
        </div>
    );
}

function WorkListItem({title, imgSrc}) {
    return (
        <div className={styles.workListItem}>
            <div className={styles.workListItemImage}>
                <Image src={imgSrc} alt="" fill/>
            </div>
            <p className={styles.workListItemText}>{title}</p>
        </div>
    );
}