## Fragments

Fragment merupakan sebuah fitur di React yang memungkinkan untuk mengelompokkan beberapa elemen HTML tanpa harus menambahkan elemen tambahan sebagai elemen DOM, sehingga membuat kode lebih bersih dan terstruktur. Ini sangat berguna ketika tidak ingin menambahkan elemen tambahan yang tidak diperlukan ke dalam DOM, seperti elemen div.

Untuk menggunakan Fragment, dapat menggunakan syntax <>...</>. Sebagai contoh, jika ingin mengelompokkan beberapa elemen div tanpa menambahkan elemen div tambahan, Dapat menggunakan Fragment seperti ini:

    return (
        <>
        <div>Elemen 1</div>
        <div>Elemen 2</div>
        <div>Elemen 3</div>
        </>
    );

Jika Anda menggunakan JSX di React tanpa Fragment, Harus menggunakan elemen div tambahan sebagai elemen pembungkus:

    return (
        <div>
        <div>Elemen 1</div>
        <div>Elemen 2</div>
        <div>Elemen 3</div>
        </div>
    );

Selain itu, juga dapat menggunakan Fragment dengan memberikan sebuah kunci (key) untuk masing-masing Fragment. Ini berguna ketika menggunakan Fragment di dalam looping dan membutuhkan sebuah kunci yang unik untuk setiap Fragment. Sebagai contoh:

    import React from 'react';

    function MyComponent() {
        return (
            <>
            {items.map((item) => (
                <Fragment key={item.id}>
                <div>{item.name}</div>
                <div>{item.description}</div>
                </Fragment>
            ))}
            </>
        );
    }

## Portals

Portal adalah fitur React yang memungkinkan untuk menampilkan konten di luar elemen DOM yang sedang di-render oleh aplikasi React. Ini berguna ketika ingin menambahkan konten ke DOM yang tidak secara langsung terkait dengan komponen React, atau ketika Anda ingin memisahkan konten yang di-render oleh aplikasi React dari struktur DOM yang ada.

Untuk menggunakan portal, pertama-tama perlu menambahkan elemen DOM tujuan ke dokumen HTML. Kemudian, dapat menggunakan ReactDOM.createPortal() untuk membuat portal yang menghubungkan elemen tujuan

## Ref

Refs adalah fitur di React yang memungkinkan untuk mengakses elemen DOM atau komponen React secara langsung dari kode JavaScript. Ini berguna ketika ingin mengakses properti atau method dari elemen DOM atau komponen React secara langsung, atau ketika ingin mengubah nilai atau tampilan dari elemen DOM atau komponen React secara langsung.

Untuk menggunakan refs, pertama-tama perlu membuat ref dengan menggunakan React.createRef(). Kemudian, dapat menggunakan ref tersebut untuk mengakses elemen DOM atau komponen React.

-   dengan ref kita dapat mengatur koneksi antara elemen HTML yang dirender dan kode JS yang lain

-   Pertanyaanya bukankah ref lebih baik dibanding dengan useState? jika ingin membaca nilai dengan cepat dan tidak pernah berencana mengubah apapun penggunaan ref lebih efektif
