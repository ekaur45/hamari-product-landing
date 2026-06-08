import { getMonthDates } from "@/utils/month.util";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { Months } from "./WeekView";
import { Availability } from "@/types/teacher.types";
interface MonthViewProps {
    availibility: Availability[]
}
const Days: Record<string, number> = {
    "Sunday": 0,
    "Monday": 1,
    "Tuesday": 2,
    "Wednessday": 3,
    "Thursday": 4,
    "Friday": 5,
    "Saturday": 6
}

const IDays: Record<number, string> = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
};
export default function MonthView({ availibility }: MonthViewProps) {
    const [month, setMonth] = useState<number>(0);
    const monthDates = useMemo(() => getMonthDates(month), [month]);
    return (<>
        <div className="flex justify-between mb-3">
            <button onClick={() => setMonth(pre => pre - 1)}>
                <ArrowLeft />
            </button>
            <div className="flex flex-col">
                <button onClick={() => setMonth(0)}>
                    {monthDates[0].getDate()} - {monthDates[monthDates.length - 1].getDate()} of {Months[monthDates[0].getMonth()]} {monthDates[0].getFullYear()}
                </button>
            </div>
            <button onClick={() => setMonth(pre => pre + 1)}>
                <ArrowRight />
            </button>
        </div>
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-2">
            <div className="bg-[rgba(13,148,136,0.12)] border border-[rgba(45,212,191,0.2)] rounded-lg py-1 px-1 text-[var(--teal-l)] text-center">Mon</div>
            <div className="bg-[rgba(13,148,136,0.12)] border border-[rgba(45,212,191,0.2)] rounded-lg py-1 px-1 text-[var(--teal-l)] text-center">Tue</div>
            <div className="bg-[rgba(13,148,136,0.12)] border border-[rgba(45,212,191,0.2)] rounded-lg py-1 px-1 text-[var(--teal-l)] text-center">Wed</div>
            <div className="bg-[rgba(13,148,136,0.12)] border border-[rgba(45,212,191,0.2)] rounded-lg py-1 px-1 text-[var(--teal-l)] text-center">Thu</div>
            <div className="bg-[rgba(13,148,136,0.12)] border border-[rgba(45,212,191,0.2)] rounded-lg py-1 px-1 text-[var(--teal-l)] text-center">Fri</div>
            <div className="bg-[rgba(13,148,136,0.12)] border border-[rgba(45,212,191,0.2)] rounded-lg py-1 px-1 text-[var(--teal-l)] text-center">Sat</div>
            <div className="bg-[rgba(13,148,136,0.12)] border border-[rgba(45,212,191,0.2)] rounded-lg py-1 px-1 text-[var(--teal-l)] text-center">Sun</div>
            {Array.from({ length: monthDates[0].getDay() - 1 }).map((empty, ndx) => <div key={ndx} className="bg-[rgba(13,148,136,0.12)] border border-[rgba(45,212,191,0.2)] rounded-lg py-2 px-1 text-[0.72rem] text-[var(--teal-l)]"></div>)}
            {monthDates.map((w) => <div key={w.toDateString()} className="bg-[rgba(13,148,136,0.12)] border border-[rgba(45,212,191,0.2)] rounded-lg py-2 px-1 text-[0.72rem] text-[var(--teal-l)]">
                {availibility.find(a => Days[a.dayOfWeek] == w.getDay()) ? "" : <div className="flex align-center">Not Available</div>}
                <div className="flex flex-col gap-2">
                    {

                        availibility.map(a => Days[a.dayOfWeek] == w.getDay() ? <>
                            <div className="avail-slot transition-transform duration-200 hover:scale-[1.05] cursor-pointer">
                                {a.startTime} - {a.endTime}
                            </div>
                        </> : null)
                    }
                </div>
            </div>)}
        </div>
    </>)
}