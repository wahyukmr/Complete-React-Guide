import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

/* Saat menulis test biasanya kita melakukan 3A.
1. Arrange: Menyiapkan data pengujian, kondisi pengujian dan lingkungan pengujian.
2. Act: Menjalankan logic yang seharusnya diuji (misalnya mengeksekusi function).
3. Assert: Membandingkan hasil eksekusi dengan hasil ekspektasi kita. */
test("renders Helloo as a text", () => {
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
