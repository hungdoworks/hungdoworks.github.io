import Image from "next/image";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  const textAWoman = <span>A <span style={{wordSpacing: "-12px"}}>Wo │ man</span></span>;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image src="/images/bg_home.jpg" alt="" fill placeholder="blur" />
        <div className={styles.title}>
          <p>Minh Hai</p>
          <p>Dancer | Performer</p>
        </div>
        <div className={styles.info}>
          <p>
            Trần Minh Hải (b.1993) started her career in practicing contemporary dance in 2017 with Kinergie Studio. She aspires to create new journeys of discovery through movement, dance and "play". Thereby, she can expand deeper and more quality connections. Hai has participated in many shows and performed at “A Touch of Belgium”, Krossing Over Arts Festival, “2:1:2 Tight” Play, L’EGO Show and other Kinergie Studio's activities.
          </p>
          <p>
            In 2021, Hai co-directed and performed in the contemporary dance "{textAWoman}" - within the framework of the Antigone Saison project initiated by the Goethe-Institut Vietnam. In 2022, Minh Hai is also nominated for the active artist category in the Hanoi Grapevine Finest Pandemic Award.
          </p>
        </div>
      </div>
    </div>
  )
}
