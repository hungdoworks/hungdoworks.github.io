import styles from "@/styles/Performances.module.scss"
import { PerformanceItem } from "@/components/performance-item";
import { PerformanceItemContent } from "@/components/performance-item-content";
import BackButton from "@/components/back-button";

import imgPlumApricot from "../../../public/images/choreo_plum_apricot.jpg";
import imgWhisperWindWater from "../../../public/images/choreo_whisper_wind_water.jpg";
import imgTheRehearsal from "../../../public/images/choreo_the_rehearsal.jpg";
import SideNavigation from "@/components/side-nav";

export default function ChoreographyPage() {

    return (
        <SideNavigation>
            <div className={styles.container}>
                <div className={styles.content}>
                    <BackButton url="/works" />
                    <h1>Choreography</h1>
                    <div className={styles.performanceList}>
                        <PerformanceItem>
                            <PerformanceItemContent
                                imageSrc={imgPlumApricot}
                                title={"Mơ mận (Plum Apricot)"}
                                content={
                                    <span>When the apricots are ripe and the plums are still on the tree</span>
                                }
                                detailsUrl="/choreography/details/plum-apricot"
                            />
                        </PerformanceItem>
                        <PerformanceItem reverse>
                            <PerformanceItemContent 
                                imageSrc={imgWhisperWindWater}
                                title="Thầm Thì Gió Nước (Whisper, Wind, Water)"
                                content={
                                    <>
                                        <span>
                                            A performance with live sound work by Maya Nguyen and performers from Kinergie Studio. There will be whispers of the artist himself, both natural and unnatural. The combination of the sound of the wind, the sound of grass and flowers, created by layers of human voices, reflecting human experiences and impacts on nature, will be presented in the presentation. unique performance at Vincom Center for Contemporary Art (VCCA) this time.
                                        </span>
                                    </>                            
                                }
                                detailsUrl="/choreography/details/whisper-wind-water"
                            />
                        </PerformanceItem>
                        <PerformanceItem>
                            <PerformanceItemContent 
                                imageSrc={imgTheRehearsal}
                                title={
                                    <>
                                        <span>Phòng Tập</span>
                                        <br />
                                        <span>(The Rehearsal)</span>
                                    </>
                                }
                                content={
                                    <>
                                        <span>Simulate a simple practice session in a contemporary dance class but with a spirit of fun and improvisation.</span>
                                    </>                            
                                }
                                detailsUrl="/choreography/details/the-rehearsal"
                            />
                        </PerformanceItem>
                    </div>
                </div>
            </div>
        </SideNavigation>
    );
}