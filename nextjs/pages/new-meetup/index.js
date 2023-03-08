// name-domain.com/new-meetup

import NewMeetupForm from "@/components/meetups/NewMeetupform";

export default function NewMeetup() {
    function addMeetupHandler(enteredValues) {
        console.log(enteredValues);
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
