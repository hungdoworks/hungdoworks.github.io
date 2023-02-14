import styles from "@/styles/Performances.module.scss";
import Image from "next/image";
import React, { useRef, useState } from "react";

export default function VideoSlider({ source }) {
    const contentRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        if (currentIndex - 1 < 0) return;
        
        const element = contentRef.current;
        element.scrollTo({
            top: 0,
            left: 1000 * (currentIndex - 1),
            behavior: 'smooth',        
        });

        setCurrentIndex(currentIndex - 1);
    }

    const handleNext = () => {
        if (currentIndex + 1 >= source.length) return;

        const element = contentRef.current;
        element.scrollTo({
            top: 0,
            left: 1000 * (currentIndex + 1),
            behavior: 'smooth',        
        });

        setCurrentIndex(currentIndex + 1);
    }

    return (
        <div className={styles.videoSlider}>
            <div 
                className={styles.videoSliderButton} 
                style={{visibility: currentIndex !== 0 ? "visible" : "hidden"}}
                onClick={handlePrev}
            >
                <Image src="/icons/ic_prev.svg" alt="" width={48} height={48}/>
            </div>
            <div className={styles.videoSliderContent} ref={contentRef}>
            {
                source.map((item, index) => (
                    <div key={index}>
                        <div className={styles.videoContainer}>
                            <iframe 
                                width="100%" 
                                height="auto" 
                                src={item}
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; 
                                    encrypted-media; gyroscope; picture-in-picture;
                                    web-share" 
                                allowfullscreen
                            >
                            </iframe>
                        </div>
                    </div>
                ))
            }
            </div>
            <div 
                className={styles.videoSliderButton} 
                style={{visibility: currentIndex !== source.length - 1 ? "visible" : "hidden"}}
                onClick={handleNext}
            >
                <Image src="/icons/ic_next.svg" alt="" width={48} height={48}/>
            </div>
        </div>
    );
}