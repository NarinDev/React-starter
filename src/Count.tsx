import {useEffect, useState} from "react";

function Count() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color]);

    const addCount = () => setCount(c => c + 1);
    const subtractCount = () => setCount(c => c - 1);

    const changeColor = () => setColor(c => c === "green" ? "red" : "green");

    return (
        <div>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>
            <button onClick={changeColor}>Change color</button>
        </div>
    )
}

export default Count;
