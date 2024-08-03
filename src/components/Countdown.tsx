import { useState, useEffect } from "react";
import { differenceInSeconds } from 'date-fns';

export default function Countdown({endDate}: {endDate: Date}) {
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const setDifference = () => {
        const currentDate = new Date();
        const difference = differenceInSeconds(endDate, currentDate);

        setTime({
            days: Math.floor(difference / (24 * 60 * 60)),
            hours: Math.floor((difference / (60 * 60)) % 24),
            minutes: Math.floor((difference / 60) % 60),
            seconds: Math.floor(difference % 60)
        });
    }

    useEffect(() => {
      const interval = setInterval(() => {
        setDifference();
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

    return (
        <div className='mt-4'>
            <div className="flex gap-5 text-center w-full">
                <div className="grow bg-base-100 rounded-box text-secondary flex flex-col p-2">
                    <span className="countdown m-auto font-mono text-3xl sm:text-5xl">
                        <span style={{"--value": time.days} as any}></span>
                    </span>
                    dias
                </div>
                <div className="grow bg-base-100 rounded-box text-secondary flex flex-col p-2">
                    <span className="m-auto countdown font-mono text-3xl sm:text-5xl">
                        <span style={{"--value": time.hours} as any}></span>
                    </span>
                    horas
                </div>
                <div className="grow bg-base-100 rounded-box text-secondary flex flex-col p-2">
                    <span className="m-auto countdown font-mono text-3xl sm:text-5xl">
                        <span style={{"--value": time.minutes} as any}></span>
                    </span>
                    minutos
                </div>
                <div className="grow bg-base-100 rounded-box text-secondary flex flex-col p-2">
                    <span className="m-auto countdown font-mono text-3xl sm:text-5xl">
                        <span style={{ "--value" : time.seconds } as any}></span>
                    </span>
                    segundos
                </div>
            </div>
        </div>
    )
}