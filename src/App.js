import React, { useCallback, useMemo, useState } from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

// BEHIND THE SCREEN OF REACT -> React akan menjalankan kembali fungsi komponen dan mengevaluasi kembali apa yang ada di layar jika props atau state atau context berubah, React akan mencari perbedaannya dengan membandingkan evaluasi fungsi komponen sebelumnya dengan hasil evaluasi saat ini, kemudian melaporkan hasil perbedaan tersebut ke React DOM, sehingga React DOM tidak akan merender ulang seluruh Dom yang sama melainkan hanya merender hasil perubahan perbedaan tersebut.

// Jika sebuah komponen dijalankan kembali, maka semua fungsi dan semua komponen Child nya juga akan dieksekusi dan dievaluasi ulang (ini menjadi problem jika memiliki aplikasi yang komplek).
function App() {
    const [listTitle, setListTitle] = useState("My List");

    // Dengan kemampuan useCallback, kita bisa menggunakannya pada nilai props yang berpotensi berubah terutama yang berupa type data reference sehingga membuat child komponen yang memakai props tersebut tidak dapat mengevaluasi ulang komponennya.
    // Dengan dependensi yang kosong akan memberitahu React bahwa fungsi yang disimpan (toggleParagraphHandler) tidak akan merubah, oleh karena itu objek fungsi ini akan selalu sama ketika App component dirender ulang.
    const changeTitleHandler = useCallback(() => {
        setListTitle("New Title");
    }, []);

    const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

    return (
        <div className="app">
            <DemoList title={listTitle} items={listItems} />
            <Button onClick={changeTitleHandler}>Change List Title</Button>
        </div>
    );
}

export default App;
