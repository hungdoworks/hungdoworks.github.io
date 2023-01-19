import Image from "next/image";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.containerBackground}></div>
      <div className={styles.content}>
        <Image src="/images/bg_home.jpg" alt="" fill />
        <div className={styles.title}>
          <p>Minh Hai</p>
          <p>Dancer | Performer</p>
        </div>
      </div>
    </div>
  )
}
