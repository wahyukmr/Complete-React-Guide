## Apa itu Redux

- Redux adalah sebuah library open-source yang digunakan untuk manajemen state pada aplikasi JavaScript. Redux bekerja dengan mengatur data secara terpusat dalam sebuah store, dan memungkinkan pengguna untuk mengakses data tersebut melalui sebuah API yang sederhana. Redux sangat umum digunakan dalam aplikasi React, tetapi sebenarnya dapat digunakan pada platform JavaScript apa saja.

- Redux bertujuan untuk mengatasi masalah kompleksitas dalam manajemen state pada aplikasi yang besar dan kompleks. Dalam aplikasi yang kompleks, terdapat banyak komponen yang saling berhubungan, dan setiap komponen dapat memiliki state yang berbeda. Dengan Redux, state seluruh aplikasi diatur secara terpusat, sehingga memudahkan pengembang dalam mengakses dan mengubah state pada seluruh aplikasi.

- Beberapa konsep utama dalam Redux antara lain:

    1. <strong>Store:</strong> Store adalah sebuah objek yang menyimpan seluruh state dari aplikasi. State pada Redux tidak dapat diubah secara langsung, melainkan harus melalui sebuah action.

    2. <strong>Action:</strong> Action adalah objek yang berisi informasi tentang perubahan state pada aplikasi. Setiap action memiliki sebuah type yang mendefinisikan jenis perubahan state yang akan dilakukan. Action juga dapat membawa payload, yaitu data tambahan yang dibutuhkan untuk melakukan perubahan state.

    3. <strong>Reducer:</strong> Reducer adalah sebuah fungsi yang digunakan untuk mengubah state pada aplikasi. Reducer menerima action dan state saat ini, dan mengembalikan state yang baru. Reducer harus bersifat pure, artinya tidak boleh mengubah state secara langsung, tetapi harus mengembalikan state baru.

    4. <strong>Dispatch:</strong> Dispatch adalah sebuah method yang digunakan untuk mengirim action ke store. Ketika action dikirimkan ke store, store akan memanggil reducer yang sesuai dengan type action tersebut, dan mengubah state pada aplikasi.

Dalam Redux, setiap komponen dapat mengakses state pada store dengan menggunakan method mapStateToProps. Setiap perubahan state pada store akan memicu perubahan pada seluruh komponen yang terhubung pada state tersebut, sehingga memastikan bahwa state pada seluruh aplikasi selalu konsisten.

<hr>

## Mengapa harus menggunakan Redux

Tiga jenis utama definisi State:

1. <strong>Local State</strong>
    - Local State adalah State yang dimiliki oleh satu komponen.
    - Misalnya untuk menghandel user input pada sebuah bidang input.
    - Harus dikelola di komponen internal dengan useState atau useReduce jika lebih kompleks.
2. <strong>Cross-Component State</strong>
    - Cross-Component State adalah State yang memengaruhi beberapa komponen.
    - Misalnya untuk jika memiliki tombol yang membuka dan menutup overlay model yang mungkin mempengaruhi banyak komponen.
    - Dikelola dengan useState atau useReduce dan memerlukan "props chains" / "props drilling" agar bisa disebarkan ke banyak komponen.
3. <strong>App-Wide State</strong>
    - App-Wide State adalah State yang memengaruhi seluruh aplikasi (kebanyakan / seluruh komponen).
    - Misalnya untuk State user authentication.
    - Dikelola dengan useState atau useReduce dan memerlukan "props chains" / "props drilling" agar bisa disebarkan ke banyak komponen.

Jika bekerja dengan Cross-Component State atau App-Wide State, penggunaan props menjadi tidak praktis karena harus meneruskan data ke banyak komponen. Sebelumnya kita menggunakan React Context untuk mengelola State dan mempengaruhi komponen agar terhindar dari "props chains" / "props drilling". Redux juga melakukan hal yang sama, jadi React Context dan Redux ada untuk membantu mengelola Cross-Component State atau App-Wide State.
   
<hr>   
    
## Redux Vs React Context

React Context dan Redux merupakan dua opsi yang dapat digunakan dalam manajemen state pada aplikasi React, tetapi keduanya memiliki perbedaan dalam konsep, cara kerja, dan penggunaannya.

1. <strong>Konsep</strong>
    - React Context: React Context memungkinkan pengguna untuk berbagi data secara global antara komponen yang berbeda tanpa perlu melewati prop dari parent ke child. Context menyediakan sebuah cara untuk menyimpan state dan membuatnya tersedia untuk semua komponen di dalam sebuah tree.
    - Redux: Redux adalah library manajemen state yang berfungsi untuk menyimpan seluruh state dari aplikasi pada sebuah store yang terpusat. Redux mengatur cara state dikelola pada seluruh aplikasi dengan cara memisahkan state dari tampilan, dan memberikan aliran data yang jelas dan terdokumentasi pada aplikasi.

2. <strong>Cara Kerja</strong>
    - React Context: Context menyediakan Provider dan Consumer. Provider menyediakan data yang ingin dibagikan, sementara Consumer mengambil data yang disediakan oleh Provider. Ketika data di-update, React akan mere-render seluruh Consumer yang terhubung pada Provider.
    - Redux: Redux menyediakan sebuah store yang menyimpan seluruh state aplikasi. Setiap perubahan state harus dilakukan melalui action yang di-dispatch ke store. Reducer akan menerima action dan menghasilkan state baru. Store akan memperbarui state, dan kemudian memicu re-render pada seluruh komponen yang terhubung pada store.

3. <strong>Penggunaan</strong>
    - React Context: Context sangat berguna dalam kasus-kasus di mana banyak komponen memerlukan akses ke data yang sama, seperti tema aplikasi atau data pengguna yang terautentikasi.
    - Redux: Redux sangat berguna dalam manajemen state pada aplikasi yang kompleks dan besar. Redux menyediakan cara yang jelas dan terdokumentasi dalam mengatur state aplikasi, sehingga memudahkan dalam debugging dan pengembangan aplikasi yang besar.

Kesimpulannya, React Context dan Redux keduanya menyediakan cara untuk mengatur state pada aplikasi React, keduannya juga dapat digunakan dalam satu aplikasi yang sama. Tetapi memiliki perbedaan dalam konsep, cara kerja, dan penggunaannya. Penggunaan React Context lebih cocok untuk kasus-kasus kecil, sementara Redux lebih cocok untuk aplikasi yang kompleks dan besar. Namun, keputusan untuk menggunakan React Context atau Redux tergantung pada kebutuhan dan kompleksitas dari aplikasi yang sedang dibangun.

<br />

<hr>

<strong>NB:</strong>
Redux dapat digunakan dalam proyek JavaScript apapun, Namun sayangnya tidak berlaku untuk React. Untuk menghubungkan aplikasi React ke Redux Selain harus menginstall package Redux, ada Package tambahan yang harus diinstall:
        
        npm install redux react-redux
        

## connect in redux

Connect pada Redux adalah sebuah fungsi yang berguna untuk menghubungkan state dan action creator Redux ke komponen React. Fungsi ini memungkinkan komponen React untuk mengakses state dan action creator yang diimplementasikan dalam store Redux, sehingga memungkinkan penggunaan data state dan melakukan dispatch aksi untuk mengubah data state.

Fungsi connect() menerima dua argumen yaitu mapStateToProps dan mapDispatchToProps. mapStateToProps adalah sebuah fungsi yang menerima state sebagai argumen dan mengembalikan objek yang berisi properti-properti yang akan dipetakan ke dalam props pada komponen. Sedangkan mapDispatchToProps adalah sebuah fungsi yang menerima dispatch sebagai argumen dan mengembalikan objek yang berisi fungsi-fungsi action creator yang akan dipetakan ke dalam props pada komponen.

Dengan menggunakan connect(), komponen React dapat memperoleh akses ke state dan action creator Redux dengan cara memetakan properti pada objek props. Selain itu, ketika ada perubahan pada state, komponen React yang terhubung dengan store Redux juga akan secara otomatis mendapatkan pembaruan data.