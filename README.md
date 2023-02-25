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

## Fat Reducers Vs Fat Components Vs Fat Actions

Dimana sebaiknya logic (code) kita berada?

1. Kode berupa Synchronous function, bebas side-effects (misalnya perubahan data)

    - Lebih baik di Reducers.
    - Menghindari Action Creators atau Komponen.

2. Kode berupa Asynchronous function atau dengan side-effects
    - Lebih baik di Action Creators atau Komponen.
    - Jangan pernah menggunakan Reducers.
