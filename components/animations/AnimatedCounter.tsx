'use client';
import CountUp from "react-countup";

export default function AnimatedCounter({ number, decimals, suffix }: { number: number, decimals?: number | 0, suffix?: string }) {
    return (
        <div className="h-10">
            <CountUp
                decimals={decimals ?? 0}
                decimal="."
                suffix={suffix ?? ''}
                end={number}
            />
        </div>
    );
}