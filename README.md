# Conditional Content

Dalam React, dapat menggunakan pernyataan kondisional untuk mengontrol rendering komponen berdasarkan kondisi tertentu. Ada beberapa cara untuk mengimplementasikan rendering kondisional di React, termasuk menggunakan pernyataan if, operator ternary (? :), dan operator &&.

</br>

## 1. Menggunakan pernyataan if:

Pernyataan if adalah pernyataan pada JavaScript yang memungkinkan untuk mengeksekusi blok kode hanya jika kondisi yang ditentukan benar

Untuk menggunakan pernyataan if, bisa menuliskan kode seperti ini:

    {if (kondisi) {
    // konten jika kondisi benar
    }}

</br>

## 2. Menggunakan operator ternary (? :):

Operator ternary adalah cara untuk memperpendek pernyataan if di JavaScript. Memiliki sintaks seperti ini:

    kondisi ? ekspresi1 : ekspresi2

Jika kondisi bernilai "true", operator akan mengembalikan ekspresi1. Jika kondisi bernilai "false", operator akan mengembalikan ekspresi2.

</br>

## 3. Menggunakan operator &&:

Di React, operator && dapat digunakan dalam condisional rendering untuk menentukan apakah suatu konten harus ditampilkan atau tidak. Condisional rendering ini berguna jika ingin menampilkan atau menyembunyikan konten tergantung pada kondisi tertentu.

Secara umum, cara penggunaan operator && dalam condisional rendering adalah sebagai berikut:

    {kondisi && konten jika kondisi benar}

Misalnya, jika ingin menampilkan suatu pesan jika sebuah variabel isLoggedIn bernilai true, maka Anda bisa menuliskan kode seperti ini:

    {isLoggedIn && <p>Anda sudah login</p>}

Jika variabel isLoggedIn bernilai true, maka pesan "Anda sudah login" akan ditampilkan. Sebaliknya, jika variabel isLoggedIn bernilai false, maka pesan tersebut tidak akan ditampilkan.
