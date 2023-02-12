import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/BackButton.module.scss";

import iconArrowBack from "../../public/icons/ic_arrow_back.svg";

export default function BackButton({url}) {
    return (
        <Link href={url} className={styles.backButton}>
            <Image 
                src={iconArrowBack} 
                alt="" 
                width={32} 
                height={24} 
            />
        </Link>
    );
}