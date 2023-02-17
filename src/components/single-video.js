import styles from "@/styles/Performances.module.scss";

export default function SingleVideo({ url }) {
    return (
        <div className={styles.videoContainer}>
            <iframe
                width="100%"
                height="auto"
                src={url}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; 
                        encrypted-media; gyroscope; picture-in-picture;
                        web-share"
                allowfullscreen="1"
            >
            </iframe>
        </div>
    );
}