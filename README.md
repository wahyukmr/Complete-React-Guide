## Deployment Steps:

1.  Test Code

2.  Optimize Code

    Lazy loading adalah teknik optimasi performa pada aplikasi yang digunakan untuk memuat sumber daya secara dinamis hanya saat dibutuhkan, daripada memuat semua sumber daya sekaligus saat halaman atau aplikasi dimuat. Dengan cara ini, aplikasi hanya memuat data yang diperlukan pada saat itu, yang dapat meningkatkan kecepatan loading halaman, mengurangi beban server, dan menghemat bandwidth.

    Contoh penerapan lazy loading adalah pada gambar atau video pada sebuah halaman web. Ketika halaman dimuat, gambar atau video hanya memuat gambar yang terlihat pada layar dan memuat gambar yang tidak terlihat atau yang berada di bawah layar hanya saat pengguna menggulir ke bawah halaman. Dengan menggunakan teknik ini, halaman web dapat dimuat lebih cepat karena hanya memuat gambar yang benar-benar diperlukan, bukan seluruh gambar di halaman tersebut.

    Pada aplikasi yang lebih kompleks, lazy loading juga dapat digunakan untuk memuat komponen atau modul hanya saat dibutuhkan. Dengan cara ini, aplikasi dapat mempercepat waktu loading halaman dan meningkatkan responsivitas dengan mengurangi waktu yang diperlukan untuk memuat seluruh aplikasi sekaligus.

    Namun, perlu diingat bahwa lazy loading tidak selalu merupakan solusi terbaik untuk semua kasus. Terkadang, memuat seluruh sumber daya sekaligus dapat lebih efisien atau dapat meningkatkan performa aplikasi secara keseluruhan. Selain itu, penggunaan lazy loading juga harus diterapkan dengan hati-hati untuk menghindari masalah dengan aksesibilitas dan SEO pada aplikasi.

3.  Build an App for Production

        npm run build

4.  Upload Production Code to Server

    React Single Page Application (SPA) adalah sebuah "Static Website", hanya terdiri dari HTML, CSS, JavaScript dan mungkin beberapa resource tetapi tidak mengamdung kode yang harus dieksekusi di server. Oleh karena itu kita hanya memerlukan Static Site Host, tidak perlu memerlukan penyedia hosting yang mengeksekusi kode di server.

5.  Configure Server

    Server-side routing dan client-side routing adalah dua teknik yang berbeda dalam menangani navigasi pengguna pada aplikasi web modern.

    Server-side routing terjadi ketika permintaan HTTP dikirimkan dari browser ke server untuk memperoleh halaman web. Server-side routing digunakan untuk menentukan halaman mana yang harus ditampilkan ke pengguna, berdasarkan URL yang diminta oleh pengguna. Halaman kemudian akan diproses pada sisi server dan dikirimkan kembali ke browser untuk ditampilkan.

    Di sisi lain, client-side routing terjadi ketika halaman web dibangun di sisi klien (browser) menggunakan framework JavaScript seperti React, Angular, atau Vue. Pada client-side routing, setelah halaman pertama kali dimuat, navigasi pengguna dilakukan dengan cara mengubah komponen tampilan (view) di sisi klien saja tanpa meminta halaman baru ke server.

    Perbedaan mendasar antara server-side routing dan client-side routing adalah lokasi pemrosesan data navigasi. Pada server-side routing, pemrosesan data navigasi dilakukan pada sisi server, sedangkan pada client-side routing, pemrosesan data navigasi dilakukan pada sisi klien.

    Keuntungan server-side routing adalah kemudahan dalam SEO dan keamanan karena mesin pencari dapat mengindeks halaman dengan mudah dan keamanan aplikasi dapat ditingkatkan dengan lebih mudah. Keuntungan client-side routing adalah kemampuan untuk menampilkan tampilan aplikasi yang lebih cepat dan interaktif dengan mengambil data dari API dan mengeksekusinya pada sisi klien tanpa harus meminta halaman baru dari server.

    Namun, server-side routing dan client-side routing bukanlah pilihan yang eksklusif. Banyak aplikasi web modern menggunakan teknik server-side routing untuk halaman awal aplikasi, dan kemudian beralih ke teknik client-side routing untuk menangani navigasi pengguna selanjutnya. Teknik ini disebut sebagai hybrid routing atau universal routing.
