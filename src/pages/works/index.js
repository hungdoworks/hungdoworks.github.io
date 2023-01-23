import styles from "@/styles/Works.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

export default function WorksPage() {
    return (
        <div className={styles.container}>
            <div className={styles.background}></div>
            <div className={styles.content}>
                <WorkList>
                    <WorkListItem title="Performances" imgSrc="/images/perf_a_woman.jpg" url="/performances"/>
                    <WorkListItem title="Choreography" imgSrc="/images/choreo_plum_apricot.jpg" url="/choreography" />
                    <WorkListItem title="Dance & Film" imgSrc="/images/others_resonance_camp.jpg" />
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

function WorkListItem({title, imgSrc, url}) {
    const router = useRouter();

    const handleClick = () => {
        if (url) {
            router.push(url);
        }
    };

    return (
        <div className={styles.workListItem} onClick={handleClick}>
            <div className={styles.workListItemImage}>
                <Image src={imgSrc} alt="" fill/>
            </div>
            <p className={styles.workListItemText}>{title}</p>
        </div>
    );
}