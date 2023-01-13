# useEffect

-   Effect / side effect adalah sesuatu yang mungkin terjadi di aplikasi. Bisa jadi saat melakukan beberapa HTTP Request ke backend server, menyimpan data di penyimpanan lokal browser, mengatur dan mengelola timers. Jadi Itu semua adalah tugas yg berbeda yang harus terjadi di luar fungsi komponen normal dan siklus render. Alasannya bahwa side Effects mungkin akan memblokir atau menunda proses rendering dan kemungkinan besar akan membuat bug, loop tak terbatas, atau hanya mengirim terlalu banyak HTTP Request. Maka dari itu untuk menangani side effect gunakan useEffect() hook.

-   useEffect secara umum adalah Hook yang penting yang membantu kita menangani kode yang harus dijalankan sebagai respon terhadap sesuatu, sesuatu itu bisa jadi komponen yang sedang dimuat, email address yang di perbarui, bisa apa saja.

-   Singkatnya, setiap kali memiliki tindakan yang harus dijalankan sebagai respon terhadap beberapa tindakan lain, itu adalah side Effect. Dan disitulah penggunaan useEffect dapat menanganinya.

-   Untuk menggunakan useEffect dengan dua argument:

    1. Argumen pertama adalah fungsi yang harus dijalankan setelah setiap evaluasi komponen jika depedensi yang ditentukan ( argumen kedua ) berubah.

    2. Argumen kedua adalah array yang penuh dengan depedensi dan setiap kali depedensi berubah, fungsi pertama akan dijalankan kembali.

    -   Pada fungsi pertama dapat meletakkan kode side effect apapun dan kode itu hanya akan dijalankan ketika depedensi yang ditentukan berubah.
    -   Jika tidak ada satupun dari dependensi yang berubah, fungsi tidak akan dijalankan ulang (hanya sekali).

    </br>

-   Kita harus menambahkan "segalanya" yang kita gunakan dalam fungsi Effect sebagai dependensi (yaitu semua variabel State dan fungsi yang digunakan disana).
    itu benar tetapi ada pengecualian untuk itu:
    1. Tidak perlu menambahkan State updating functions.
    2. Tidak perlu menambahkan "built-in" APIs atau fungsi, seperti fetch(), LocalStorage, dll (fungsi dan fitur bawaan browser).
    3. Tidak perlu menambahkan variabel atau fungsi yang mungkin telah kita tentukan "di luar" komponen.

## debounce

-   Di React, debounce adalah teknik yang digunakan untuk mengurangi jumlah pemanggilan suatu fungsi yang dilakukan secara beruntun. Misalnya, jika kita memiliki suatu fungsi yang dipanggil setiap kali pengguna mengetik di kotak pencarian, kita mungkin ingin menggunakan debounce untuk mencegah terlalu banyak pemanggilan fungsi tersebut, terutama jika pemanggilan fungsi tersebut memerlukan waktu yang cukup lama. Dengan menggunakan debounce, kita dapat menunda pemanggilan fungsi tersebut selama periode waktu tertentu, sehingga hanya ada satu pemanggilan fungsi yang dilakukan setelah periode waktu tertentu berlalu tanpa ada pemanggilan fungsi lain yang terjadi.

## unmounting

-   Clean up function atau sering disebut dengan "unmounting" merupakan bagian dari proses rendering di React. Saat sebuah komponen tidak lagi dibutuhkan, maka komponen tersebut akan dihapus dari DOM. Sebelum komponen tersebut dihapus, React akan memanggil lifecycle method componentWillUnmount(). Clean up function biasanya digunakan untuk membersihkan atau menghapus event listeners atau subscriptions yang mungkin telah ditambahkan sebelumnya pada komponen tersebut.

-   Contohnya, jika sebuah komponen menambahkan event listener pada DOM saat di-mount (saat sebuah component awalnya di load / dibuat), maka pada saat komponen tersebut di-unmount (saat sebuah component musnahkan), event listener tersebut harus dihapus agar tidak terjadi memory leak. Jadi, clean up function adalah cara untuk membersihkan atau menghapus semua sisa yang mungkin ditinggalkan oleh sebuah komponen saat komponen tersebut dihapus dari DOM.

</br>

# useReducer

-   useReducer adalah hook di React yang memungkinkan untuk mengelola state kompleks di aplikasi React kita. Seperti useState, useReducer juga memungkinkan mengakses state dan menyediakan mekanisme untuk memperbarui state tersebut. Namun, useReducer memberikan lebih banyak kemampuan daripada useState karena mengizinkan kita menyediakan sebuah reducer function yang mengelola state.

-   Reducer function adalah sebuah function yang menerima state sekarang dan action yang diberikan, lalu mengembalikan state baru. Action tersebut adalah objek yang mengandung informasi tentang apa yang harus dilakukan untuk memperbarui state.

-   UseReducer juga memiliki kelebihan di bandingkan dengan useState karena useReducer memungkinkan kita untuk mengelola state yang terkait dengan satu sama lain dalam cara yang lebih terstruktur.

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

# useContext

-   Context Provider adalah fitur React yang memungkinkan untuk membagikan nilai kepada komponen tanpa harus melalui proses penurunan properti (props). Hal ini sangat berguna jika memiliki beberapa komponen yang perlu mengakses nilai yang sama, dan tidak ingin harus mengalirkan props ke setiap tingkat intermediat ketika menurunkannya.

-   Untuk menggunakan Context Provider, pertama-tama harus membuat context dengan menggunakan React.createContext() . Ini akan mengembalikan sebuah objek yang memiliki dua properti: Provider dan Consumer.

    -   Provider digunakan untuk menetapkan nilai yang akan digunakan oleh Consumer. Nilai ini dapat diubah setiap saat dengan menggunakan value prop pada Provider.

    -   Consumer digunakan untuk mengakses nilai yang ditetapkan oleh Provider / nilai default. Ini harus ditempatkan di dalam elemen JSX yang ingin mengakses nilai tersebut, dan harus diikat dengan sebuah fungsi yang menerima nilai sebagai argumen.

-   kita dapat melakukan Listener dengan menggunakan Consumer atau dengan React hook, biasanya kita menggunakan React hook dan Consumer sebagai alternatif lain.

## Perbedaan utama antara props dan useContext:

1. Props hanya bisa digunakan untuk mengirim data dari komponen yang lebih tinggi ke komponen yang lebih rendah. Sedangkan useContext memungkinkan Anda mengirim data kembali ke komponen yang lebih tinggi atau ke komponen yang terletak di tingkat yang sama.

2. Props didefinisikan di dalam komponen yang lebih tinggi, dan diteruskan ke komponen yang lebih rendah sebagai argumen fungsi. Sedangkan useContext membutuhkan penggunaan createContext() dan Provider untuk membuat dan menyimpan data context, dan useContext() untuk mengambil data dari context di dalam komponen.

3. Props hanya bisa digunakan untuk mengirim data dari satu komponen ke komponen lainnya. Sedangkan useContext memungkinkan Anda menyimpan data yang tersedia di seluruh aplikasi dan dapat diakses oleh seluruh komponen yang membutuhkannya.

## Batasan Context:

-   React context secara khusus tidak dioptimalkan untuk perubahan frekuensi tinggi, jika memiliki perubahan State yang terjadi lebih sering (perubahan per detik dan seterusnya) React Context tidak dioptimalkan untuk itu.

-   React Context juga tidak harus digunakan untuk mengganti semua komponen komunikasi dan props, props masih vital dan penting untuk mengkonfigurasi komponen, Jadi tetap menggunakan props untuk itu dan tidak menggunakan Context untuk semuanya, untuk mengganti rantai props yang panjang.

</br>

# useRef

-   useRef merupakan sebuah hook React yang berguna untuk mengakses DOM node atau sebuah elemen JavaScript lainnya dari komponen React. Ini sangat berguna jika kita perlu mengakses properti atau method dari sebuah elemen DOM, atau jika kita perlu menyimpan nilai yang tidak diubah selama re-rendering komponen.

-   Ref juga dapat digunakan untuk menyimpan nilai yang tidak diubah selama re-rendering komponen. Misalnya, jika kita memiliki sebuah counter yang di-update setiap kali tombol diklik, kita dapat menggunakan ref untuk menyimpan nilai counter agar tidak hilang setelah setiap re-render.

</br>

# useImperativeHandle

-   "useImperativeHandle" adalah sebuah hook React yang berguna untuk memodifikasi objek handle yang dikembalikan oleh forwardRef ketika digunakan bersama dengan sebuah komponen dasar. Hal ini berguna jika kita ingin memberikan akses ke method atau properti tertentu dari sebuah komponen dasar ke komponen yang membungkusnya (wrapper component).

-   Perhatikan bahwa "useImperativeHandle" harus digunakan bersama dengan "forwardRef", dan hanya boleh digunakan pada komponen yang menerima "ref" sebagai argumen. Juga, "useImperativeHandle" hanya harus digunakan jika kita benar-benar perlu memberikan akses ke method atau properti tertentu dari komponen dasar ke wrapper component, karena ini dapat membuat kode lebih sulit dipahami dan di-debug.

</br>

# Aturan utama ketika bekerja dengan React Hook

(Ract Hook hanyalah semua fungsi yang dimulai dengan "use"):

1. Hanya memanggil React Hook dalam React Functions: pada React component functions dan custom hook functions

2. hanya memanggil React Hook di tingkat atas React component functions / custom hook functions, jangan memanggil hook pada di fungsi bertingkat dan jangan memanggilnya pada block statements apapun
