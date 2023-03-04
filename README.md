## loader property

loader adalah properti yang menginginkan fungsi sebagai nilai, fungsi ini akan dieksekusi oleh react router setiap kali kita mengunjungi routenya. Jadi tepat sebelum route dirender, Tepat ketika kita mulai menavigasi ke halaman itu, bukan setelah komponen halaman dirender tetapi sebelum kita benar-benar pergi kesana. Setelah loader selesai mengambil data kemudian react router akan merender halaman dengan data terseut.

### useLoaderData

-   useLoaderData() adalah hook untuk mendapatkan akses ke data loader terdekat. Dengan bantuan hook ini kita akan selalu mendapatkan data akhir yang direturn oleh loader, tidak peduli data berupa promise atau tidak.
-   kita hanya bisa menggunakan useLoaderData() di elemen yang ditetapkan ke route dan di semua komponen yang mungkin digunakan di dalam elemen itu. Route tigkat yang lebih tinggi tidak bisa menggunakannya.
-   kode yang didefinisikan dalam loader di eksekusi di browser bukan di server, yang berarti kita dapat menggunakan browser API apapun dalam fungsi loader. Yang tidak boleh dilakukan misalnya menggunakan react hook.

## hook useNavigation

Hook yang memungkinkan untuk mengetahui apakah kita sedang dalam transisi aktif jika kita sedang memuat data atau jika kita memiliki transisi aktif yang sedang berlangsung.

## action function

Untuk memicu action function dapat menggunakan beberapa cara. Cara yang standar / umum adalah dengan menggunakan komponen Form dari react router, Form secara otomatis memicu action function dari route yang aktif atau route yang memuat Form itu. Cara lain dengan menambahkan action prop di komponen Form dan mengaturnya ke path lain. Jika memiliki action pada beberapa route lain bisa menggunakan cara ini.

## Validate user input

Kita tidak boleh mengandalkan validasi di sisi klien (required attribut), harus selalu memiliki validasi di sisi server karena validasi di sisi klien dapat dimatikan dan dinonaktifkan dengan devtools browser. Lebih baik memiliki keduanya untuk memberi UI yang baik.
