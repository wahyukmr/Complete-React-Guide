import { useCallback, useState } from "react";

const useHTTP = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // mengelola logic utama di custom hooks, dan data logic spesifik pada komponen yang membutuhkan data (dalam kasus ini componen App.js dan NewTask.js)
    const sendRequest = useCallback(async (requestQonfig, applyData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                "https://react-project1-4c0ab-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
                {
                    method: requestQonfig.method,
                    headers: requestQonfig.headers ? requestQonfig.headers : {},
                    body: requestQonfig.body
                        ? JSON.stringify(requestQonfig.body)
                        : null,
                }
            );

            if (!response.ok) {
                throw new Error("Request failed!");
            }

            const data = await response.json();
            applyData(data);
        } catch (err) {
            setError(err.message || "Something went wrong!");
        }
        setIsLoading(false);
    }, []); // dependensi harus mencantumkan semua yang digunakan pada callback

    return {
        // sama seperti, isLoading: isLoading
        isLoading,
        error,
        sendRequest,
    };
};

export default useHTTP;
