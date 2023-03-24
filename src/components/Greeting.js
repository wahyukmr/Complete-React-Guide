import { useState } from "react";

export default function Greeting() {
    const [changedText, setChangedText] = useState(false);

    const changeTextHandler = () => {
        setChangedText(true);
    };

    return (
        <div>
            <h1>Helloo</h1>
            {/* <p>See you</p> check error */}
            {!changedText && <p>See you</p>}
            {changedText && <p>Change!!</p>}
            <button onClick={changeTextHandler}>Change Text</button>
        </div>
    );
}
