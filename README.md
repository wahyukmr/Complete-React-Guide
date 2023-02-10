## Custom Hooks

-   <strong>Custom Hooks</strong> adalah sebuah fitur di React yang memungkinkan kita membuat fungsi yang dapat digunakan ulang untuk mengelola state dan efek pada aplikasi React. Tujuannya adalah untuk membungkus logika yang sering digunakan dan membuatnya reusable, sehingga kita tidak perlu menuliskan ulang logika tersebut pada setiap komponen yang membutuhkannya.

-   Custom Hook juga memungkinkan kita untuk memisahkan logika yang spesifik untuk aplikasi kita dari logika yang umum yang sering digunakan, sehingga membuat kode kita lebih terorganisir dan mudah dikelola.

-   Untuk membuat Custom Hook, kita harus membuat sebuah fungsi yang memulai dengan awalan "use" dan mengelola state dan efek menggunakan hook React seperti useState dan useEffect.

-   Jika memanggil Custom Hooks di salah satu komponen, dan komponen itu mempunyai state dan effect, maka state dan effect ini akan dikaitkan dengan komponen dimana kita menggunakan Custom Hook. jika kita menggunakan Custom Hook di banyak komponen, setiap komponen akan menerima statenya sendiri, Jadi bukan berarti kita berbagi state atau effect ke seluruh komponen (hanya logic nya saja yang dibagikan).

<br />

## Infinite Loop

<strong>Infinite loop</strong> adalah kondisi dimana sebuah proses berjalan terus menerus tanpa adanya titik berhenti. Dalam hal React, infinite loop biasanya terjadi pada saat komponen melakukan render ulang secara terus-menerus.

Berikut adalah beberapa contoh penyebab infinity loop dalam React:

-   <strong>State Update yang salah:</strong> jika sebuah komponen mengubah state-nya sendiri sebagai reaksi terhadap perubahan state yang seharusnya memicu render ulang, maka akan terjadi infinity loop.

-   <strong>Fungsi render yang salah:</strong> jika sebuah komponen memiliki logika dalam fungsi render-nya yang menyebabkan kondisi yang memicu render ulang secara terus menerus, maka akan terjadi infinity loop.

-   <strong>Penggunaan setState() yang salah:</strong> jika sebuah komponen memanggil setState() dalam fungsi yang dipicu oleh perubahan state, maka akan terjadi infinity loop.

-   <strong>Callback function yang salah:</strong> jika sebuah komponen menggunakan callback function yang memanggil setState() tanpa kondisi, maka akan terjadi infinity loop.

-   <strong>ComponentWillUpdate yang salah:</strong> jika sebuah komponen memanggil setState() dalam lifecycle method componentWillUpdate, maka akan terjadi infinity loop.

-   <strong>Kondisi yang tidak dapat terpenuhi:</strong> jika sebuah komponen memiliki kondisi dalam render-nya yang tidak dapat terpenuhi, maka akan terjadi infinity loop.
