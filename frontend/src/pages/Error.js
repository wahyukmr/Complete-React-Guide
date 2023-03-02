import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";

export default function ErrorPage() {
    // useRouteError() akan memberi sebuah error objek, objek itu tergantung pada Response atau jenis objek atau data lainnya yang diberikan. "error.status" mencerminkan status Response yang dilemparkan.
    const error = useRouteError();

    let title = "An error occurrend!";
    let message = "Something went wrong!";

    if (error.status === 500) {
        message = JSON.parse(error.data).message;
    }
    if (error.status === 404) {
        title = "Not Found!";
        message = "Chould not find resource or page.";
    }

    return (
        <>
            <MainNavigation />
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>
    );
}
