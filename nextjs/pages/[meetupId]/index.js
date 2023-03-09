import { useRouter } from "next/router";

export default function DetailMeetu() {
    const router = useRouter();

    const meetupId = router.query.meetupId;

    return <h1>{meetupId}</h1>;
}

// getStaticPaths adalah fungsi lain yang dimengerti nextjs sama seperti getStaticProps dan getServerSideProps. Dan juga perlu di export dalam file komponen halaman jika halamannya dinamic dan menggunakan getStaticProps, tidak jika menggunakan getServerSideProps. Karena akan memberitahu nextjs nilai parameter dinamic shalaman yang harus dimuat sebelumnya, kemudian menjalankan getStaticProps untuk setiap halaman
export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: "m1",
                },
            },
            {
                params: {
                    meetupId: "m2",
                },
            },
        ],
    };
}

// getStaticProps akan me re-generate semua halaman dinamic terlebih dahulu sebelum semua ID. Karena disini halamannya dinamic, nextjs perlu mengetahui nilai ID mana yang harus di re-generate.
export async function getStaticProps(context) {
    // Kita mendapatkan ID dari URL disini, tetapi ini tidak dibuat atau dihasilkan saat user mengunjungi halaman ini dengan URL yang spesifik melainkan setelah proses build. Jadi perlu untuk menyiapkan terlebih dahulu semua URL dari nilai ID yang mungkin dimasukkan user saat runtime, dan itulah tugas getStaticPaths.
    const getId = context.params.meetupId;

    console.log(getId);

    return {
        props: {
            meetupData: {
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
                id: getId,
                title: "First Meetup",
                address: "Some Street 5, Some City",
                description: "This is a first meetup",
            },
        },
    };
}
