import WorkList from "@/components/work-list";
import WorkListItem from "@/components/work-list-item";
import styles from "@/styles/Works.module.scss";

export default function WorksPage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <WorkList>
                    <WorkListItem
                        title="Performances"
                        imgSrc="/images/perf_a_woman.jpg"
                        url="/performances"
                    />
                    <WorkListItem 
                        title="Choreography" 
                        imgSrc="/images/choreo_plum_apricot.jpg" 
                        url="/choreography" 
                    />
                    <WorkListItem 
                        title="Dance & Film" 
                        imgSrc="/images/films_resonance_camp.jpg" 
                        url="/dance-films"
                    />
                </WorkList>
            </div>
        </div>
    );
}