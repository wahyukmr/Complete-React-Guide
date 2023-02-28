## React Router

<strong>React Router</strong> adalah sebuah library (pustaka) yang digunakan untuk membuat aplikasi web dengan routing yang dinamis di dalam aplikasi React. Routing adalah proses menghubungkan URL ke tampilan (view) yang relevan dalam aplikasi. React Router memberikan kemampuan untuk mengatur aliran navigasi antar halaman pada aplikasi web React.

Routes di React Router terdiri dari:

-   <strong>Router:</strong> Komponen pertama yang perlu didefinisikan dalam aplikasi React dengan React Router. Router memiliki beberapa tipe, seperti BrowserRouter, HashRouter, dan lain-lain. Router digunakan untuk menentukan bagaimana URL akan ditangani oleh aplikasi web.
-   <strong>Route:</strong> Komponen yang digunakan untuk menentukan tampilan (view) yang akan ditampilkan ketika URL tertentu dipanggil. Route memiliki dua properti utama, yaitu path dan element. Properti path digunakan untuk menentukan URL yang akan ditangani, sedangkan properti element digunakan untuk menentukan tampilan (view) yang akan ditampilkan.
-   <strong>Link:</strong> Komponen yang digunakan untuk membuat tautan (link) ke URL tertentu. Link akan mengubah URL yang ditampilkan pada browser ketika pengguna mengkliknya, dan akan menavigasi ke tampilan (view) yang sesuai dengan URL tersebut. Seolah-olah itu seperti:

          <a href>


-   <strong>Outlet:</strong> Komponen yang menandai tempat dimana elemen child root harus dirender.
-   <strong>errorElement:</strong> untuk mendefinisikan elemen yang harus dimuat ketika halaman ini melempar kesalahan.
-   <strong>NavLink:</strong> Komponen untuk mendukung link yang harus menunjukkan kepada kita apakah link tersebut mengarah ke halaman yang sedang aktif atau tidak. NavLink digunakan seperti Link. Penambahan props property "end" berguna jika memiliki route yang bersarang.

Untuk menginstall React Router:

        npm install react-router-dom

Dalam penggunaan Routes, kita perlu mendefinisikan Route di dalam komponen yang ingin menangani URL tertentu. Contohnya, jika kita ingin menangani URL '/about' pada aplikasi web kita, kita dapat mendefinisikan Route dengan properti path='/about' dan component={AboutPage}. Kemudian, kita dapat menambahkan Link dengan properti to='/about' untuk membuat tautan ke URL tersebut.
