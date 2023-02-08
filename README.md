## Functional Component and Class-based Component
### Functional Component:

-   Komponennya adalah fungsi Javascript reguler yang mengembalikan hasil yang dapat dirender (biasanya JSX).
-   Merupakan pendekatan default dan pendekatan paling modern.
-   Penggunaan React hooks bisa diterapkan pada Functional Component.

### Class-based Component:

-   Komponennya juga dapat didefinisikan sebagai kelas JS dimana metode render() menentukan output yang akan dirender.
-   Digunakan pada masa lampau.
-   Class-based Component tidak dapat menggunakan React hooks.

Penggunaannya tergantung preferensi pribadi. Class based component dapat bekerja sama dengan Functional component, namun pada kenyataannya kita kemungkinan besar hanya berpegang pada functional component atau class based component, meskipun bisa untuk mencampur dan mencocokkannya.

<br />

## Class-based Component lifecycle

Seperti Yang disebutkan diatas, pada Class-based Component tidak dapat menggunakan React hook. Sebagai gantinya, Class-based Component menggunakan method lifecycle:
1. <strong>componentDidMount() method:</strong> dipanggil saat komponen di pasang, jadi ketika dirender dan dievaluasi. Pada dasarnya sama dengan useEffect dengan tanpa dependensi.
2. <strong>componentDidUpdate() method:</strong> dipanggil setelah komponen diperbarui, jadi ketika state berubah dan komponen dievaluasi ulang dan dirender ulang. Pada dasarnya sama dengan useEffect dengan beberapa dependensi.
3. <strong>componentWillUnmount() method:</strong> dipanggil tepat sebelum komponen dihapus dari DOM. Pada dasarnya sama dengan useEffect clean up function.
    
<br />    

## Error boundaries

- Error boundaries adalah komponen React yang memungkinkan untuk menangani dan menampilkan pesan error pada komponen anak yang gagal dalam render. Ini membantu untuk memastikan bahwa sebagian dari aplikasi tetap berfungsi meskipun ada bagian yang gagal dan memberikan tampilan yang baik untuk pesan error pada bagian yang gagal. Error boundaries dapat dibuat menggunakan konsep lifecycle method "componentDidCatch" pada komponen React.
- Ide dibalik Error boundaries adalah kita dapat memastikan bahwa seluruh aplikasi tidak macet jika terjadi kesalahan, kita dapat menangkap kesalahan tersebut dan kemudian menanganinya sama seperti melakukan dengan try catch dalam regular JavaScript. Jika ingin menambahkan method ini, kita saat ini hanya bisa membangunnya menggunakan class-based component.