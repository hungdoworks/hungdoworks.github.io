import styles from "@/styles/Performances.module.scss"
import Image from "next/image";

export default function ChoreographyPage() {

    return (
        <div className={styles.container}>
            <div className={styles.background}></div>
            <div className={styles.content}>
                <h1>Choreography</h1>
                <div className={styles.performanceList}>
                    <PerformanceItem>
                        <PerformanceItemImage src="/images/choreo_plum_apricot.jpg" />
                        <PerformanceItemContent
                            title={"Mơ mận (Plum Apricot)"}
                            content={
                                <span>When the apricots are ripe and the plums are still on the tree</span>
                            }
                        />
                    </PerformanceItem>
                    <PerformanceItem>
                        <PerformanceItemContent 
                            title="Thầm Thì Gió Nước (Whisper, Wind, Water)"
                            content={
                                <>
                                    <span>
                                        A performance with live sound work by Maya Nguyen and performers from Kinergie Studio. There will be whispers of the artist himself, both natural and unnatural. The combination of the sound of the wind, the sound of grass and flowers, created by layers of human voices, reflecting human experiences and impacts on nature, will be presented in the presentation. unique performance at Vincom Center for Contemporary Art (VCCA) this time.
                                    </span>
                                </>                            
                            }
                        />
                        <PerformanceItemImage src="/images/choreo_whisper_wind_water.jpg" />
                    </PerformanceItem>
                    <PerformanceItem>
                        <PerformanceItemImage src="/images/choreo_the_rehearsal.jpg" />
                        <PerformanceItemContent 
                            title="Phòng Tập (The Rehearsal)"
                            content={
                                <>
                                    <span>Simulate a simple practice session in a contemporary dance class but with a spirit of fun and improvisation.</span>
                                </>                            
                            }
                        />
                    </PerformanceItem>
                </div>
            </div>
        </div>
    );
}

function PerformanceItem({children}) {
    return (
        <div className={styles.performanceItem}>
            {children}
        </div>
    );
}

function PerformanceItemImage({src}) {
    return (
        <div className={styles.performanceItemImage}>
            <Image src={src} alt="" fill />
        </div> 
    );
}

function PerformanceItemContent({content, title}) {
    return (
        <div className={styles.performanceItemContent}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}