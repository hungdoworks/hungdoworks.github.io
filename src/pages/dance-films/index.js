import styles from "@/styles/Performances.module.scss"
import { PerformanceItem } from "@/components/performance-item";
import { PerformanceItemContent } from "@/components/performance-item-content";
import { PerformanceItemImage } from "@/components/performance-item-image";

import imgResonanceCamp from "../../../public/images/films_resonance_camp.jpg";

export default function DanceFilmsPage() {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Dance Films</h1>
                <div className={styles.performanceList}>
                    <PerformanceItem>
                        <PerformanceItemImage src={imgResonanceCamp} />
                        <PerformanceItemContent
                            title={"Resonance - Improvised Dance & Music Camp"}
                            content={
                                <span>
                                    Resonance - Improvised Dance & Music Camp is an invitation for everyone to explore and deepen the art of improvisation by opening our senses and redirecting our bodies and minds back to nature.
                                </span>
                            }
                            detailsUrl="/dance-films/details/resonance-camp"
                        />
                    </PerformanceItem>
                </div>
            </div>
        </div>
    );
}