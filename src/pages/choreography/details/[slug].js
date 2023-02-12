import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import choreographyData from "@/data/choreography/details";
import styles from "@/styles/Performances.module.scss";
import BackButton from "@/components/back-button";


export default function ChoreographyItemDetails() {
    const router = useRouter();
    const { slug } = router.query;

    const [data, setData] = useState(null);

    useEffect(() => {
        setData(choreographyData[slug]);
    }, [slug]);

    if (!data) return (<></>);
    
    return (
        <div className={styles.container}>
            <div className={clsx(styles.content, styles.contentDetails)}>
                <BackButton url="/choreography" />
                <h1>{data.title}</h1>
                {
                    data.videos.map((item, index) => (
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
                            <div style={{ height: "80px" }}></div>
                        </div>
                    ))
                }
                <p>
                    {data.description}
                </p>
                <br />
                <p>
                    {data.credits}
                </p>
                <div style={{height: "100px"}}></div>
                <div className={styles.imageGallery}>
                    {
                        data.images.map((item, index) => (
                            <div key={index} className={styles.imageContainer}>
                                <Image src={item} alt="" fill placeholder="blur" />
                            </div>)
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'plum-apricot' } }, 
            { params: { slug: 'the-rehearsal' } },
            { params: { slug: 'whisper-wind-water' } },
        ],
        fallback: false, // can also be true or 'blocking'
    }
  }

export async function getStaticProps({ params }) {
    return {
        props: {

        }, // will be passed to the page component as props
    }
}