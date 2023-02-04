import styles from "@/styles/Performances.module.scss"
import { PerformanceItem } from "@/components/performance-item";
import { PerformanceItemContent } from "@/components/performance-item-content";
import { PerformanceItemImage } from "@/components/performance-item-image";

export default function WorkshopPage() {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Workshops</h1>
                <div className={styles.performanceList}>
                    <PerformanceItem>
                        <PerformanceItemImage src="/images/workshop-ngo.png" />
                        <PerformanceItemContent 
                            title="“Release and Connect” for NGO"
                            content={
                                <>
                                    “I was so impressed, full of fun to have the opportunity to know such a dedicated workshop! Thank you is definitely not enough to express the appreciation I am feeling. Come to really touch the emotions, will definitely come back and continue to stick together” – Thanh Mai
                                </>                            
                            }
                            detailsUrl="/workshops/details/release-and-connect"
                        />
                    </PerformanceItem>
                    <PerformanceItem>
                        <PerformanceItemContent 
                            title="“Connect and be creative” through Contemporary Dance"
                            content={
                                <>
                                    “The feeling after three days of attending the workshop is that the workshop is very comfortable and light. Hai loves what she’s doing, her love for her job and love for dance is contagious to students. Although it was short, the workshop instilled in me a love of movement. Hope to join Hai’s other workshops..."<br />
                                    – Nhất Phu
                                </>                            
                            }
                            detailsUrl="/workshops/details/connect-and-creative"
                        />
                        <PerformanceItemImage src="/images/workshop-saigon.jpg" />
                    </PerformanceItem>
                </div>
            </div>
        </div>
    );
}

