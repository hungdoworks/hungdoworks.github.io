import styles from "@/styles/Performances.module.scss"
import { PerformanceItemVertical } from "@/components/performance-item-vertical";
import { PerformanceItemVerticalContent } from "@/components/performance-item-vertical-content";

import imgCatWalk from "../../../public/images/film_cat_walk.png";
import imgXinHayNhinEm from "../../../public/images/film_xin_hay_nhin_em.png";

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
                </div>
            </div>
        </div>
    );
}

