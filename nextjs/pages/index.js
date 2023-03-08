import MeetupList from "@/components/meetups/MeetupList.";

const {
    default: MainNavigation,
} = require("@/components/layout/MainNavigation");

export default function HomePage() {
    const DUMMY_MEETUPS = [
        {
            id: "m1",
            title: "A first meetup",
            image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
            address: "Some address",
            description: "This is a first meetup",
        },
        {
            id: "m2",
            title: "A second meetup",
            image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
            address: "Some address",
            description: "This is a second meetup",
        },
    ];

    return (
        <>
            <MainNavigation />
            <MeetupList meetups={DUMMY_MEETUPS} />
        </>
    );
}
