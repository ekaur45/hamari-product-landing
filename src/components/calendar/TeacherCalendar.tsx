import { Availability, Teacher, TeacherBooking, TeacherSubject } from "@/types/teacher.types";
import WeekView from "./WeekView";
import MonthView from "./MonthView";
import { useEffect, useState } from "react";
import UiSelectGroup from "../ui/UiSelectGroup";
import UiModal from "../ui/UiModal";
import UiSelect from "../ui/UiSelect";
import { useRouter } from "next/navigation";
type Slot = {
    availability: Availability;
    date: Date;
};
interface TeacherCalendarProps {
    teacher: Teacher;
    availability: Availability[];
    bookings: TeacherBooking[],
    subjects: TeacherSubject[]
}
export default function TeacherCalendar({ availability, bookings, subjects, teacher }: TeacherCalendarProps) {

    const router = useRouter();
    const [view, setView] = useState<string>("week");

    const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);

    const [openSubjectModal, setOpenSubjectModal] = useState<boolean>(false);

    const [selectedSubject, setSelectedSubject] = useState("");

    const handleSlotSelection = (slot: Slot) => {
        setSelectedSlot(slot);
    };

    const handleBookingSelection = () => {
        if (!selectedSlot || !selectedSubject) {
            alert("Please select a slot and subject");
            return;
        }
        const params = new URLSearchParams({
            date: selectedSlot?.date.toISOString() || "",
            subject: selectedSubject || "",
            teacherId: teacher.id || "",
            availabilityId: selectedSlot?.availability?.id || "",
            availabilityEndTime: selectedSlot?.availability?.endTime || "",
            availabilityStartTime: selectedSlot?.availability?.startTime || "",
            subjectName: teacher.teacherSubjects.find(subject => subject.subject.id === selectedSubject)?.subject.name || "",
        });
        router.push(`/checkout?${params.toString()}`);
    }

    useEffect(() => {
        setOpenSubjectModal(selectedSlot !== null);
    }, [selectedSlot]);
    return (<>
        <UiModal
            open={openSubjectModal}
            title="Select Slot"
            onClose={() => setSelectedSlot(null)}            
        >
            <>
                <UiSelect
                    value={selectedSubject}
                    className="mb-3"
                    onChange={(e) => setSelectedSubject(e)}
                    options={subjects.map(s => {
                        return {
                            label: s.subject.name,
                            value: s.subject.id
                        }
                    })} />
                    <button className="btn btn-glow w-full" onClick={handleBookingSelection}>
                        Proceed
                    </button>
            </>
        </UiModal>
        <UiSelectGroup
            value={view}
            onChange={setView}
            className="mb-3"
            options={[
                {
                    label: "Week",
                    value: "week"
                },
                {
                    label: "Month",
                    value: "month"
                }
            ]}
        />
        {view == "week" && <WeekView availibility={availability} onSlotSelect={handleSlotSelection} />}
        {view == "month" && <MonthView availibility={availability} />}
    </>)
}