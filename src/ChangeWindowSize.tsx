import {useEffect, useState} from "react";

function ChangeWindowSize() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener('resize', handleResize )

        console.log("EVENT LISTENER ADDED");

        return () => {
            window.removeEventListener('resize', handleResize);

            console.log("EVENT LISTENER REMOVED");
        }
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    return (
        <div>
            <p>Window width: {width}</p>
            <p>Window height: {height}</p>
        </div>
    )
}

export default ChangeWindowSize;
