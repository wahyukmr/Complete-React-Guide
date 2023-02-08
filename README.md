## React.memo

-   React.memo adalah sebuah fungsi yang dapat digunakan untuk mem-memoize sebuah komponen React, yang berarti komponen tersebut hanya akan di-render kembali jika props yang diterimanya berubah. Ini dapat digunakan untuk meningkatkan performa aplikasi React dengan mencegah komponen yang tidak perlu di-render kembali. React.memo juga dapat digunakan dengan komponen fungsi maupun komponen class.

-   Penggunaan React.memo yang tepat ketika memiliki komponen yang besar dengan banyak child komponen, sebaliknya jika memiliki komponen yang kita tahu nilai propsnya akan berubah dengan hampir setiap evaluasi ulang pembuatan komponen induknya penggunaan React.memo tidak disarankan.

<br />

## useMemo dan useCallback

useMemo dan useCallback adalah dua hook React yang digunakan untuk mengoptimalkan performa aplikasi dengan cara menyimpan hasil dari sebuah fungsi atau komponen dan memastikan bahwa fungsi atau komponen tersebut tidak dijalankan ulang atau digerakkan ulang jika tidak perlu. Keduanya bisa digabungkan dengan React.memo untuk mengoptimalkan kinerja komponen. Namun, ada perbedaan mendasar antara kedua hook tersebut:

-   useMemo digunakan untuk menyimpan hasil dari sebuah fungsi yang dijalankan. Fungsi tersebut akan dijalankan ulang jika dependensi yang ditentukan berubah, dan hasil dari fungsi tersebut akan disimpan kembali. useMemo sangat berguna untuk menghindari melakukan perhitungan yang sama berulang-ulang jika dependensi tidak berubah, misalnya saat kita memiliki sebuah komponen yang menampilkan data dari server, namun data tersebut tidak perlu di-fetch setiap kali komponen di-render, kita bisa menyimpan hasil dari fetch data tersebut menggunakan useMemo dan hanya fetch ulang data jika data tersebut diperlukan. Namun, perlu diingat bahwa useMemo hanya akan membandingkan dependensi yang di passing ke fungsi yang dijalankan, jika kita menggunakan useState atau props yang tidak di passing ke komponen maka useMemo tidak akan memperhatikan perubahan tersebut.
-   useCallback digunakan untuk menyimpan sebuah komponen fungsi. Komponen tersebut akan digerakkan ulang jika dependensi yang ditentukan berubah, dan komponen yang disimpan akan digunakan kembali. useCallback sangat berguna untuk menghindari pembuatan komponen baru yang sama berulang-ulang jika dependensi tidak berubah.

Secara umum, useMemo digunakan untuk menyimpan hasil dari perhitungan yang intensif, seperti komputasi yang memakan banyak waktu atau mengakses data dari server. Sementara useCallback digunakan untuk menyimpan komponen fungsi yang digunakan secara berulang-ulang, seperti komponen yang digunakan dalam event handler atau sebagai child component dari component lain.

<br />

## React Handle State Updates

-   State scheduling adalah proses menunda atau mengatur waktu pembaruan state pada komponen React. Hal ini dapat dilakukan dengan menggunakan setTimeout, requestAnimationFrame, atau library lain yang memungkinkan kita untuk menunda eksekusi sebuah fungsi. Ini berguna jika kita ingin menunda update state sampai beberapa waktu yang akan datang, atau jika kita ingin mengatur update state selama frame animasi.
-   Batching adalah proses agregasi dari beberapa pembaruan state menjadi satu pembaruan state yang digabungkan dalam satu re-render. Batching digunakan untuk mengoptimalkan performa aplikasi dengan mengurangi jumlah re-render yang diperlukan. Ini dapat dilakukan dengan menunda beberapa pembaruan state yang terjadi secara bersamaan sampai sebelum re-render dilakukan.

React secara default mengelola batching pada setState. Jika kita memanggil setState dalam loop atau dalam event handler yang berulang-ulang, React akan mengumpulkan semua perubahan state yang dilakukan dan melakukan re-render hanya satu kali setelah semua perubahan state selesai. Ini akan mengoptimalkan performa aplikasi dengan mengurangi jumlah re-render yang diperlukan.

Perlu diingat, saat menggunakan state scheduling dan batching, kita perlu mengelola cleanup function agar tidak terjadi memory leak. Apalagi saat menggunakan setTimeout, requestAnimationFrame, atau library lain yang memungkinkan kita untuk menunda eksekusi sebuah fungsi.

<br/>

## Behind the Scenes of React

React bekerja dengan cara yang cukup unik dibandingkan dengan library atau framework JavaScript lainnya. Berikut adalah cara kerja React dibalik layar secara lengkap:

### Gambaran umum:
1. Komponen: React menggunakan konsep komponen sebagai building blocks dari aplikasi. Komponen adalah sebuah class atau function yang mengembalikan sebuah element HTML yang dapat digunakan kembali di dalam aplikasi.
2. Virtual DOM: React menggunakan Virtual DOM sebagai mekanisme untuk membuat perubahan pada aplikasi. Virtual DOM adalah representasi dari struktur DOM asli, yang diperbarui secara efisien saat ada perubahan pada aplikasi.
3. Render Komponen: Ketika sebuah komponen di-render, React akan membuat perbandingan antara Virtual DOM sebelum dan sesudah perubahan, dan hanya akan memperbarui bagian-bagian yang sesungguhnya diperlukan pada DOM asli. Ini membuat perubahan pada aplikasi React menjadi cepat dan efisien.
4. Props dan State: React menyediakan mekanisme props dan state untuk mengatur data yang digunakan dalam komponen. Props adalah data yang diteruskan ke komponen dari komponen yang mengelompokkannya, sementara state adalah data yang dimiliki oleh komponen itu sendiri.
5. Event Handling: React menyediakan mekanisme yang disebut event handling untuk menangani interaksi pengguna dengan aplikasi, seperti ketika tombol diklik atau form diisi.
6. JSX: React menggunakan JSX sebagai syntax ekstensi dari JavaScript yang memungkinkan untuk menulis element HTML dalam JavaScript. JSX dikompilasi menjadi JavaScript oleh transpiler seperti Babel sebelum diterapkan pada browser.
7. React DOM : adalah salah satu library dari React yang digunakan untuk mengkaitkan komponen-komponen React dengan DOM.
8. React lifecycle: React menyediakan lifecycle method yang dapat dipakai untuk mengatur saat komponen akan di-mount atau di-unmount, serta saat data komponen diperbarui.
9. Reusability : React menyediakan kemampuan untuk mereuse komponen sehingga membuat aplikasi terstruktur dan mudah untuk dikelola, serta mempermudah dalam proses pemeliharaan dan pengujian.

### Gambaran singkat:
-   Di React bekerja dengan komponen, biasanya dengan "komponen fungsi" dalam React modern, komponen tersebut mengembalikan kode JSX.
-   Pada komponen React kita bisa menggunakan state atau props atau bisa juga context, props dan context untuk menyatakan perubahan dalam membuat perubahan pada komponen dan membuat perubahan pada data yang mempengaruhi komponen atau mempengaruhi bagian aplikasi.
-   Setiap kali mengubah state dalam suatu komponen, komponen yang statenya diubah akan dievaluasi ulang dan itu berarti bahwa "fungsi komponen" dijalankan lagi (semua kode didalam "fungsi komponen" berjalan lagi dan akan mendapatkan output baru).
-   React hanya akan mengambil hasil evaluasi terbaru dan membandingkannya dengan hasil evaluasi sebelumnya, itu juga berlaku untuk semua komponen yang terpengaruh (komponen turunannya).
-   Kemudian menyerahkan perubahan yang telah diidentifikasi tersebut ke React DOM, sehingga React DOM akan mengambil perubahannya dan hanya menerapkan perubahan itu ke DOM asli di browser.
-   Ketika React mengevaluasi kembali sebuah komponen, React tidak hanya mengevaluasi komponennya saja, tetapi juga menjalankan kembali seluruh fungsi dan oleh karena itu semua akan di bangun kembali, membangun kode JSX, membangun output untuk snapshot terbaru dan menjalankan kembali semua komponen yang belum dimiliki di JSX kode.
-   Untuk menghindari eksekusi ulang pada komponen anak yang tidak perlu, kita dapat menggunakan React.memo. Dengan menggunakan React.memo pada sebuah fungsi komponen akan membuat fungsi komponen dijalanakan jika nilai props berubah, jika tidak mendapatkan nilai baru tidak akan menjalankan kembali fungsi komponen.
-   mengevaluasi ulang suatu komponen berarti menjalankan fungsi komponen lagi. Oleh karena itu jika membuat fungsi dalam fungsi dan meneruskan fungsi tersebut melalui props ke komponen lain, akan mentrigger perubahan jika objek berupa nilai preference. Dan disinilah useCallback dapat membantu, karena dengan menggunakannya kita dapat memberitahu react bahwa itu harus menyimpan fungsi dan tidak membuatnya kembali ketika fungsi disekitarnya berjalan lagi selama dependensi tertentu tidak berubah.
