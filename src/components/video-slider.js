import styles from "@/styles/components/VideoSlider.module.scss";
import performanceStyles from "@/styles/Performances.module.scss";
import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";

export default function VideoSlider({ source }) {
    const contentRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollWidth = useMemo(() => {
        const element = contentRef.current;

        if (!element) return 0;

        const videoContainers = element.getElementsByClassName(performanceStyles.videoContainer);

        return videoContainers[0].scrollWidth;
    }, [contentRef.current]);

    useEffect(() => {
        const element = contentRef.current;

        element.scrollTo({
            top: 0,
            left: scrollWidth * currentIndex,
            behavior: 'smooth',        
        });
    }, [currentIndex]);

    const handlePrev = () => {
        if (currentIndex - 1 < 0) return;
        
        setCurrentIndex(currentIndex - 1);
    }

    const handleNext = () => {
        if (currentIndex + 1 >= source.length) return;

        setCurrentIndex(currentIndex + 1);
    }

    const jumpToVideo = (index) => {
        setCurrentIndex(index);
    }

    return (
        <>
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
                            <div className={performanceStyles.videoContainer}>
                                <iframe 
                                    width="100%" 
                                    height="auto" 
                                    src={item}
                                    title="YouTube video player" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; 
                                        encrypted-media; gyroscope; picture-in-picture;
                                        web-share" 
                                    allowfullscreen="1"
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
            <br />
            <div style={{textAlign: "center"}}>
                {
                    [...Array(source.length).keys()].map(item => 
                        <span 
                            key={item} 
                            className={clsx(styles.dot, currentIndex === item && styles.active)}
                            onClick={() => jumpToVideo(item)}
                        >
                        </span>
                    )
                }
            </div>
        </>
    );
}