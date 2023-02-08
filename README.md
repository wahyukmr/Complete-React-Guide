## Komunikasi React ke Backend bukan ke Database secara langsung

Aplikasi kita tidak boleh terhubung langsung dengan server database, karena itu akan mengekspose Database credentials di browser yang bisa dibaca oleh user. Selain itu juga dapat menimbulkan masalah lain seperti masalah performa, tapi masalah keamanan adalah masalah terbesar dari semuanya.

<br />

## Firebase

Firebase adalah platform pengembangan aplikasi yang dikembangkan oleh Google. Firebase memudahkan pengembang untuk membangun aplikasi dengan cepat tanpa harus memikirkan infrastruktur backend. Fitur-fitur Firebase meliputi:

1. <strong>Realtime Database:</strong> database NoSQL yang dapat digunakan untuk menyimpan dan memantau data dalam waktu real.

2. <strong>Cloud Firestore:</strong> database dokument-oriented yang dapat digunakan untuk menyimpan dan memantau data dalam skala besar.

3. <strong>Authentication:</strong> memungkinkan pengembang untuk menambahkan autentikasi pada aplikasi mereka, seperti masuk dengan akun Google atau melalui email dan password.

4. <strong>Storage:</strong> penyimpanan file di cloud yang dapat digunakan untuk menyimpan gambar, video, dan file lainnya.

5. <strong>Hosting:</strong> hosting web statis yang dapat digunakan untuk membuat dan menjalankan aplikasi web.

6. <strong>Functions:</strong> perpustakaan JavaScript yang dapat digunakan untuk menjalankan kode server-side.

7. <strong>ML Kit:</strong> kit pengembangan mesin learning yang memungkinkan pengembang untuk menambahkan fitur mesin learning ke aplikasi mereka.

Firebase dapat digunakan dengan berbagai platform, seperti Android, iOS, dan web, dan dapat digunakan secara gratis atau dengan pembelian paket berbayar untuk fitur tambahan dan kapasitas yang lebih besar.

<br />

## HTTP Requests
<strong>HTTP Request</strong> adalah permintaan yang dikirimkan oleh client ke server melalui protokol HTTP (Hypertext Transfer Protocol). Ini digunakan untuk meminta sumber daya seperti halaman web, gambar, video, dll. dari server.

Setiap permintaan HTTP terdiri dari beberapa bagian, termasuk:

- <strong>Metode:</strong> menentukan tindakan yang harus dilakukan oleh server, seperti mendapatkan sumber daya (GET), membuat data/objek baru (POST), memperbarui data/objek (PUT), dan menghapus data/objek (DELETE).

- <strong>URI (Uniform Resource Identifier):</strong> menentukan sumber daya yang diminta.

- <strong>Header:</strong> mengandung informasi tambahan tentang permintaan, seperti jenis konten yang diinginkan, informasi autentikasi, dll.

- <strong>Body:</strong> mengandung data yang dikirimkan bersama permintaan, seperti form data atau JSON.

Setelah server menerima permintaan HTTP, ia akan memproses permintaan dan mengirimkan HTTP Response, yang berisi status code, header, dan data.

Permintaan HTTP digunakan oleh banyak aplikasi web dan mobile untuk mengirim dan menerima data dari server. Protokol HTTP adalah bagian dari teknologi dasar yang menjadi fondasi dari World Wide Web.

<br />

## Status Codes
<strong>Status code</strong> adalah sebuah kode numerik yang dikembalikan oleh server ketika memproses permintaan HTTP (Hypertext Transfer Protocol). Ini memberikan informasi tentang apakah permintaan tersebut berhasil diproses atau tidak.

Berikut adalah beberapa status code yang paling umum:

- <strong>200 OK:</strong> Indikasi bahwa permintaan berhasil diproses dan respon berisi data yang diminta.

- <strong>201 Created:</strong> Indikasi bahwa permintaan berhasil diproses dan suatu entitas baru berhasil dibuat.

- <strong>204 No Content:</strong> Indikasi bahwa permintaan berhasil diproses, tetapi tidak ada respon yang dikembalikan.

- <strong>400 Bad Request:</strong> Indikasi bahwa permintaan tidak valid dan tidak dapat diproses oleh server.

- <strong>401 Unauthorized:</strong> Indikasi bahwa permintaan membutuhkan autentikasi dan autentikasi tidak berhasil.

- <strong>403 Forbidden:</strong> Indikasi bahwa akses ke sumber daya ditolak oleh server.

- <strong>404 Not Found:</strong> Indikasi bahwa sumber daya yang diminta tidak ditemukan.

- <strong>500 Internal Server Error:</strong> Indikasi bahwa server mengalami masalah saat memproses permintaan.

Ini hanya beberapa status code dari banyak status code yang ada. Status code membantu menentukan bagaimana aplikasi harus merespon suatu permintaan dan memecahkan masalah jika terjadi kesalahan.