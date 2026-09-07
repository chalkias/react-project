import { useState } from "react";
import className from "classnames";
import classNames from "classnames";

export default function Home({active}) {
    const [color, setColor] = useState("Nichts");

    const className = classNames({
        "active": active,
        "inactive": !active
    });

    return (
        <>
            <h1>{color} wurde geklickt</h1>
            <button className={className} onClick={() => setColor("Blau")}>Blau</button><br/>
            <button className={className} onClick={() => setColor("Rot")}>Rot</button>
        </>
    );
}