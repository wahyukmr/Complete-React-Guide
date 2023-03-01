## React Router

<strong>React Router</strong> adalah sebuah library (pustaka) yang digunakan untuk membuat aplikasi web dengan routing yang dinamis di dalam aplikasi React. Routing adalah proses menghubungkan URL ke tampilan (view) yang relevan dalam aplikasi. React Router memberikan kemampuan untuk mengatur aliran navigasi antar halaman pada aplikasi web React.

Fitur utama rounting:

-   <strong>Route:</strong> Komponen yang digunakan untuk menentukan tampilan (view) yang akan ditampilkan ketika URL tertentu dipanggil. Route memiliki dua properti utama, yaitu path dan element. Properti path digunakan untuk menentukan URL yang akan ditangani, sedangkan properti element digunakan untuk menentukan tampilan (view) yang akan ditampilkan.
-   <strong>Link:</strong> Komponen yang digunakan untuk membuat tautan (link) ke URL tertentu. Link akan mengubah URL yang ditampilkan pada browser ketika pengguna mengkliknya, dan akan menavigasi ke tampilan (view) yang sesuai dengan URL tersebut. Seolah-olah itu seperti:

          <a href>

-   <strong>Outlet:</strong> Komponen yang menandai tempat dimana elemen child root harus dirender.
-   <strong>errorElement:</strong> untuk mendefinisikan elemen yang harus dimuat ketika halaman ini melempar kesalahan.
-   <strong>NavLink:</strong> Komponen untuk mendukung link yang harus menunjukkan kepada kita apakah link tersebut mengarah ke halaman yang sedang aktif atau tidak. NavLink digunakan seperti Link. Penambahan props property "end" berguna jika memiliki route yang bersarang.
-   <strong>useNavigate:</strong> dapat dipanggil untuk memicu tindakan navigasi dari dalam kode (beralih ke rute berbeda dari dalam kode secara terprogram). Misalnya karena beberapa timer kadaluarsa atau semacamnya.
-   <strong>Dynamic segment:</strong> memungkinkan untuk membuat rute dinamis dengan parameter yang dapat diubah-ubah. Contohnya, /users/:userId di mana :userId adalah parameter dinamis yang dapat diganti dengan ID pengguna yang berbeda. Dengan menggunakan dynamic segment, kita dapat membuat komponen yang dapat digunakan kembali dan dinamis, sehingga membuat aplikasi React lebih modular dan mudah dikelola.
-   <strong>useParams:</strong> adalah hook di React Router yang memungkinkan kita untuk mengambil nilai parameter dari dynamic segment di URL dan menggunakannya dalam komponen untuk menampilkan data pengguna yang sesuai.
-   <strong>absolute dan relative</strong>:
    1. Absolute Navigation
       Absolute navigation adalah navigasi di mana kita memberikan path lengkap dari URL sebagai parameter. Ketika kita menggunakan absolute navigation, React Router akan mengganti seluruh path pada URL saat kita berpindah halaman.
       Contohnya, jika kita ingin berpindah halaman dari halaman "/home" ke halaman "/about", kita dapat menggunakan absolute navigation dengan memberikan path lengkap "/about" sebagai parameter.
    2. Relative Navigation
       Relative navigation adalah navigasi di mana kita memberikan path yang relatif dari URL saat ini sebagai parameter. Ketika kita menggunakan relative navigation, React Router hanya akan mengganti bagian path yang diubah saat kita berpindah halaman.
       Contohnya, jika kita berada di halaman "/users" dan ingin berpindah ke halaman "/users/1", kita dapat menggunakan relative navigation dengan memberikan path relatif "1" sebagai parameter.
    Secara umum, absolute dan relative navigation bergantung pada kebutuhan aplikasi kita. Jika kita ingin mengganti seluruh path pada URL saat berpindah halaman, maka kita dapat menggunakan absolute navigation. Namun, jika kita hanya ingin mengganti bagian path tertentu dari URL, maka kita dapat menggunakan relative navigation.
-   <strong>Index Router:</strong> adalah komponen di React Router yang memungkinkan kita untuk membuat nested routing di dalam komponen utama. Dengan menggunakan Index Router, kita dapat menentukan rute-rute anak dari sebuah rute induk.

Untuk menginstall React Router:

        npm install react-router-dom

Dalam penggunaan Routes, kita perlu mendefinisikan Route di dalam komponen yang ingin menangani URL tertentu. Contohnya, jika kita ingin menangani URL '/about' pada aplikasi web kita, kita dapat mendefinisikan Route dengan properti path='/about' dan component={AboutPage}. Kemudian, kita dapat menambahkan Link dengan properti to='/about' untuk membuat tautan ke URL tersebut.
