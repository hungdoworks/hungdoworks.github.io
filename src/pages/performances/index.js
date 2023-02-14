import styles from "@/styles/Performances.module.scss"
import { PerformanceItem } from "@/components/performance-item";
import { PerformanceItemContent } from "@/components/performance-item-content";
import { PerformanceItemImage } from "@/components/performance-item-image";
import WordAWoman from "@/components/word-a-woman";
import BackButton from "@/components/back-button";

import imgAWoman from "../../../public/images/perf_a_woman.jpg";
import imgTamSinh from "../../../public/images/perf_tam_sinh.jpg";
import imgLego from "../../../public/images/perf_l_ego.jpg";
import imgCramped from "../../../public/images/perf_cramped.jpg";

export default function PerformancesPage() {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <BackButton url="/works" />
                <h1>Performances</h1>
                <div className={styles.performanceList}>
                    <PerformanceItem>
                        <PerformanceItemImage src={imgAWoman} />
                        <PerformanceItemContent
                            title={<WordAWoman />}
                            content={
                                <span>
                                    “{<WordAWoman />}" is a contemporary dance play within the Goethe Institute's Antigone project (calling for innovative performances based on Sophocles' classic Greek play Antigone) was choreographed by Minh Hai and Hoang Ha. Instead of showing all philosophical layers of the original play, "{<WordAWoman />}" focuses on looking deeper into Antigone's inner world and through this woman's journey to find the answer for the question: What can a human do when fate has been arranged? Even if it is a tragedy, how will a person proceed in the journey to her own foreknown death?
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
                            detailsUrl="/performances/details/tam-sinh"
                        />
                        <PerformanceItemImage src={imgTamSinh} />
                    </PerformanceItem>
                    <PerformanceItem>
                        <PerformanceItemImage src={imgLego} />
                        <PerformanceItemContent 
                            title="L'ego"
                            content={
                                <>
                                    <span>Me – us, monochromatic – multichromatic colors, individual – collective, personal – joint stories are fragments that in moments of connection create a colorful, spontaneous, hence captivating picture.</span>
                                    <br />
                                    <span>L'EGO is a co-creation with influences from contemporary dance, hip hop and jazz theater. There is talk of beauty, identity and individual people, of subtle connections, emotional exchange and the many colours and shades of every moment of life.</span>
                                </>                            
                            }
                            detailsUrl="/performances/details/l-ego"
                        />
                    </PerformanceItem>
                    <PerformanceItem>
                        <PerformanceItemContent 
                            title="Chật (Journey of Chat)"
                            content={
                                <>
                                    <span>“CHẬT 2:1:2” explores the responses of individuals and collectives within limited and narrow spaces, expressing people’s choices, struggles, the search for balance, adaptivity... CHẬT was first introduced in Kinergie Studio last December and enjoyed much of love of the audience.</span>
                                </>                            
                            }
                            detailsUrl="/performances/details/cramped"
                        />
                        <PerformanceItemImage src={imgCramped} />
                    </PerformanceItem>
                </div>
            </div>
        </div>
    );
}

