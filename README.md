## REGULAR JAVASCRIPT ( Pendekatan Imperative )

Memberikan petunjuk yang jelas, langkah demi langkah yang jelas mengenai apa yang harus dilakukan JavaScript di browser. Kelemahannya adalah mendapatkan UI yang rumit.

        const element = document.createElement("p");
        element.textContent = "This is also visible";
        document.getElementById("root").appendChild(element);

</br>

## REACT ( Pendekatan Declarative )

Akan menghasilkan interuksi di belakang layar untuk kemudian ditampilkan lebih lanjut.

-   Fitur JSX (kode HTML dalam JavaScript) ini adalah sintaks khusus yang ditemukan dan diperkenalkan oleh React, dan berfungsi dalam file JavaScript karena langkah-langkah transformasi ini berjalan di belakang layar.

            return (
                <div>
                    <h2>Let's get started!</h2>
                    <p>This is also visible</p>
                </div>
            );
