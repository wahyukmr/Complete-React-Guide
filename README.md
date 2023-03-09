## React.js & Next.js

ReactJS dan NextJS keduanya adalah framework untuk membangun aplikasi web dengan JavaScript. Namun, mereka melayani tujuan yang berbeda dan memiliki kekuatan yang berbeda.

<strong>ReactJS</strong> adalah library JavaScript front-end populer untuk membangun antarmuka pengguna. Ini menyediakan cara untuk membuat komponen UI yang dapat digunakan kembali dan mengelola status secara deklaratif dan efisien. ReactJS dapat digunakan untuk membangun aplikasi satu halaman (SPAs) dan aplikasi yang di-render oleh sisi server (SSR).

<strong>NextJS</strong>, di sisi lain, adalah framework yang dibangun di atas ReactJS yang menambahkan rendering oleh sisi server dan fitur lain seperti pembagian kode otomatis, performa yang dioptimalkan, dan deployment yang mudah untuk membuat aplikasi web berkualitas tinggi yang siap untuk produksi. NextJS sangat berguna untuk membangun aplikasi besar dan kompleks yang membutuhkan performa tinggi dan optimasi SEO.

Berikut adalah beberapa perbedaan kunci antara NextJS dan ReactJS:

-   <strong>Server-side rendering:</strong> NextJS menyediakan rendering oleh sisi server secara langsung, yang memungkinkan untuk melakukan Pre-rendering, Pre-rendering sendiri adalah sebuah konsep dimana server melakukan render terhadap application component dengan segala data yang ada pada komponen tersebut sebelum dikirim kepada user dalam bentuk file HTML. Menampilkan file HTML yang telah siap akan membuat browser menampilkan aplikasi jauh lebih cepat secara akses maupun performa dan lebih ramah SEO. ReactJS tidak menyediakan fungsionalitas ini secara default, tetapi bisa dicapai menggunakan library tambahan seperti NextJS.
-   <strong>Pembagian kode otomatis:</strong> NextJS secara otomatis membagi kode menjadi beberapa bagian kecil, yang dapat dimuat secara dinamis sesuai kebutuhan. Ini menghasilkan waktu muat yang lebih cepat dan performa yang lebih baik. ReactJS tidak menyediakan fungsionalitas ini, tetapi bisa dicapai menggunakan library tambahan.
-   <strong>Routing:</strong> NextJS menyediakan sistem routing bawaan yang membuat mudah untuk menentukan dan mengelola rute halaman. ReactJS tidak menyediakan fungsionalitas ini, tetapi bisa dicapai menggunakan library tambahan.
-   <strong>Deployment:</strong> NextJS memudahkan untuk menyebarluaskan aplikasi Anda ke produksi dengan menyediakan konfigurasi pembangunan yang dioptimalkan dan optimasi otomatis. ReactJS membutuhkan konfigurasi dan penyiapan tambahan untuk diterbitkan ke produksi.

Secara keseluruhan, NextJS adalah framework yang sangat kuat yang menyediakan banyak manfaat untuk membangun aplikasi web berkualitas tinggi, sementara ReactJS adalah library yang lebih ringan yang ideal untuk membangun komponen UI yang dapat digunakan kembali.

## Next.js sebagai fullstack framework

Next.js disebut sebagai "fullstack framework" karena ia menyediakan dukungan untuk membangun aplikasi web lengkap secara end-to-end, dari rendering oleh sisi server hingga interaksi pengguna oleh sisi klien.

Dalam tradisi pengembangan web, pengembangan aplikasi web terdiri dari dua komponen utama: sisi klien (front-end) dan sisi server (back-end). Sisi klien biasanya meliputi komponen-komponen seperti antarmuka pengguna, HTML, CSS, dan JavaScript yang berjalan di browser pengguna. Di sisi lain, sisi server meliputi komponen-komponen seperti server web, database, dan API yang digunakan untuk mengakses data.

Next.js, sebagai "fullstack framework", memungkinkan pengembang untuk membuat aplikasi web lengkap yang dapat merender halaman secara server-side, memiliki routing yang baik, pembagian kode otomatis, dan performa yang dioptimalkan. Selain itu, Next.js menyediakan dukungan untuk fitur seperti autentikasi pengguna, penanganan formulir, dan akses ke data melalui API.

Karena Next.js menyediakan dukungan untuk sisi klien dan sisi server, serta fitur-fitur yang dibutuhkan untuk membangun aplikasi web yang lengkap, ia dapat disebut sebagai "fullstack framework". Hal ini juga memudahkan pengembangan aplikasi web dengan Next.js, karena pengembang tidak perlu mempelajari banyak teknologi terpisah dan dapat memusatkan perhatian pada pengembangan fitur-fitur aplikasi.

### Dinamic pages

Jika memiliki tanda kurung siku di nama file, ini memberi tahu nextjs bahwa ini akan menjadi halaman dinamic sehingga harus dimuat untuk nilai yang berbeda pada path.

## Static generation & Server-side Rendering

Static generation dan server-side rendering adalah dua teknik yang berbeda yang bisa digunakan dalam Next.js untuk mempercepat waktu rendering halaman web dan meningkatkan pengalaman pengguna.

-   <strong>Server-side rendering (SSR)</strong> di Next.js memungkinkan untuk men-generate halaman web pada waktu request, yaitu ketika pengguna mengakses halaman web. Dalam SSR, server akan memproses permintaan pengguna dan mengirimkan halaman web yang telah di-generate dari server. SSR berguna untuk membuat aplikasi yang dinamis dan kompleks karena dapat mengambil data dari server dan men-generate halaman dengan data tersebut.

-   Default rendering / <strong>Static generation (SG)</strong> di Next.js memungkinkan untuk men-generate halaman web pada waktu kompilasi, yaitu ketika aplikasi di-build. Dalam SG, halaman web di-generate menjadi file HTML yang disimpan di server, sehingga saat pengguna mengakses halaman, server hanya perlu menampilkan file HTML yang sudah disimpan, tanpa perlu melakukan pengolahan data yang kompleks.

Perbedaan utama antara SG dan SSR di Next.js adalah waktu rendering halaman web. SG menghasilkan file HTML pada waktu build, sementara SSR mem-generate halaman web pada waktu request. Karena SG menghasilkan file HTML yang bisa disajikan langsung oleh server, maka SG lebih cepat dalam menampilkan halaman web ketika pengguna mengaksesnya. Namun, SG kurang fleksibel karena hanya bisa menampilkan data yang sudah ada pada waktu build, sedangkan SSR bisa menampilkan data yang baru di-generate pada waktu request.

Pilihan antara SG dan SSR bergantung pada jenis aplikasi yang ingin dibuat dan kebutuhan penggunaannya. Jika aplikasi membutuhkan konten yang dinamis dan sering berubah, maka SSR lebih cocok. Namun, jika aplikasi memiliki konten yang relatif statis dan tidak sering berubah, maka SG bisa menjadi pilihan yang lebih tepat untuk meningkatkan kecepatan dan kinerja halaman web.

### Revalidate property

revalidate adalah sebuah properti yang bisa digunakan dalam static generation di Next.js untuk mengatur interval waktu (dalam detik) sebelum file HTML hasil generate akan di-revalidate atau diperbarui. Properti ini bisa digunakan pada halaman yang di-generate secara static, dengan tujuan untuk memastikan bahwa data yang ditampilkan di halaman selalu up-to-date.

Penggunaan revalidate sangat berguna dalam mengoptimalkan performa situs web. Dengan menggunakan properti ini, Anda bisa mengatur interval waktu di mana data di-cache dianggap valid, sehingga situs web bisa menampilkan data yang terbaru tanpa perlu merefresh halaman. Selain itu, penggunaan revalidate juga berguna dalam menghemat sumber daya server, karena halaman hanya akan di-generate ulang ketika data sudah usang dan diperlukan kembali.

## getStaticProps() & getServerSideProps()

getStaticProps dan getServerSideProps adalah dua metode yang digunakan di Next.js untuk mengambil data pada saat render pada server-side.

1. getStaticProps:
   getStaticProps digunakan ketika kita ingin mengambil data pada saat build time (saat kita build website), dan data yang diambil akan di-cache oleh Next.js dan di-update sesuai waktu yang ditentukan oleh kita atau bila terjadi perubahan pada data. getStaticProps sangat cocok digunakan pada data yang statis, misalnya data dari file JSON atau CMS.

2. getServerSideProps:
   getServerSideProps digunakan ketika kita ingin mengambil data pada saat request dari client (saat website diakses), dan data yang diambil akan selalu up-to-date karena diambil langsung dari server pada saat request. getServerSideProps sangat cocok digunakan pada data yang dinamis, misalnya data dari database.

Perbedaan utama antara getStaticProps dan getServerSideProps adalah pada saat diambilnya data (build time vs request time) dan juga pada waktu update data (di-cache vs selalu up-to-date). Kita bisa memilih metode yang sesuai dengan kebutuhan kita, apakah data yang diambil statis atau dinamis, dan apakah kita ingin data tersebut di-cache atau selalu up-to-date.

Gunakan getStaticProps() jika tidak memiliki data yang berubah sepanjang waktu(berubah beberapa kali setiap detik) dan tidak memerlukan akses ke request objek (misal untuk authentication). Halaman akan lebih cepat karena dapat di cache dan digunakan kembali alih-alih dibuat ulang setiap saat.
