# Aturan utama ketika bekerja dengan React Hook

(Ract Hook hanyalah semua fungsi yang dimulai dengan "use"):

1. Hanya memanggil React Hook dalam React Functions: pada React component functions dan custom hook functions
2. hanya memanggil React Hook di tingkat atas React component functions / custom hook functions, jangan memanggil hook pada di fungsi bertingkat dan jangan memanggilnya pada block statements apapun

<br />

## useEffect

-   Effect / side effect adalah sesuatu yang mungkin terjadi di aplikasi. Bisa jadi saat melakukan beberapa HTTP Request ke backend server, menyimpan data di penyimpanan lokal browser, mengatur dan mengelola timers. Jadi Itu semua adalah tugas yg berbeda yang harus terjadi di luar fungsi komponen normal dan siklus render. Alasannya bahwa side Effects mungkin akan memblokir atau menunda proses rendering dan kemungkinan besar akan membuat bug, loop tak terbatas, atau hanya mengirim terlalu banyak HTTP Request. Untuk menangani side effect gunakan useEffect() hook.

-   <strong>useEffect</strong> adalah Hook di React yang digunakan untuk membuat efek pada komponen, seperti memuat data dari server, memodifikasi DOM, atau memulai/membatalkan interval/timeout. useEffect bisa berguna dalam berbagai situasi, di antaranya:
    1. Mengatur interaksi dengan DOM: useEffect bisa digunakan untuk memodifikasi elemen DOM saat komponen mount atau update. Misalnya, memfokuskan input, memperbarui ukuran canvas, atau memutar video.
    2. Memuat data dari server: useEffect bisa digunakan untuk memuat data dari server saat komponen mount atau update. Ini berguna saat kita ingin memuat data saat komponen pertama kali ditampilkan atau memuat data baru saat beberapa state atau props berubah.
    3. Memulai/membatalkan interval/timeout: useEffect juga bisa digunakan untuk memulai interval atau timeout saat komponen mount, dan membatalkan mereka saat komponen unmount. Misalnya, saat kita ingin memperbarui data setiap beberapa detik atau membuat animasi.
    4. Mengatur subscriber/unsubscriber: useEffect bisa digunakan untuk mengatur subscriber dan unsubscriber saat komponen mount dan unmount. Misalnya, saat kita ingin berlangganan ke event dan membatalkan berlangganan saat komponen unmount.
    5. Menghandle cleanup: useEffect juga bisa digunakan untuk menangani cleanup saat komponen unmount atau update. Misalnya, menghapus file yang tidak lagi digunakan atau membatalkan request HTTP yang sedang berlangsung.

### Dependencies
-   Hanya menggunakan satu argumen (tanpa dependencies, ini adalah cara yang valid untuk menggunakannya) meskipun jarang digunakan, ini akan membuat fungsi berjalan saat komponen dipasang / dirender untuk pertama kalinya, tetapi juga untuk setiap pembaruan State / siklus render komponen (akan berjalan setelahnya).
-   Jika ditambahkan dengan dependency (array kosong) akan membuat fungsi hanya berjalan sekali saat pertama kali komponen dipasang atau dirender dan Clean up function akan berjalan ketika komponen dihapus dari DOM.
-   Atau jika menambahkan dependency seperti enteredPassword, akan menjalankan fungsi setiap kali komponen dipasang dan dirender dan setiap kali state (dalam hal ini enteredPassword ) berubah.
-   Kita juga harus membersihkan fungsi, dengan mereturnnya. Clean up function ini berjalan sebelum fungsi ini berjalan secara keseluruhan. Clean up function akan dipicu sebelum fungsi Effect berjalan

### Hal yang tidak harus ditambahkan dalam Dependencies
-   Kita harus menambahkan "segalanya" yang kita gunakan dalam fungsi Effect sebagai dependensi (yaitu semua variabel State dan fungsi yang digunakan disana). Itu benar tetapi ada pengecualian untuk itu:
    1. Tidak perlu menambahkan State updating functions.
    2. Tidak perlu menambahkan "built-in" APIs atau fungsi, seperti fetch(), LocalStorage, dll (fungsi dan fitur bawaan browser).
    3. Tidak perlu menambahkan variabel atau fungsi yang mungkin telah kita tentukan "di luar" komponen.

### debounce
-   Di React, debounce adalah teknik yang digunakan untuk mengurangi jumlah pemanggilan suatu fungsi yang dilakukan secara beruntun. Misalnya, jika kita memiliki suatu fungsi yang dipanggil setiap kali pengguna mengetik di kotak pencarian, kita mungkin ingin menggunakan debounce untuk mencegah terlalu banyak pemanggilan fungsi tersebut, terutama jika pemanggilan fungsi tersebut memerlukan waktu yang cukup lama. Dengan menggunakan debounce, kita dapat menunda pemanggilan fungsi tersebut selama periode waktu tertentu, sehingga hanya ada satu pemanggilan fungsi yang dilakukan setelah periode waktu tertentu berlalu tanpa ada pemanggilan fungsi lain yang terjadi.

### Clean up function / unmounting
-   Clean up function atau sering disebut dengan "unmounting" merupakan bagian dari proses rendering di React. Saat sebuah komponen tidak lagi dibutuhkan, maka komponen tersebut akan dihapus dari DOM. Sebelum komponen tersebut dihapus, React akan memanggil lifecycle method componentWillUnmount(). Clean up function biasanya digunakan untuk membersihkan atau menghapus event listeners atau subscriptions yang mungkin telah ditambahkan sebelumnya pada komponen tersebut.
-   Contohnya, jika sebuah komponen menambahkan event listener pada DOM saat di-mount (saat sebuah component awalnya di load / dibuat), maka pada saat komponen tersebut di-unmount (saat sebuah component dimusnahkan / dihapus) event listener tersebut harus dihapus agar tidak terjadi memory leak. Jadi, clean up function adalah cara untuk membersihkan atau menghapus semua sisa yang mungkin ditinggalkan oleh sebuah komponen saat komponen tersebut dihapus dari DOM.

</br>

## useReducer

-   useReducer adalah hook di React yang membantu mengelola state yang lebih kompleks dan memiliki logika yang lebih rumit daripada useState. useReducer memberikan kontrol yang lebih besar atas bagaimana state berubah dan memungkinkan kita untuk membuat pembaruan state yang dilakukan berdasarkan sekumpulan aksi (actions) yang didefinisikan, seperti yang dilakukan dalam aplikasi yang menggunakan Redux.

- Berikut adalah beberapa situasi di mana useReducer bisa berguna:
    1. <strong>Aplikasi dengan state yang rumit:</strong> Jika aplikasi memiliki state yang rumit dan logika yang kompleks untuk mengubah state tersebut, useReducer bisa memberikan solusi yang lebih baik daripada useState.
    2. <strong>Aplikasi dengan banyak interaksi:</strong> Jika aplikasi memiliki banyak interaksi dan update state yang saling berkaitan, useReducer memungkinkan kita untuk memetakan interaksi tersebut ke dalam sekumpulan aksi dan mengelola update state secara lebih efisien.
    3. <strong>Aplikasi dengan banyak komponen:</strong> Jika aplikasi memiliki banyak komponen dan komponen tersebut berbagi state, useReducer memungkinkan kita untuk memetakan state ke sebuah objek global yang bisa diakses oleh banyak komponen.
    4. <strong>Aplikasi dengan state yang berubah secara bersamaan:</strong> Jika aplikasi memiliki state yang harus diperbarui secara bersamaan, useReducer memungkinkan kita untuk memperbarui state tersebut dengan lebih efisien dan memastikan bahwa semua state selalu terupdate secara sinkron.

Dalam penggunaan useReducer, kita membuat sebuah reducer function yang menerima state dan aksi sebagai parameter, dan mengembalikan state baru. Kemudian, kita memanggil useReducer dengan reducer function dan state awal sebagai parameter, dan menggunakan state dan dispatch function yang dikembalikan oleh useReducer untuk mengontrol bagaimana state berubah dalam aplikasi. UseReducer juga memiliki kelebihan di bandingkan dengan useState karena useReducer memungkinkan kita untuk mengelola state yang terkait dengan satu sama lain dalam cara yang lebih terstruktur.

-   UseState vs useReducer untuk mengelola state!!
    1. useState:
        - Untuk mengelola state utama, biasanya kita mulai dengan useState dan seringkali hanya itu yang dibutuhkan.
        - Bagus digunakan untuk bagian independen dari State / data dan State yang sederhana.
        - Bagus jika pembaruan State mudah dan terbatas pada beberapa jenis .pembaruan, tidak memiliki banyak kasus yang berbeda yang akan merubah State.

    2. useReducer:
        - Jika memiliki objek sebagai State atau State yang lebih komplek, gunakan reducer.
        - Bagus digunakan jika membutuhkan lebih banyak power, dapat menggunakan fungsi yang diperkecil yang dapat berisi logika pembaruan State yang lebih komplek.
        - Harus mempertimbangkan penggunaan useReducer jika berurusan dengan data terkait dengan State yang terdiri dari bagian-bagian terkait.
        - useReducer dapat membantu jika memiliki pembaruan State yang lebih komplek.
        - Terkadang penggunaan useReducer mungkin lebih elegan dan sederhana, disisi lain menggunakan useReducer seringkali berlebihan jika hanya memiliki State sederhana yang hanya beralih di antara dua nilai yang berbeda.

</br>

## useContext

-   useContext Hook di React digunakan untuk membuat komponen yang membutuhkan akses ke context data tanpa harus melalui proses pemasangan melalui props. Ini berguna ketika kita memiliki data yang digunakan oleh banyak komponen dalam aplikasi dan tidak ingin menyebarkan props melalui berbagai tingkat komponen.

- Contohnya, jika kita memiliki tema aplikasi yang digunakan oleh banyak komponen, kita dapat menggunakan useContext untuk membuat context yang menyimpan informasi tema dan mengaksesnya dari setiap komponen yang membutuhkannya. Ini akan membuat kode lebih mudah dikelola dan mempermudah pembaruan tema jika diperlukan.

- Penggunaan useContext juga berguna ketika kita memiliki data yang harus dibagikan antara komponen-komponen yang tidak berhubungan secara langsung. Dalam hal ini, kita dapat membuat context dan mengakses data yang dibutuhkan oleh komponen-komponen tersebut, tanpa harus melalui proses penyebaran props yang panjang.

- Secara keseluruhan, useContext berguna untuk membuat aplikasi lebih mudah dikelola dan mempermudah pembaruan data yang dibagikan antar komponen.

-   Untuk menggunakan Context Provider, pertama-tama harus membuat context dengan menggunakan React.createContext() . Ini akan mengembalikan sebuah objek yang memiliki dua properti: Provider dan Consumer.
    1.   Provider digunakan untuk menetapkan nilai yang akan digunakan oleh Consumer. Nilai ini dapat diubah setiap saat dengan menggunakan value prop pada Provider.
    2.   Consumer digunakan untuk mengakses nilai yang ditetapkan oleh Provider / nilai default. Ini harus ditempatkan di dalam elemen JSX yang ingin mengakses nilai tersebut, dan harus diikat dengan sebuah fungsi yang menerima nilai sebagai argumen.

-   kita dapat melakukan Listener dengan menggunakan Consumer atau dengan React hook, biasanya kita menggunakan React hook dan Consumer sebagai alternatif lain.

### Perbedaan utama antara props dan useContext:

1. Props hanya bisa digunakan untuk mengirim data dari komponen yang lebih tinggi ke komponen yang lebih rendah. Sedangkan useContext memungkinkan Anda mengirim data kembali ke komponen yang lebih tinggi atau ke komponen yang terletak di tingkat yang sama.

2. Props didefinisikan di dalam komponen yang lebih tinggi, dan diteruskan ke komponen yang lebih rendah sebagai argumen fungsi. Sedangkan useContext membutuhkan penggunaan createContext() dan Provider untuk membuat dan menyimpan data context, dan useContext() untuk mengambil data dari context di dalam komponen.

3. Props hanya bisa digunakan untuk mengirim data dari satu komponen ke komponen lainnya. Sedangkan useContext memungkinkan Anda menyimpan data yang tersedia di seluruh aplikasi dan dapat diakses oleh seluruh komponen yang membutuhkannya.

### Batasan Context:

-   React context secara khusus tidak dioptimalkan untuk perubahan frekuensi tinggi, jika memiliki perubahan State yang terjadi lebih sering (perubahan per detik dan seterusnya) React Context tidak dioptimalkan untuk itu.
-   React Context juga tidak harus digunakan untuk mengganti semua komponen komunikasi dan props, props masih vital dan penting untuk mengkonfigurasi komponen, Jadi tetap menggunakan props untuk itu dan tidak menggunakan Context untuk semuanya, untuk mengganti rantai props yang panjang.

</br>

## useRef

-   useRef merupakan sebuah hook React yang berguna untuk mengakses DOM node atau sebuah elemen JavaScript lainnya dari komponen React. Ini sangat berguna jika kita perlu mengakses properti atau method dari sebuah elemen DOM, atau jika kita perlu menyimpan nilai yang tidak diubah selama re-rendering komponen.

-   Ref juga dapat digunakan untuk menyimpan nilai yang tidak diubah selama re-rendering komponen. Misalnya, jika kita memiliki sebuah counter yang di-update setiap kali tombol diklik, kita dapat menggunakan ref untuk menyimpan nilai counter agar tidak hilang setelah setiap re-render.

- useRef bisa berguna dalam berbagai situasi, di antaranya:
    1. <strong>Mengakses elemen DOM:</strong> Kita dapat menggunakan useRef untuk menyimpan referensi ke elemen DOM seperti input, canvas, atau video, dan kemudian menggunakan referensi tersebut untuk memodifikasi elemen tersebut (misalnya, memfokuskan input, mengambil screenshot dari canvas, atau memutar video).
    2. <strong>Menyimpan nilai yang tidak berubah:</strong> useRef juga bisa digunakan untuk menyimpan sebuah nilai yang tidak berubah selama render ulang komponen, seperti referensi ke objek JavaScript atau hasil dari sebuah operasi kompleks.
    3. <strong>Menyimpan state dalam komponen class:</strong> useRef dapat digunakan sebagai pengganti this.state dalam komponen class. Ini berguna saat kita ingin menyimpan sebuah nilai yang tidak mempengaruhi render ulang komponen.
    4. <strong>Menyimpan interval atau timeout:</strong> useRef juga bisa digunakan untuk menyimpan referensi ke interval atau timeout, sehingga kita bisa membatalkan mereka saat diperlukan (misalnya, saat komponen unmount).
    5. <strong>Menyimpan nilai lain:</strong> useRef juga bisa digunakan untuk menyimpan berbagai jenis nilai lain, seperti data dari server, hasil dari sebuah fungsi, atau bahkan sebuah objek seperti FormData.

</br>

## React forwardRef

- React.forwardRef adalah sebuah fitur di React yang memungkinkan kita untuk membuat komponen referensi. Komponen referensi adalah komponen yang memungkinkan akses ke elemen DOM yang mewakilinya melalui sebuah referensi.

- React.forwardRef berguna dalam beberapa situasi, seperti:
    1. <strong>Membuat komponen dengan API eksternal:</strong> React.forwardRef memungkinkan kita untuk membuat API eksternal pada komponen yang dapat diakses oleh komponen lain. Misalnya, jika kita membuat modal, kita dapat membuat API untuk membuka dan menutup modal yang dapat diakses oleh komponen lain.
    2. <strong>Mengakses elemen DOM secara langsung:</strong> React.forwardRef memungkinkan kita untuk mengakses elemen DOM secara langsung melalui sebuah referensi. Ini berguna jika kita ingin mengatur perilaku elemen DOM secara langsung dari komponen React.
    3. <strong>Memodifikasi perilaku komponen:</strong> React.forwardRef memungkinkan kita untuk memodifikasi perilaku komponen yang tidak dapat diakses langsung dari komponen utama. Ini berguna ketika kita ingin membuat API eksternal pada komponen yang dapat diakses oleh komponen lain.

Secara keseluruhan, React.forwardRef membuat aplikasi React lebih mudah dikembangkan dan mempermudah interaksi antar komponen. Ini membuat aplikasi lebih fleksibel dan mempermudah pengembangan aplikasi.

### useImperativeHandle

-   Hook useImperativeHandle adalah sebuah hook React yang berguna untuk memodifikasi objek handle yang dikembalikan oleh forwardRef ketika digunakan bersama dengan sebuah komponen dasar. Hal ini berguna jika kita ingin memberikan akses ke method atau properti tertentu dari sebuah komponen dasar ke komponen yang membungkusnya (wrapper component) atau ke komponent induknya.

- Ini adalah sesuat yang jarang terjadi, jangan sering menggunakan dalam proyek. Jadikan sebagai alternative lain.

-   Perhatikan bahwa "useImperativeHandle" harus digunakan bersama dengan "forwardRef", dan hanya boleh digunakan pada komponen yang menerima "ref" sebagai argumen. Juga, "useImperativeHandle" hanya harus digunakan jika kita benar-benar perlu memberikan akses ke method atau properti tertentu dari komponen dasar ke wrapper component, karena ini dapat membuat kode lebih sulit dipahami dan di-debug.
