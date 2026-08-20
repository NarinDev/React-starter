import {useEffect, useState} from "react";

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1e3);

        return () => clearInterval(intervalId);
    }, []);

    function formatTime(): string {
        let hours = time.getHours();
        const [minutes, seconds] = [ time.getMinutes(), time.getSeconds()];
        const meridiem = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;

        return `${ padZero(hours) }:${ padZero(minutes) }:${ padZero(seconds) } ${meridiem}`;
    }

    function padZero(num: number) {
        return (num < 10 ? '0' : "") + num;
    }

    return (
        <body className="digital-clock__body">
            <div className="clock-container">
                <div className="clock">
                    <span>{formatTime()}</span>
                </div>
            </div>
        </body>
)
};

export default DigitalClock;
