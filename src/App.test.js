import { render, screen } from "@testing-library/react";
import App from "./App";

// Ini adalah file untuk menguji komponen App, Yang mimiliki fungsi test yang dijalankan dengan dua argument, argumen pertama berupa test deskripsi yang membantu mendeskripsikan hasil pengujian, argumen kedua adalah anonim function yang berisi kode pengujian yang dieksekusi setelah menjalankan pengujian.
test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
