import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

// Saat aplikasi sudah berkembang, dan untuk mengelompokkan test yang berbeda-beda, dapat memasukkannya kedalam setelan test yang berbeda. Untuk membuat setelan itu menggunakan fungsi describe() yang mana merupakan fungsi yang tersedia secara global. Fungsi itu menerima 2 argument, yang pertama adalah deskripsi dari kategori dan yang kedua adalah kode test itu sendiri.
describe("Greeting component", () => {
    /*
    Saat menulis test biasanya kita melakukan 3A.
    1. Arrange: Menyiapkan data pengujian, kondisi pengujian dan lingkungan pengujian.
    2. Act: Menjalankan logic yang seharusnya diuji (misalnya mengeksekusi function).
    3. Assert: Membandingkan hasil eksekusi dengan hasil ekspektasi kita.
    */
    test("renders 'Helloo' as a text", () => {
        // Arrange
        render(<Greeting />);

        // Act
        // ...Nothings

        // Assert
        /*
    screen.get akan menimbulkan throw error jika elemen tidak ditemukan.
    screen.query tidak akan melakukan itu.
    screen.find akan mengembalikan Promise. */
        const hellooElement = screen.getByText("Helloo"); // jika exact = false, kapitalisasi tidak akan menjadi masalah.
        expect(hellooElement).toBeInTheDocument();
    });

    test("Renders 'see you' if the button was not clicked", () => {
        render(<Greeting />);
        const outputElement = screen.getByText("see you", { exact: false });
        expect(outputElement).toBeInTheDocument();
    });

    // userEvent adalah objek yang membantu kita memicu user event di virtual screen.
    test("Renders 'Change!!' if the button was clicked", async () => {
        // Arrange
        render(<Greeting />);

        // Act
        const user = userEvent.setup(); // Menginisialisasi user
        await user.click(screen.getByRole("button"));

        // Assert
        const outputElement = screen.getByText("Change!!", { exact: false });
        expect(outputElement).toBeInTheDocument();
    });

    // Untuk menguji ketika mengklik tombol kemudian memeriksa apakah paragraf text 'see you' tidak terlihat
    test("Does not render 'see you' if the button was clicked", async () => {
        // Arrange
        render(<Greeting />);

        // Act
        const user = userEvent.setup(); // Menginisialisasi user
        await user.click(screen.getByRole("button"));

        // Assert
        // Dengan menggunakan queryByText akan mengembalikan null jika element tidak ditemukan
        const outputElement = screen.queryByText("see you", {
            exact: false,
        });
        expect(outputElement).toBeNull(); // mengecek apakah elemen output berupa null
    });
});
