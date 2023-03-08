// nama-domain.com/news/detail

import { useRouter } from "next/router";

export default function NewsPage() {
    const router = useRouter();

    // untuk mendapatkan akses ke nilai yang konkret dari dynamic path segment (dalam kasus ini "newsId"). Di console akan melihat dua log karena begitulah cara kerja router (berjalan ketika halaman pertama kali dirender yang hasilnya "undefined" dan setelah mendapatkan informasi komponen dirender kembali yang menghasilkan nilai konkret)
    // console.log(routers.query.newsId);
    const newsId = router.query.newsId;

    // Kita dapat mengirim request ke backend API untuk mengambil news item dengan newsId

    return <h1>The Detail Page</h1>;
}
