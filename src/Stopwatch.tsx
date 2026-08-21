import {useEffect, useRef, useState} from "react";

function Stopwatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(0);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if(isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10)
        }

        return () => clearInterval(intervalIdRef.current);

    }, [isRunning]);

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime
    }

    function stop(){
        setIsRunning(false);
    }

    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime(){

        let minutes = Math.floor(elapsedTime / ( 1000 * 60 ) % 60).toString();
        let seconds = Math.floor(elapsedTime / 1000 % 60 ).toString();
        let milliseconds = Math.floor((elapsedTime % 1000) / 10).toString();

        minutes = minutes.padStart(2, "0");
        seconds = seconds.padStart(2, "0");
        milliseconds = milliseconds.padStart(2, "0");

        return `${minutes}:${seconds}:${milliseconds}`;
    }

    return (
        <body className="stopwatch__body">
            <div className="stopwatch">
                <div className="display">
                    {formatTime()}
                </div>
                <div className="controls">
                    <button className="start-button" onClick={start}>
                        Start
                    </button>
                    <button className="stop-button" onClick={stop}>
                        Stop
                    </button>
                    <button className="reset-button" onClick={reset}>
                        Reset
                    </button>
                </div>
            </div>
        </body>
    )
}

export default Stopwatch;
