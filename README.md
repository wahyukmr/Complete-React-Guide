## Side-effects, Async tasks and Redux

- Reducers harus pure, bebas dari side-effect dan synchronous function.

- Kita memiliki dua kemungkinan tempat dimana dapat menempatkan side-effect:

    1. Dapat meletakkan side-effect yang mungkin kode Asych langsung ke dalam komponen misalnya dengan useEffect. Melakukan seperti sebelumnya dan kemudian hanya mengirimkan dispact actions setelah side-effect itu selesai

    2. Meletakkannya ke dalam action creators, jadi menulis action ceators kita sendiri tanpa menggunakan yang dihasilkan secara otomatis oleh redux toolkit