"use client";
import {
    AvailabilitySlot,
    Teacher,
    TeacherSubject,
} from "@/types/teacher.types";
import { getImageUrl } from "@/utils/misc.util";
import React, { useState } from "react";
import Modal from "@/components/ui/Modal";
import UISelect from "@/components/ui/Select";
import UiCalendar from "@/components/ui/UiCalendar";
import { useRouter } from "next/navigation";

interface TeacherIntroCardProps {
    teacher: Teacher;
}

export default function TeacherIntroCard({ teacher }: TeacherIntroCardProps) {
    const router = useRouter();
    const [showBookingModal, setShowBookingModal] = useState<boolean>(false);
    const [selectedSlot, setSelectedSlot] = useState<AvailabilitySlot | null>(null);
    const [selectedSubject, setSelectedSubject] = useState<
        string | null | undefined
    >(null);
    const handleOnProceed = () => {
        if (!selectedSlot || !selectedSubject) {
            alert("Please select a slot and subject");
            return;
        }
        const params = new URLSearchParams({
            date: selectedSlot?.slot.toISOString() || "",
            subject: selectedSubject || "",
            teacherId: teacher.id || "",
            availabilityId: selectedSlot?.availability?.id || "",
            availabilityEndTime: selectedSlot?.availability?.endTime || "",
            availabilityStartTime: selectedSlot?.availability?.startTime || "",
            subjectName: teacher.teacherSubjects.find(subject => subject.subject.id === selectedSubject)?.subject.name || "",
        });
        router.push(`/checkout?${params.toString()}`);
    }
    return (
        <>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 gap-8 transition-all hover:shadow-lg group h-fit sticky top-25 hidden md:block">
            <Modal
                isOpen={showBookingModal}
                onClose={() => setShowBookingModal(false)}
                title={<><em className="fas fa-calendar-alt text-primary mt-1"></em> <div>
                    <span className="text-gray-500 font-bold">Book session with</span> <br />
                    <span className="text-gray-900 font-bold">{teacher.user.firstName} {teacher.user.lastName}</span>
                    <span className="text-gray-500 font-medium ms-2">-</span>
                    <span className="text-gray-500 text-xs font-medium ms-2">{teacher.tagline}</span>
                </div>

                </>}
                width="45vw"
            >
                <div>
                    <UISelect
                        options={teacher.teacherSubjects}
                        value={selectedSubject}
                        onChange={(e) => setSelectedSubject(e.value)}
                        optionValue="subject.id"
                        optionLabel="subject.name"
                        placeholder="Select Subject"
                        itemTemplate={(option: TeacherSubject) => (
                            <div className="flex flex-row gap-2 items-center">
                                <p className="font-bold">{option.subject.name}</p>
                                <p className="text-sm font-medium">{option.hourlyRate}</p>
                            </div>
                        )}
                        valueTemplate={(option: TeacherSubject) => (
                            option && option.subject ? (<div className="flex flex-row gap-2 items-center">
                                <p className="text-gray-600 font-bold">{option.subject.name}</p>
                                <p className="text-gray-600 text-sm font-medium">{option.hourlyRate}</p>
                            </div>

                            ) : (<div className="flex flex-row gap-2">
                                <p className="text-gray-600">Select a subject</p>
                            </div>
                            )


                        )}
                        className="mb-4"
                    />
                    <UiCalendar availability={teacher.availabilities}
                        className="mb-4"
                        selectedAvailability={selectedSlot}
                        teacherBookings={teacher.teacherBookings}
                        onSlotClick={(slot: AvailabilitySlot) => setSelectedSlot(slot)}

                    />
                    <div className="flex items-center justify-center">
                        <button className="flex items-center justify-center gap-2 px-8 py-2 bg-primary border-2 border-gray-100 text-white font-bold rounded-xl hover:bg-gray-50 hover:text-primary hover:border-primary hover:shadow-md transition-all"
                            onClick={handleOnProceed}
                        >
                            <em className="fas fa-arrow-right"></em>
                            Proceed
                        </button>
                    </div>
                </div>
            </Modal>
            <div className="flex flex-col items-center xl:items-start gap-4">
                <div className="relative h-full/2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={getImageUrl(teacher.introductionVideoThumbnailUrl)}
                        alt={teacher.introductionVideoTitle}
                        className="w-full h-full/3 object-cover rounded-xl hover:opacity-70 transition-transform duration-500 ease-in-out                    
                    cursor-pointer aspect-video rounded-b-none
                    "
                    />
                    {/* show play button in center when card hover */}
                    <button
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100
                    cursor-pointer w-16 h-16 flex justify-center items-center hover:scale-110 hover:opacity-70 hover:bg-black/70 transition-transform duration-500 ease-in-out
                    "
                    >
                        <em className="fas fa-play text-2xl"></em>
                    </button>
                </div>
                <div className="flex flex-col items-center xl:items-start gap-4 p-6 w-full">
                    <button
                        className="w-full flex items-center justify-center gap-2 px-8 py-2 bg-primary border-2 border-gray-100 text-white font-bold rounded-xl hover:bg-gray-50 hover:text-primary hover:border-primary hover:shadow-md transition-all"
                        onClick={() => setShowBookingModal(true)}
                    >
                        <em className="fas fa-calendar-alt"></em>
                        Book Teacher
                    </button>
                    <button
                        className="w-full flex items-center justify-center gap-2 px-8 py-2 bg-white border-2 border-gray-100 text-gray-900 font-bold rounded-xl hover:bg-gray-50 hover:text-gray-900 hover:border-gray-200 hover:shadow-md transition-all"
                        onClick={() => setShowBookingModal(true)}
                    >
                        <em className="fas fa-clock"></em>
                        View Schedule
                    </button>
                </div>
            </div>
        </div>
        <div className="md:hidden">
            {/* Sticky button to book now */}
            <div className="fixed bottom-0 left-0 right-0 p-4">
                <button
                    className="w-full flex items-center justify-center gap-2 px-8 py-2 bg-primary border-2 border-gray-100 text-white font-bold rounded-xl hover:bg-gray-50 hover:text-primary hover:border-primary hover:shadow-md transition-all"
                    onClick={() => setShowBookingModal(true)}
                >
                    <em className="fas fa-calendar-alt"></em>
                    Book Now
                </button>
            </div>
        </div>
        </>
    );
}
