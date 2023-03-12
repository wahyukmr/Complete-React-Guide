// name-domain.com/new-meetup

import NewMeetupForm from "@/components/meetups/NewMeetupform";
import Head from "next/head";
import { useRouter } from "next/router";

export default function NewMeetup() {
    const router = useRouter();

    async function addMeetupHandler(enteredValues) {
        const response = await fetch("/api/new-meetup", {
            method: "POST",
            body: JSON.stringify(enteredValues),
            headers: { "Content-Type": "application/json" },
        });

        const data = await response.json();

        router.push("/");
    }

    return (
        <>
            <Head>
                <title>Add a New Meetup</title>
                <meta
                    name="description"
                    content="Add your own meetups and cretae amazing networking opportunities."
                />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </>
    );
}
