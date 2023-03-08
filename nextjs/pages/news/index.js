// nama-domain.com/news

import Link from "next/link";

export default function NewsPage() {
    // mengimport komponen Link dari nextjs yang dapat digunakan dalam kode JSX untuk membangun link.
    return (
        <>
            <h1>The News Page</h1>
            <ul>
                <Link href="/news/product1">Product 1</Link>
                <Link href="/news/product2">Product 2</Link>
            </ul>
        </>
    );
}
