## Athentications

Authentication di React biasanya dilakukan dengan menggunakan API atau library tertentu seperti JSON Web Token (JWT) atau OAuth.

Secara umum, cara kerja authentication di React adalah sebagai berikut:

-   User melakukan login ke dalam aplikasi dan mengirimkan credentials (biasanya berupa username dan password) ke server.
-   Server memverifikasi credentials yang diterima dan jika valid, menghasilkan token authentication yang dikirimkan kembali ke client.
-   Client menyimpan token di dalam browser (biasanya menggunakan cookies atau local storage) dan mengirimkan token tersebut ke server setiap kali melakukan request ke server.
-   Server memverifikasi token yang diterima dan jika valid, memberikan akses ke resource yang diminta oleh client.

Untuk melakukan authentication di React, biasanya kita menggunakan library seperti axios untuk melakukan HTTP request ke server dan menyimpan token di dalam state atau context di dalam aplikasi React. Selain itu, kita juga bisa menggunakan library seperti react-router-dom untuk melakukan routing di dalam aplikasi dan menentukan halaman mana yang hanya bisa diakses oleh user yang sudah melakukan login.

### Jenis authentication yang umum digunakan di React

-   <strong>Basic Authentication:</strong> Ini adalah jenis authentication yang paling sederhana, di mana client mengirimkan credentials dalam bentuk plaintext ke server untuk divalidasi. Namun, jenis authentication ini tidak terlalu aman karena credentials yang dikirimkan tidak dienkripsi.
-   <strong>Token-based Authentication:</strong> Jenis authentication ini menggunakan token yang dihasilkan oleh server setelah credentials user divalidasi. Token ini kemudian disimpan oleh client (biasanya dalam bentuk cookie atau local storage) dan dikirimkan ke server pada setiap request. Server kemudian memverifikasi token tersebut sebelum memberikan akses ke resource yang diminta oleh client.
-   <strong>OAuth:</strong> Jenis authentication ini digunakan untuk mengizinkan user melakukan login dengan akun dari provider lain, seperti Google, Facebook, atau Twitter. User diarahkan ke halaman login provider dan setelah berhasil, provider mengembalikan token ke aplikasi React. Token ini kemudian digunakan untuk melakukan request ke API provider untuk mengambil informasi user.
-   <strong>Multi-factor Authentication:</strong> Jenis authentication ini membutuhkan lebih dari satu faktor untuk memverifikasi identitas user. Faktor tersebut bisa berupa sesuatu yang user ketahui (seperti password), sesuatu yang user miliki (seperti token generator), atau sesuatu yang terkait dengan user (seperti sidik jari atau wajah).

Setiap jenis authentication memiliki kelebihan dan kekurangan, sehingga penting untuk memilih jenis authentication yang tepat untuk aplikasi React yang sedang kita buat.

## Server-side session Vs Authentication token

Server-side session dan authentication token adalah dua metode yang umum digunakan untuk menyimpan state user di aplikasi web. Berikut adalah perbedaan utama antara keduanya:

-   <strong>Lokasi penyimpanan data:</strong> Server-side session menyimpan data sesi di server, sedangkan authentication token menyimpan data di client-side, seperti pada cookie atau local storage.
-   <strong>Skalabilitas:</strong> Server-side session dapat menyebabkan masalah skalabilitas pada aplikasi yang memiliki banyak user karena setiap sesi disimpan di server. Sementara itu, authentication token dapat dengan mudah discaling karena data token disimpan pada client-side dan tidak membebani server.
-   <strong>Perlindungan terhadap CSRF:</strong> Authentication token dapat membantu melindungi aplikasi dari serangan Cross-Site Request Forgery (CSRF) karena data token harus disertakan dalam setiap permintaan yang dilakukan ke server. Di sisi lain, server-side session rentan terhadap serangan CSRF karena tidak ada data yang dikirimkan dalam setiap permintaan yang bisa digunakan untuk memverifikasi pengguna.
-   <strong>Penggunaan API:</strong> Authentication token lebih cocok digunakan pada aplikasi yang berbasis API atau aplikasi yang menggunakan teknologi single-page application karena token dapat disimpan pada client-side dan digunakan untuk mengautentikasi permintaan API. Server-side session lebih cocok digunakan pada aplikasi web yang tradisional, di mana setiap permintaan halaman web memerlukan otentikasi pada setiap saat.

Kesimpulannya, baik server-side session maupun authentication token memiliki kelebihan dan kekurangan masing-masing, dan perlu dipilih dengan bijak sesuai dengan kebutuhan dan tujuan aplikasi web yang sedang dibangun.

### Query parameter

Query parameter adalah parameter yang ditambahkan dalam URL setelah tanda tanya dan berguna untuk mengirimkan data tambahan ke server dan mengontrol perilaku aplikasi web. Contohnya, kita bisa menggunakan query parameter untuk mengambil data dari server dengan filter tertentu atau mengatur opsi tampilan pada halaman web.

### Route Protection

Kita bisa menambahkan route protection dengan memanfaatkan loader, yang hanya memeriksa apakah memiliki token atau tidak, jika tidak memiliki token akan di redirect() ke halaman tertentu.
