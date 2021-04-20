import { useEffect, useState } from "react"

function ClockF() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => tick(), 1000);
    }, [date]);

    function tick() {
        setDate(new Date());
    }

    return (
        <div>
            {date.toLocaleTimeString()}
        </div>
    );
}

export default ClockF;