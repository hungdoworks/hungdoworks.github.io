import styles from "@/styles/Performances.module.scss"
import { PerformanceItemVertical } from "@/components/performance-item-vertical";
import { PerformanceItemVerticalContent } from "@/components/performance-item-vertical-content";

import imgCatWalk from "../../../public/images/film_cat_walk.png";
import imgXinHayNhinEm from "../../../public/images/film_xin_hay_nhin_em.png";
import imgBananaForest from "../../../public/images/others_banana_forest.jpg";

export default function OthersPage() {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Others</h1>
                <div className={styles.performanceList}>
                    <PerformanceItemVertical>
                        <PerformanceItemVerticalContent 
                            title="“Catwalk” - Music video"
                            imgSrc={imgCatWalk}
                            content={
                                <>
                                    Official music video for "Catwalk", taken from Tran Uy Duc’s second album “Came” 
                                </>                            
                            }
                            detailsUrl="/others/details/cat-walk"
                        />
                    </PerformanceItemVertical>
                    <PerformanceItemVertical>
                        <PerformanceItemVerticalContent 
                            title="“Xin hãy nhìn em (Baby one more time)” - A film by Nguyễn Duy Anh"
                            imgSrc={imgXinHayNhinEm}
                            content={
                                <>
                                    To find the inspiration for a new role as well as to please her husband, Hương - the author of the movie has applied to work as a telemarketing employee for a sleeping pill company. Ironically, on the first day of work, Huong was unfairly slapped by her colleague Nhài. The slap is like the clap on the movie set, leaving a resounding echo in Huong as well as a rhythm for a series of dramatic changes that happen continuously throughout her day.
                                </>                            
                            }
                            detailsUrl="/others/details/xin-hay-nhin-em"
                        />
                    </PerformanceItemVertical>
                    <PerformanceItemVertical>
                        <PerformanceItemVerticalContent 
                            title="In The Banana Forest"
                            imgSrc={imgBananaForest}
                            content={
                                <>
                                    Inspired by the esthetic of painter Nguyen Gia Tri lacquer painting and the story in the banana trees in Nguyen Tuan novel “Echo and Shadow Upon a Time” (Vang Bong Mot Thoi)." Seven dancers are performing between the banana trees in a Butoh manner. They will blend in to be a part of nature, like wandering souls or just like the dried banana leaves in the garden. You can hear cutting pieces of a sonar, silent, than the sound of the banana forest.
                                </>                            
                            }
                            detailsUrl="/others/details/in-the-banana-forest"
                        />
                    </PerformanceItemVertical>
                </div>
            </div>
        </div>
    );
}

