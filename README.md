## Getting user input values (useState or useRef)

Untuk mendapatkan nilai yang dimasukkan user dapat menggunakan dua pendekatan yang berbeda, bisa menggunakan useState atau useRef. Tentu saja harus menggunakan salah satu dari pendekatan tersebut, Sekarang bagaimana untuk memutuskan mana yang akan digunakan? itu tergantung apa yang akan kita rencanakan dengan nilai yang dimasukkan user tersebut.

-   <strong>Jika kita tertarik hanya sekali pada saat form disubmit</strong>, Pendekatan menggunakan ref lebih baik Karena mencatat dan memperbarui nilai state dengan setiap penekanan tombol agak berlebihan.
-   <strong>nilai yang dimasukkan user setelah setiap penekanan tombol</strong> misalnya untuk validasi instan, Atau ketika ingin mengatur ulang nilai input maka menggunakan useState lebih baik karena dengan ref kita tidak bisa melakukannya.
