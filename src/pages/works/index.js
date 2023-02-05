import WorkList from "@/components/work-list";
import WorkListItem from "@/components/work-list-item";
import styles from "@/styles/Works.module.scss";
import imgPerformances from "../../../public/images/perf_a_woman.jpg";
import imgChoreography from "../../../public/images/choreo_plum_apricot.jpg";
import imgDanceFilms from "../../../public/images/films_resonance_camp.jpg";

export default function WorksPage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <WorkList>
                    <WorkListItem
                        title="Performances"
                        imgSrc={imgPerformances}
                        url="/performances"
                    />
                    <WorkListItem 
                        title="Choreography" 
                        imgSrc={imgChoreography} 
                        url="/choreography" 
                    />
                    <WorkListItem 
                        title="Dance & Film" 
                        imgSrc={imgDanceFilms}
                        url="/dance-films"
                    />
                </WorkList>
            </div>
        </div>
    );
}