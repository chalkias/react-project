import { useState } from "react";
import "./Lichtschalter.css";

export default function Lichtschalter() {

    const [licht, setLicht] = useState(false);

    return (
        <div className={licht ? "licht-ein" : "licht-aus"}>
            <h1>{licht ? "Das Licht ist an" : "Das Licht ist aus"}</h1>
            <button onClick={() => setLicht(!licht)}>{licht ? "Licht ausschalten" : "Licht einschalten"}</button>
        </div>
    );
}