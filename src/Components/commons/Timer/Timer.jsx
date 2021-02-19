import React, {useEffect, useState} from 'react';


const Timer = () => {

    const timerComponents = [];
    const calculateTimeLeft = () => {

        let year = new Date().getFullYear();
        let difference = +new Date(`10/01/${year}`) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                // дні: Math.floor(difference / (1000 * 60 * 60 * 24)),
                години: Math.floor((difference / (1000 * 60 * 60)) % 24),
                хвилини: Math.floor((difference / 1000 / 60) % 60),
                секунди: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
            let cleanupFunction = false;
            try {
                if (!cleanupFunction) {
                    setTimeout(() => {
                    setTimeLeft(calculateTimeLeft());
                    }, 1000);
                }
            } catch (e) {
                console.error(e);
            }
            return (() => {
                    cleanupFunction = true;
                    setTimeout(() => {
                        setTimeLeft(calculateTimeLeft());
                    }, 1000);
                }
            );
    });

    Object.keys(timeLeft).forEach((interval, i) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span key={i}>
      {timeLeft[interval]} {interval}{" "}
    </span>
        );
    });

    return (
        <>
            <span style={{color: '#EE7178'}}>{timerComponents.length ? timerComponents : <span>Time's up!</span>}</span>
        </>
    )
};

export default Timer;
