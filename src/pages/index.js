import Image from "next/image";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Image src="/images/bg_home.jpg" alt="" fill />
      <div style={{ position: "absolute", color: "#FFFFFF" }}>
        <p>Minh Hai</p>
        <p>Dancer | Performer</p>
      </div>
    </div>
  )
}
