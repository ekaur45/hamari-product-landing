"use client";
import { Teacher } from "@/types/teacher.types";
import { getImageUrl } from "@/utils/misc.util";

interface CheckoutDetailsProps {
    teacher: Teacher;
    date: string;
    subject: string;
    subjectName: string;
    availabilityId: string;
    availabilityEndTime: string;
    availabilityStartTime: string;
}

function calculateDuration(startTime: string, endTime: string): number {
    const [startHours, startMinutes] = startTime.split(':').map(Number);
    const [endHours, endMinutes] = endTime.split(':').map(Number);
    
    const startTotalMinutes = startHours * 60 + startMinutes;
    const endTotalMinutes = endHours * 60 + endMinutes;
    
    const durationMinutes = endTotalMinutes - startTotalMinutes;
    return durationMinutes / 60; // Return in hours
}

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

export default function CheckoutDetails({ 
    teacher, 
    date, 
    subjectName, 
    availabilityEndTime, 
    availabilityStartTime 
}: CheckoutDetailsProps) {
    const duration = calculateDuration(availabilityStartTime, availabilityEndTime);
    const formattedDate = formatDate(date);
    const startTimeFormatted = availabilityStartTime.slice(0, 5);
    const endTimeFormatted = availabilityEndTime.slice(0, 5);

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Booking Details</h1>
            
            <div className="flex flex-col gap-6">
                {/* Teacher Card */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <div className="flex items-center gap-4">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                            {teacher.user.details.profileImage ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    src={getImageUrl(teacher.user.details.profileImage)}
                                    alt={`${teacher.user.firstName} ${teacher.user.lastName}`}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary text-2xl font-bold">
                                    {teacher.user.firstName?.[0]}{teacher.user.lastName?.[0]}
                                </div>
                            )}
                        </div>
                        <div className="flex-1">
                            <h2 className="text-xl font-bold text-gray-900 mb-1">
                                {teacher.user.firstName} {teacher.user.lastName}
                            </h2>
                            {teacher.tagline && (
                                <p className="text-sm text-gray-600 mb-2">{teacher.tagline}</p>
                            )}
                            {teacher.yearsOfExperience && (
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <em className="fas fa-chalkboard-teacher text-primary"></em>
                                    <span>{teacher.yearsOfExperience} years of experience</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Session Details */}
                <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
                        <em className="fas fa-calendar-alt text-primary text-xl mt-1 flex-shrink-0"></em>
                        <div className="flex-1">
                            <h3 className="text-sm font-semibold text-gray-500 mb-1">Session Date</h3>
                            <p className="text-lg font-bold text-gray-900">{formattedDate}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
                        <em className="fas fa-clock text-primary text-xl mt-1 flex-shrink-0"></em>
                        <div className="flex-1">
                            <h3 className="text-sm font-semibold text-gray-500 mb-1">Time Slot</h3>
                            <p className="text-lg font-bold text-gray-900">
                                {startTimeFormatted} - {endTimeFormatted}
                            </p>
                            <p className="text-sm text-gray-600 mt-1">
                                Duration: {duration} {duration === 1 ? 'hour' : 'hours'}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
                        <em className="fas fa-book text-primary text-xl mt-1 flex-shrink-0"></em>
                        <div className="flex-1">
                            <h3 className="text-sm font-semibold text-gray-500 mb-1">Subject</h3>
                            <p className="text-lg font-bold text-gray-900">{subjectName}</p>
                        </div>
                    </div>
                </div>

                {/* Additional Info */}
                {teacher.specialization && (
                    <div className="pt-4 border-t border-gray-200">
                        <h3 className="text-sm font-semibold text-gray-500 mb-2">Specialization</h3>
                        <p className="text-gray-700">{teacher.specialization}</p>
                    </div>
                )}
            </div>
        </div>
    );
}