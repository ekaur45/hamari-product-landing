import { Availability } from "@/types/teacher.types";
import { getWeekDates } from "@/utils/week.utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
type SlotSelectParams = {
    availability: Availability;
    date: Date;
  };
interface WeekViewProps {
    availibility: Availability[],
    onSlotSelect:(params:SlotSelectParams)=>void
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
export const Months: Record<number, string> = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
};
export default function WeekView({ availibility,onSlotSelect }: WeekViewProps) {
    const [week, setWeek] = useState<number>(0);
    const weekDates = useMemo(() => getWeekDates(week), [week]);
    return (<>
        <div className="flex justify-between mb-3">
            <button onClick={() => setWeek(pre => pre - 1)}>
                <ArrowLeft />
            </button>
            <div className="flex flex-col">
                <button onClick={() => setWeek(0)}>
                    {weekDates[0].getDate()} - {weekDates[6].getDate()} of {Months[weekDates[0].getMonth()]} {weekDates[0].getFullYear()}
                </button>
            </div>
            <button onClick={() => setWeek(pre => pre + 1)}>
                <ArrowRight />
            </button>
        </div>
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-2">
            <div className="bg-[rgba(13,148,136,0.12)] border border-[rgba(45,212,191,0.2)] rounded-lg py-1 px-1 text-[var(--teal-l)] text-center">Mon {weekDates[0].getDate()}</div>
            <div className="bg-[rgba(13,148,136,0.12)] border border-[rgba(45,212,191,0.2)] rounded-lg py-1 px-1 text-[var(--teal-l)] text-center">Tue {weekDates[1].getDate()}</div>
            <div className="bg-[rgba(13,148,136,0.12)] border border-[rgba(45,212,191,0.2)] rounded-lg py-1 px-1 text-[var(--teal-l)] text-center">Wed {weekDates[2].getDate()}</div>
            <div className="bg-[rgba(13,148,136,0.12)] border border-[rgba(45,212,191,0.2)] rounded-lg py-1 px-1 text-[var(--teal-l)] text-center">Thu {weekDates[3].getDate()}</div>
            <div className="bg-[rgba(13,148,136,0.12)] border border-[rgba(45,212,191,0.2)] rounded-lg py-1 px-1 text-[var(--teal-l)] text-center">Fri {weekDates[4].getDate()}</div>
            <div className="bg-[rgba(13,148,136,0.12)] border border-[rgba(45,212,191,0.2)] rounded-lg py-1 px-1 text-[var(--teal-l)] text-center">Sat {weekDates[5].getDate()}</div>
            <div className="bg-[rgba(13,148,136,0.12)] border border-[rgba(45,212,191,0.2)] rounded-lg py-1 px-1 text-[var(--teal-l)] text-center">Sun {weekDates[6].getDate()}</div>
            {getWeekDates(week).map((w) => <div key={w.toDateString()} className="bg-[rgba(13,148,136,0.12)] border border-[rgba(45,212,191,0.2)] rounded-lg py-2 px-1 text-[0.72rem] text-[var(--teal-l)]">
                <div className="flex flex-col gap-2">
                    {

                        availibility.map(a => Days[a.dayOfWeek] == w.getDay() ? <>
                            <div className="border rounded-md p-1 transition-transform duration-200 hover:scale-[1.05] cursor-pointer" onClick={()=>onSlotSelect({availability:a,date:w})}>
                                {a.startTime} - {a.endTime}
                            </div>
                        </> : null)
                    }
                </div>
            </div>)}
        </div>
    </>);
}