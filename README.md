## Fontend Code Depends on Backend Code

Jika menggunakan firebase untuk proyek nyata, kita dapat manambahkan kode di sisi server dengan layanan bernama "Functions" yang memungkinkan kita menambahkan kode kita sendiri pada firebase backend. ini dapat dipicu ketika ada request yag masuk dan memungkinkan mengubah data di backend.

Agar Backend API atau Backend server dapat berbicara dengan aplikasi frontend, diperlukan bantuan Request dan Response yang dikirim.

-   Jika memiliki Backend API yang melakukan banyak pekerjaan, misalnya mengubah data dan menyimpan data. Aplikasi frontend dapat melakukan lebih sedikit pekerjaan. Hanya mengirim data ke Backend, di backend melakukan transformation dan kemudian menggunakan response yang dikirim backend untuk kemudian menyerahkannya kepada Reducer misalnya, untuk menyimpan response itu.

-   Sebaliknya jika mempunyai Backend yang tidak melakukan banyak pekerjaan, yang hanya menyimpan data yang masuk dalam format yang diterima. Aplikasi frontend melakukan lebih banyak pekerjaan, tidak hanya perlu menyimpan data di redux store kita juga perlu menyiapkan/mengubah data. Tentu saja ini tidak masalah jika tidak memiliki backend yang melakukan pekerjaan tersebut.

## Side-effects, Async tasks and Redux

Reducers harus pure, bebas dari side-effect dan synchronous function. Jadi ketika memiliki kode yang menghasilkan side-effect mau async atau sync seperti mengirim HTTP request, kode tersebut tidak boleh masuk ke fungsi reducer. kita dapat mengirim HTTP request setelah selesai memperbarui state.

Kita memiliki dua kemungkinan tempat dimana dapat menempatkan side-effect:

1. Dapat meletakkan side-effect yang mungkin dengan kode Asych langsung ke dalam komponen, misalnya dengan useEffect. Melakukan seperti sebelumnya dan kemudian hanya mengirimkan dispact actions setelah side-effect itu selesai.

2. Meletakkannya ke dalam action creators, jadi menulis action ceators kita sendiri tanpa menggunakan yang dihasilkan secara otomatis oleh redux toolkit.

Dengan redux toolkit tidak hanya menerima action objek dengan properti type, tetapi juga menerima actions creator yang mengembalikan fungsi. Tidak begitu buruk jika ingin menempatkan semua logic pada komponen, namun jika ingin membuat komponen yang ramping dapat mempertimbangkan untuk mengguakan action creators.

## Fat Reducers Vs Fat Components Vs Fat Actions

Dimana sebaiknya logic (code) kita berada?

1. Kode berupa Synchronous function, bebas side-effects (misalnya perubahan data)

    - Lebih baik di Reducers.
    - Menghindari Action Creators atau Komponen.

2. Kode berupa Asynchronous function atau dengan side-effects
    - Lebih baik di Action Creators atau Komponen.
    - Jangan pernah menggunakan Reducers.

## Redux DevTools

Redux DevTools adalah sebuah alat pengembangan (development tool) untuk memudahkan pengembang aplikasi web yang menggunakan Redux untuk mengelola state pada aplikasi mereka. Redux DevTools dapat membantu dalam memantau dan memperbaiki bug pada aplikasi yang menggunakan Redux dengan menyediakan fitur-fitur seperti time travel debugging, recording, dan debugging actions.

Beberapa fitur yang tersedia pada Redux DevTools antara lain:

-   Time Travel Debugging: Fitur ini memungkinkan pengembang untuk melihat perubahan pada state aplikasi pada setiap langkah dalam waktu, seperti pada saat aplikasi menjalankan sebuah action. Dengan Time Travel Debugging, pengembang dapat dengan mudah melacak bagaimana sebuah action mempengaruhi state aplikasi secara keseluruhan.

-   Recording: Fitur ini memungkinkan pengembang untuk merekam seluruh perubahan yang terjadi pada state aplikasi selama penggunaan aplikasi. Dengan Recording, pengembang dapat memantau setiap perubahan pada state aplikasi, sehingga memudahkan dalam memperbaiki bug pada aplikasi.

-   Debugging Actions: Fitur ini memungkinkan pengembang untuk memantau setiap action yang dijalankan pada aplikasi. Dengan Debugging Actions, pengembang dapat melihat action mana yang menyebabkan perubahan pada state aplikasi dan dapat memperbaiki bug dengan cepat.
