## State

State adalah bagian dari komponen React yang digunakan untuk menyimpan data yang mungkin akan berubah selama masa pakai aplikasi. Misalnya, jika kita membuat aplikasi to-do list, state bisa digunakan untuk menyimpan daftar tugas yang harus dikerjakan. State tidak dapat diubah secara langsung, tetapi hanya dapat diubah melalui fungsi setState().

## Two-way-binding

Two-way-binding adalah teknik yang digunakan untuk menyinkronkan nilai state dengan nilai dari elemen HTML, sehingga ketika salah satunya diubah, yang lainnya juga akan terubah. Ini biasa digunakan untuk membuat form yang dinamis, dimana pengguna dapat memasukkan data ke dalam form dan data tersebut akan disimpan di dalam state.

## Handler Events

Untuk menangani event di React, kita harus menambahkan event handler ke elemen HTML yang ingin kita tangani eventnya. Event handler adalah fungsi yang akan dipanggil ketika event tersebut terjadi. Misalnya, untuk menangani event klik pada tombol, kita dapat menambahkan event handler "onClick" ke elemen tombol:

    <button onClick={this.handleClick}>Click me</button>

Kemudian, kita harus membuat fungsi "handleClick" di komponen React yang akan dipanggil ketika tombol diklik.
