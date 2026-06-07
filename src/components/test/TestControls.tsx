"use client"
import { useState } from "react";
import UiDatePicker from "../ui/UiDatePicker";
import UiSelect from "../ui/UiSelect";

export default function TestControls() {
    const [date,setDate] = useState<Date | null>(new Date())
    const [subject,setSubject] = useState<string |undefined>()
    return (<>
        <div className="grid cols-[1fr_2fr]">
            <UiDatePicker
                value={date}
                onChange={setDate}
                minDate={new Date(2025, 0, 1)}
                maxDate={new Date(2030, 11, 31)}
            />
             <UiSelect
                value={subject}
                onChange={setSubject}
                options={[
                    {
                        label: 'Mathematics',
                        value: 'math',
                    },
                    {
                        label: 'Physics',
                        value: 'physics',
                    },
                    {
                        label: 'Chemistry',
                        value: 'chemistry',
                    },
                    {
                        label: 'Biology',
                        value: 'biology',
                    },
                ]}
            />
        </div>
    </>);
}