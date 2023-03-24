import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
    test("Renders posts if request succeeds", async () => {
        render(<Async />);
        // Method get seperti query yang akan langsung mencari element, sedangkan find akan mengembalikan promise dan reeact-testing-library akan mengevaluasi ulang screen beberapakali sampai tindakannya berhasil.
        const listItemElement = await screen.findAllByRole(
            "listitem",
            {},
            { timeout: 3000 }
        );
        // Harapannya disini adalah memeriksa panjang sebuah array tidak yang bukan nol.
        expect(listItemElement).not.toHaveLength(0);
    });
});
