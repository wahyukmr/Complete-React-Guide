import { useRouter } from "next/router";

export default function DetailMeetu() {
    const router = useRouter();

    const meetupId = router.query.meetupId;

    return <h1>{meetupId}</h1>;
}
