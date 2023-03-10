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

## Static-side generation & Server-side Rendering

Static generation dan server-side rendering adalah dua teknik yang berbeda yang bisa digunakan dalam Next.js untuk mempercepat waktu rendering halaman web dan meningkatkan pengalaman pengguna.

1.  <strong>Server-side rendering (SSR)</strong> di Next.js memungkinkan untuk men-generate halaman web pada waktu request, yaitu ketika pengguna mengakses halaman web. Dalam SSR, server akan memproses permintaan pengguna dan mengirimkan halaman web yang telah di-generate dari server. SSR berguna untuk membuat aplikasi yang dinamis dan kompleks karena dapat mengambil data dari server dan men-generate halaman dengan data tersebut.

Next.js memiliki dukungan untuk Server Side Rendering melalui fitur "getServerSideProps()". getServerSideProps digunakan ketika kita ingin mengambil data pada saat request dari client (saat website diakses), dan data yang diambil akan selalu up-to-date karena diambil langsung dari server pada saat request. getServerSideProps sangat cocok digunakan pada data yang dinamis, misalnya data dari database.

2.  Default rendering / <strong>Static-side generation (SSG)</strong> di Next.js memungkinkan untuk men-generate halaman web pada waktu kompilasi, yaitu ketika aplikasi di-build. Dalam SSG, halaman web di-generate menjadi file HTML yang disimpan di server, sehingga saat pengguna mengakses halaman, server hanya perlu menampilkan file HTML yang sudah disimpan, tanpa perlu melakukan pengolahan data yang kompleks.

Next.js memiliki dukungan untuk Static Site Generation melalui fitur "getStaticProps()". getStaticProps digunakan ketika kita ingin mengambil data pada saat build time (saat kita build website), dan data yang diambil akan di-cache oleh Next.js dan di-update sesuai waktu yang ditentukan oleh kita atau bila terjadi perubahan pada data. getStaticProps sangat cocok digunakan pada data yang statis, misalnya data dari file JSON atau CMS.

Perbedaan utama antara SSG dan SSR di Next.js adalah waktu rendering halaman web. SSG menghasilkan file HTML pada waktu build, sementara SSR mem-generate halaman web pada waktu request. Karena SSG menghasilkan file HTML yang bisa disajikan langsung oleh server, maka SSG lebih cepat dalam menampilkan halaman web ketika pengguna mengaksesnya. Namun, SSG kurang fleksibel karena hanya bisa menampilkan data yang sudah ada pada waktu build, sedangkan SSR bisa menampilkan data yang baru di-generate pada waktu request.

Pilihan antara SSG atau SSR bergantung pada jenis aplikasi yang ingin dibuat dan kebutuhan penggunaannya. Jika aplikasi membutuhkan konten yang dinamis dan sering berubah serta memerlukan akses ke objek request, maka SSR lebih cocok. Namun, jika aplikasi memiliki konten yang relatif statis dan tidak sering berubah serta tidak memerlukan objek request, maka SSG bisa menjadi pilihan yang lebih tepat untuk meningkatkan kecepatan dan kinerja halaman web.

### Revalidate property

revalidate adalah sebuah properti yang bisa digunakan dalam static generation di Next.js untuk mengatur interval waktu (dalam detik) sebelum file HTML hasil generate akan di-revalidate atau diperbarui. Properti ini bisa digunakan pada halaman yang di-generate secara static, dengan tujuan untuk memastikan bahwa data yang ditampilkan di halaman selalu up-to-date.

Penggunaan revalidate sangat berguna dalam mengoptimalkan performa situs web. Dengan menggunakan properti ini, Anda bisa mengatur interval waktu di mana data di-cache dianggap valid, sehingga situs web bisa menampilkan data yang terbaru tanpa perlu merefresh halaman. Selain itu, penggunaan revalidate juga berguna dalam menghemat sumber daya server, karena halaman hanya akan di-generate ulang ketika data sudah usang dan diperlukan kembali.

## API Routes

API routes di Next.js adalah fitur yang memungkinkan kita membuat API server-side dengan mudah. API routes menyediakan cara mudah untuk menangani permintaan HTTP dari klien dan mengirimkan kembali respon yang sesuai.

API routes pada Next.js dibuat dengan membuat file JavaScript di dalam direktori /pages/api. File ini harus memiliki nama yang dimulai dengan awalan api/. Setiap file ini akan berisi kode JavaScript yang menangani permintaan HTTP dan mengirimkan kembali respon yang sesuai dan akan berjalan diserver dan tidak akan pernah di ekspose ke klien.

Contohnya, jika kita ingin membuat API route untuk mengambil daftar produk dari server, kita bisa membuat file bernama api/products.js dan menambahkan kode JavaScript untuk menangani permintaan GET dari klien dan mengirimkan daftar produk sebagai respon.

API routes pada Next.js sangat berguna ketika kita ingin membuat aplikasi web yang memerlukan komunikasi dengan server-side, seperti aplikasi e-commerce atau platform media sosial. Dengan API routes, kita dapat membuat server-side logic yang dapat dipanggil dari sisi klien secara mudah dan efisien.
