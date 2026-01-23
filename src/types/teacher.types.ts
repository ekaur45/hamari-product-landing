import { User } from "./user.types";

export interface Teacher {
    id: string;
    tagline: string;
    yearsOfExperience: string;
    preferredSubject: string;
    introduction:string;
    introductionVideoUrl:string;
    introductionVideoThumbnailUrl:string;
    introductionVideoTitle:string;
    introductionVideoDescription:string;
    specialization:string;
    hourlyRate:number;
    monthlyRate:number;
    user:User;
    teacherSubjects:TeacherSubject[];
    availabilities:Availability[];
    teacherBookings:TeacherBooking[];
}
export interface Availability {
    id: string;
    dayOfWeek: string;
    startTime: string;
    endTime: string;
}
export interface TeacherSubject {
    id:string;
    subject:Subject;
    hourlyRate:number;
    monthlyRate:number;
}
export interface Subject {
    id:string;
    name:string;
}


export interface AvailabilitySlot {
    availability:Availability | null | undefined;
    slot:Date;
}
export enum BookingStatus {
    PENDING = 'pending',
    CONFIRMED = 'confirmed',
    CANCELLED = 'cancelled',
    COMPLETED = 'completed',
  }
export interface TeacherBooking {
    id: string;
    teacherId: string;
    teacherSubjectId: string;
    teacherSubject: TeacherSubject;
    availabilityId: string;
    availability: Availability;
    status: BookingStatus;
    bookingDate: Date;
    totalAmount: number | null;
    paidAmount: number | null;
    dueAmount: number | null;
    discountAmount: number | null;
    createdAt: Date;
    updatedAt: Date;
    isDeleted: boolean;
}