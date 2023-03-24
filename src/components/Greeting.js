import { useState } from "react";
import Output from "./Output";

export default function Greeting() {
    const [changedText, setChangedText] = useState(false);

    const changeTextHandler = () => {
        setChangedText(true);
    };

    return (
        <div>
            <h1>Helloo</h1>
            {/* <p>See you</p> check error */}
            {!changedText && <Output>See you</Output>}
            {changedText && <Output>Change!!</Output>}
            <button onClick={changeTextHandler}>Change Text</button>
        </div>
    );
}
