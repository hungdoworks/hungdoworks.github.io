import SideNavigation from "@/components/side-nav";
import styles from "@/styles/Contact.module.scss"
import Image from "next/image";

import imgAvatar from "../../../public/avatar.png";

export default function ContactPage() {

    return (
        <SideNavigation>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>Contact</h1>
                    <div className={styles.gridInfo}>
                        <div className={styles.imageContainer}>
                            <Image src={imgAvatar} alt="" fill placeholder="blur" />
                        </div>
                        <div>
                            <p>If you have any question or inquiry, please contact directly either to Hai's personal email or Kinergie Studio 's email.</p>
                            <br />
                            <p>
                                Minh Hai
                                <br />
                                Email: Haiminhchan@gmail.com
                            </p>
                            <br />
                            <p>
                                Kinergie Studio
                                <br />
                                Email: Kinergie.studio@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </SideNavigation>
    );
}

