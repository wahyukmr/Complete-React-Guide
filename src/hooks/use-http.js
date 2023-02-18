import { useCallback, useState } from "react";

const UseHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMeals = useCallback(
        async (newNode, requestConfig, applyData) => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(
                    `https://react-project1-4c0ab-default-rtdb.asia-southeast1.firebasedatabase.app/${newNode}`,
                    {
                        method: requestConfig.method,
                        headers: requestConfig.headers
                            ? requestConfig.headers
                            : {},
                        body: requestConfig.body
                            ? JSON.stringify(requestConfig.body)
                            : null,
                    }
                );

                if (!response.ok) {
                    // Error yang ditrigger ketika memasukkan PATH yang salah: masih mendapatkan response dengan sukses tetapi statusnya 404 NOT FOUND.
                    throw new Error("No data available");
                }

                if (applyData !== null) {
                    const responseData = await response.json();
                    applyData(responseData);
                }
            } catch (error) {
                setError(error.message);
            }
            setLoading(false);
        },
        []
    );

    return { fetchMeals, loading, error };
};

export default UseHttp;
