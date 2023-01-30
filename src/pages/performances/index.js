import styles from "@/styles/Performances.module.scss"
import { PerformanceItem } from "@/components/performance-item";
import { PerformanceItemContent } from "@/components/performance-item-content";
import { PerformanceItemImage } from "@/components/performance-item-image";

export default function PerformancesPage() {
    const titleAWoman = <span>A <span style={{wordSpacing: "-24px"}}>Wo │ man</span></span>;
    const textAWoman = <span>A <span style={{wordSpacing: "-12px"}}>Wo │ man</span></span>;

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Performances</h1>
                <div className={styles.performanceList}>
                    <PerformanceItem>
                        <PerformanceItemImage src="/images/perf_a_woman.jpg" />
                        <PerformanceItemContent
                            title={titleAWoman}
                            content={
                                <span>
                                    “{textAWoman}" is a contemporary dance play within the Goethe Institute's Antigone project (calling for innovative performances based on Sophocles' classic Greek play Antigone) was choreographed by Minh Hai and Hoang Ha. Instead of showing all philosophical layers of the original play, "{textAWoman}" focuses on looking deeper into Antigone's inner world and through this woman's journey to find the answer for the question: What can a human do when fate has been arranged? Even if it is a tragedy, how will a person proceed in the journey to her own foreknown death?
                                </span>
                            }
                            detailsUrl="/performances/details/a-woman"
                        />
                    </PerformanceItem>
                    <PerformanceItem>
                        <PerformanceItemContent 
                            title="Tam Sinh"
                            content={
                                <>
                                    <span>
                                    “ Three births<br />
                                    Three piece<br />
                                    and one light...“
                                    </span>
                                </>                            
                            }
                        />
                        <PerformanceItemImage src="/images/perf_tam_sinh.jpg" />
                    </PerformanceItem>
                    <PerformanceItem>
                        <PerformanceItemImage src="/images/perf_l_ego.jpg" />
                        <PerformanceItemContent 
                            title="L'ego"
                            content={
                                <>
                                    <span>Me – us, monochromatic – multichromatic colors, individual – collective, personal – joint stories are fragments that in moments of connection create a colorful, spontaneous, hence captivating picture.</span>
                                    <br />
                                    <span>L'EGO is a co-creation with influences from contemporary dance, hip hop and jazz theater. There is talk of beauty, identity and individual people, of subtle connections, emotional exchange and the many colours and shades of every moment of life.</span>
                                </>                            
                            }
                        />
                    </PerformanceItem>
                    {/* <PerformanceItem>
                        <PerformanceItemImage src="/images/perf_cramped.jpg" />
                        <PerformanceItemContent 
                            title="Cramped"
                            content={`
                                Chật – is the story on a fragile border, two individuals who have slided pass each other, met, encountered, confronted and found. The narrow and fragile space bundles tightly and compels each individual, in order to maintain their own most essential things, to scramble every bit of space. Thrusting, crushing, kicking until the end of conflict, we are dumbfounded to realize that we are empty and full of hurt. In silence, we empathize ourselves through the eyes of the opposite
                            `}
                        />
                    </PerformanceItem> */}
                </div>
            </div>
        </div>
    );
}

