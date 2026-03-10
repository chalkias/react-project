import { useState } from "react";

function Home() {
    const [color, setColor] = useState("Nichts");

    return (
        <>
            <h1>{color} wurde geklickt</h1>
            <button onClick={() => setColor("Blau")}>Blau</button><br/>
            <button onClick={() => setColor("Rot")}>Rot</button>
        </>
    );
}

export default Home;