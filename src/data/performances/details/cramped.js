import Link from "next/link";

import img0 from "../../../../public/images/performances/cramped/img_0.jpg";
import img1 from "../../../../public/images/performances/cramped/img_1.webp";
import img2 from "../../../../public/images/performances/cramped/img_2.webp";
import img3 from "../../../../public/images/performances/cramped/img_3.webp";
import img4 from "../../../../public/images/performances/cramped/img_4.webp";
import img5 from "../../../../public/images/performances/cramped/img_5.webp";


const title = "Chật (Journey of Chat)";

const videos = [
    "https://www.youtube.com/embed/_OEAt9vPDEU"
];

const images = [
    img0,
    img1,
    img2,
    img3,
    img4,
    img5,
];

const description = <>
    <span>
        “CHẬT 2:1:2” explores the responses of individuals and collectives within limited and narrow spaces, expressing people’s choices, struggles, the search for balance, adaptivity... CHẬT was first introduced in Kinergie Studio last December and enjoyed much of love of the audience.
    </span>
</>

const credits = <>
    Artistic Director: Đỗ Hoàng Thi Ngọc
    <br />
    Dancers: Tú Lê, Hoàng Hà, Thảo Lê, Minh Hải, Thanh Hương
    <br />
    Musicians: 
    <br />
    - Fabrice Poirier
    <br />
    - <Link href="https://www.facebook.com/linhhafornow">Linh Hà</Link>
    <br />
    Visual artist: Alex Serpentini
    <br />
    Music used for the solo in the performance: 
    <br />
    - Black Moon by Lương Huệ Trinh
    <br />
    - Forest of Memories by Ryoji Ikeda
    <br />
    <br />
    P.A.S festival, organized since 2015, aimes to create a forum for multicultural art exchange between different art performers based in Vietnam and South East Asia. During 2 weekends, P.A.S Festival 2019 gathers together drama, improvisation, dance and music performances created in Hanoi or elsewhere, presented by children, teenagers and adults, intended for a diverse audience.
    <br />
</>;

export default {
    title,
    videos,
    description,
    credits,
    images,
}