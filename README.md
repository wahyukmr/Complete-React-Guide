## loader property

loader adalah properti yang menginginkan fungsi sebagai nilai, fungsi ini akan dieksekusi oleh react router setiap kali kita mengunjungi routenya. Jadi tepat sebelum route dirender, Tepat ketika kita mulai menavigasi ke halaman itu, bukan setelah komponen halaman dirender tetapi sebelum kita benar-benar pergi kesana. Setelah loader selesai mengambil data kemudian react router akan merender halaman dengan data terseut.

### useLoaderData

-   useLoaderData() adalah hook untuk mendapatkan akses ke data loader terdekat. Dengan bantuan hook ini kita akan selalu mendapatkan data akhir yang direturn oleh loader, tidak peduli data berupa promise atau tidak.
-   kita hanya bisa menggunakan useLoaderData() di elemen yang ditetapkan ke route dan di semua komponen yang mungkin digunakan di dalam elemen itu. Route tigkat yang lebih tinggi tidak bisa menggunakannya.
