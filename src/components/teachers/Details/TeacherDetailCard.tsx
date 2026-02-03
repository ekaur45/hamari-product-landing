"use client";

import Tooltip from "@/components/tooltip/Tooltip";
import { Availability, Teacher, TeacherSubject } from "@/types/teacher.types";
import { exchangeRate, getImageUrl } from "@/utils/misc.util";
import Link from "next/link";
import React from "react";

interface TeacherDetailCardProps {
    teacher: Teacher;
}

const reviewsData = [
    {
        name: "John Doe",
        subject: "English Tutor",
        rating: 4.9,
        date: "10/10/2024",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        profileImage: "/assets/img/landing-02.webp",
    },
    {
        name: "Jane Doe",
        subject: "English Tutor",
        rating: 4.8,
        date: "10/10/2024",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        profileImage: "/assets/img/landing-02.webp",
    },
    {
        name: "Jim Doe",
        subject: "English Tutor",
        rating: 4.7,
        date: "10/10/2024",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        profileImage: "/assets/img/landing-02.webp",
    },
    {
        name: "Jill Doe",
        subject: "English Tutor",
        rating: 4.6,
        date: "10/10/2024",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        profileImage: "/assets/img/landing-02.webp",
    },
    {
        name: "Jack Doe",
        subject: "English Tutor",
        rating: 4.5,
        date: "10/10/2024",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        profileImage: "/assets/img/landing-02.webp",
    },
    {
        name: "Jill Doe",
        subject: "English Tutor",
        rating: 4.4,
        date: "10/10/2024",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        profileImage: "/assets/img/landing-02.webp",
    },
    {
        name: "Jill Doe",
        subject: "English Tutor",
        rating: 4.3,
        date: "10/10/2024",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        profileImage: "/assets/img/landing-02.webp",
    },
    {
        name: "Jill Doe",
        subject: "English Tutor",
        rating: 4.2,
        date: "10/10/2024",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        profileImage: "/assets/img/landing-02.webp",
    },
];

export default function TeacherDetailCard({ teacher }: TeacherDetailCardProps) {
    const rating = 4.9;
    const reviews = 42;
    const lessons = 150;
    const activeStudents = 12;

    return (
        <div className="p-4 md:p-0">

            <header className="flex items-center gap-4 bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-4 sticky top-24 z-10">
                <Link
                    href={"/teachers"}
                    className="text-gray-500 hover:text-gray-700"
                >
                    {" "}
                    <em className="fas fa-arrow-left text-3xl md:text-xl"></em>
                </Link>
                <div className="flex flex-col md:flex-row gap-1">
                    <span className="text-gray-900 text-xl md:text-2xl font-bold">
                        {teacher.user.firstName} {teacher.user.lastName}
                    </span>{" "}
                    <span className="hidden md:block">-{" "}</span>
                    <span className="text-gray-500 text-xs md:text-base font-medium">
                        {teacher.tagline}
                    </span>
                </div>
            </header>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 md:p-6 gap-8 transition-all hover:shadow-lg group h-fit mb-4">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-4">
                    {/* Left: Avatar */}
                    <div className="flex md:flex-col items-center xl:items-start gap-4">
                        <div className="relative inline-block">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={getImageUrl(
                                    teacher?.user?.details?.profileImage
                                )}
                                alt="Profile"
                                className="block w-[6rem] h-[6rem] md:w-[9rem] md:h-[9rem] object-cover aspect-square overflow-hidden bg-gray-100"
                                style={{ borderRadius: "500px" }}
                            />
                            <div
                                className="absolute bottom-3 right-3 w-5 h-5 bg-green-500 border-4 border-white rounded-full"
                                title="Online now"
                            />
                        </div>
                        <div className="flex flex-col md:hidden">
                            <span className="text-lg font-black text-gray-900">
                                {teacher.user.firstName} {teacher.user.lastName}
                            </span>
                            <span>
                                {teacher.preferredSubject || "English Tutor"}
                            </span>
                            <span className="text-gray-500 font-medium">
                                {teacher.tagline}
                            </span>
                        </div>
                    </div>

                    {/* Middle: Content */}
                    <div className="flex-1 min-w-0">
                        <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-4">
                            <div className="flex-1">
                                <div className="hidden md:flex items-center justify-between flex-wrap gap-2 mb-2">
                                    <span className="text-2xl font-black text-gray-900 ">
                                        {teacher.user.firstName +
                                            " " +
                                            teacher.user.lastName}
                                    </span>

                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-blue-100">
                                            Professional
                                        </span>

                                        <span className="bg-pink-50 text-pink-600 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-pink-100">
                                            Super Tutor
                                        </span>
                                        {/* {teacher.rating >= 4.8 && (
                                    )} */}
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 font-medium mb-4">
                                    <div className="hidden md:flex items-center gap-1.5">
                                        <i className="fa-solid fa-graduation-cap text-gray-400" />
                                        <span>
                                            {teacher.preferredSubject ||
                                                "English Tutor"}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <i className="fa-solid fa-comment-dots text-gray-400" />
                                        <span>
                                            Speaks:{" "}
                                            <span className="text-gray-900">
                                                English (Native), Urdu
                                                (Advanced)
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Metrics */}

                        {/* Bio */}
                        <div className="text-gray-600 text-sm leading-relaxed">
                            <p className="font-bold text-gray-900 mb-1 line-clamp-1 hidden md:block">
                                {teacher.tagline}
                            </p>
                            <p className="line-clamp-2">
                                {teacher.introduction ||
                                    "Patient and experienced tutor dedicated to helping you achieve your language goals."}
                            </p>
                            <span className="inline-block mt-1 text-blue-600 font-bold hover:underline">
                                Read more
                            </span>
                        </div>

                        {/* Actions */}

                        {/* Mobile price */}
                        <div className="md:hidden flex items-center justify-between pt-4 border-t border-gray-100 mt-6">
                            <div>
                                <div className="text-xl font-black text-gray-900">
                                    {exchangeRate(teacher.hourlyRate || 0)}
                                </div>
                                <div className="text-[10px] text-gray-400 font-bold uppercase">
                                    50-min lesson
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-yellow-500 font-black">
                                <i className="fa-solid fa-star" />
                                <span>{4.9}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between bg-white rounded-2xl shadow-sm border border-gray-100 p-6 gap-8 transition-all hover:shadow-lg group h-fit mb-4">
                <div className="hidden md:block">
                    <h3 className="text-xl font-bold text-gray-900">Metrics</h3>
                    <p className="text-gray-500 text-sm">
                        Metrics are updated daily.
                    </p>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                    <div className="flex items-center gap-1.5">
                        <span className="font-black text-gray-900">
                            {exchangeRate(teacher.hourlyRate || 0)}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                    <div className="flex items-center gap-1.5">
                        <i className="fa-solid fa-star text-yellow-400" />
                        <span className="font-black text-gray-900">
                            {rating}
                        </span>
                    </div>
                    <span className="text-gray-400 text-sm font-medium">
                        ({reviews})
                    </span>
                </div>

                <div className="flex flex-col items-center gap-1.5">
                    <div className="flex items-center gap-1.5">
                        <i className="fa-solid fa-users text-blue-400" />
                        <span className="font-black text-gray-900">
                            {activeStudents}
                        </span>
                    </div>
                    <span className="text-gray-400 text-sm font-medium">
                        students
                    </span>
                </div>

                <div className="flex flex-col items-center gap-1.5">
                    <div className="flex items-center gap-1.5">
                        <i className="fa-solid fa-chalkboard-user text-purple-400" />
                        <span className="font-black text-gray-900">
                            {lessons}
                        </span>
                    </div>
                    <span className="text-gray-400 text-sm font-medium">
                        lessons
                    </span>
                </div>
            </div>
            <span className="text-xl font-bold text-gray-900">Subjects</span>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 gap-8 transition-all hover:shadow-lg group h-fit mb-4">
                <div className="flex flex-col gap-2">
                    {teacher.teacherSubjects.slice(0, 3).map((subject: TeacherSubject) => (
                        <div
                            key={subject.id}
                            className="bg-primary-50 text-primary font-bold px-2 py-2 rounded-lg border border-primary/30 flex items-center justify-between hover:shadow-md transition-all shadow-primary-500/20 cursor-pointer"
                        >
                            <span className="flex items-center gap-1">
                                <em className="fas fa-check text-primary text-lg"></em>
                                <span className="text-gray-900 text-lg font-medium">
                                    {subject.subject.name}
                                </span>
                            </span>
                            <span className="flex items-center gap-1">
                                <span className="text-gray-900 text-lg font-medium ">
                                    {exchangeRate(subject.hourlyRate || 50)}
                                </span>
                                <span className="text-gray-400 text-sm font-medium">
                                    / hour
                                </span>
                            </span>
                        </div>
                    ))}
                    {teacher.teacherSubjects.length > 3 && (
                        <div className="flex items-center justify-center">
                            <Link href={`/teachers/${teacher.id}`} className="text-blue-600 font-bold hover:underline">
                                View {teacher.teacherSubjects.length - 3} more subjects
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            <span className="text-xl font-bold text-gray-900 mb-2">
                Availability
            </span>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 transition-all hover:shadow-lg group h-fit mb-4">
                <div className="grid grid-cols-8 border-t border-l border-gray-200 mb-3">
                    {/* Header: empty top-left cell + days */}
                    <div className="border-b border-r border-gray-200 p-2 font-semibold text-gray-700"></div>
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                        (day) => (
                            <div
                                key={day}
                                className="border-b border-r border-gray-200 p-2 text-center font-semibold text-gray-700"
                            >
                                {day}
                            </div>
                        )
                    )}

                    {/* Time slots rows */}
                    {Array.from({ length: 11 }).map((_, i) => {
                        const hour = 8 + i;
                        const timeLabel = `${hour}:00`;

                        return (
                            <React.Fragment key={hour}>
                                {/* Time label column */}
                                <div className="border-b border-r border-gray-200 p-2 font-medium text-gray-600">
                                    {timeLabel}
                                </div>

                                {/* Days columns */}
                                {[
                                    "Mon",
                                    "Tue",
                                    "Wed",
                                    "Thu",
                                    "Fri",
                                    "Sat",
                                    "Sun",
                                ].map((day) => {
                                    const availability =
                                        teacher.availabilities.find(
                                            (a: Availability) =>
                                                a.dayOfWeek.startsWith(day) &&
                                                parseInt(
                                                    a.startTime.split(":")[0]
                                                ) <= hour &&
                                                parseInt(
                                                    a.endTime.split(":")[0]
                                                ) > hour
                                        );

                                    return (
                                        <div
                                            key={day + hour}
                                            className={`relative border-b border-r border-gray-200 h-12 transition-all cursor-pointer ${availability
                                                    ? "bg-primary-100"
                                                    : "bg-white"
                                                }`}
                                        >
                                            {availability && (
                                                <Tooltip
                                                    classNameTooltip="bg-white text-gray-900 p-2 w-auto min-w-60 rounded-md px-2 py-1 border border-gray-200"
                                                    content={
                                                        <div className="flex flex-col gap-1">
                                                            <span className="text-gray-900 text-md font-bold">
                                                                {
                                                                    availability.startTime
                                                                }{" "}
                                                                -{" "}
                                                                {
                                                                    availability.endTime
                                                                }
                                                            </span>

                                                            <div className="flex gap-2 flex-wrap">
                                                                {teacher.teacherSubjects.map(
                                                                    (
                                                                        subject: TeacherSubject
                                                                    ) => (
                                                                        <div
                                                                            key={
                                                                                subject.id
                                                                            }
                                                                            className="flex items-center gap-1 flex-col text-gray-900  rounded-full px-3 py-1 bg-primary/10 border border-primary/30"
                                                                        >
                                                                            <span className="text-primary text-sm font-bold">
                                                                                {
                                                                                    subject
                                                                                        .subject
                                                                                        .name
                                                                                }
                                                                            </span>
                                                                        </div>
                                                                    )
                                                                )}
                                                            </div>
                                                        </div>
                                                    }
                                                    className="absolute left-0 top-0 w-full h-full"
                                                >
                                                    <div className="w-full h-full bg-primary/50"></div>
                                                </Tooltip>
                                            )}
                                        </div>
                                    );
                                })}
                            </React.Fragment>
                        );
                    })}
                </div>
                <div className="flex flex-row items-center justify-center gap-2">
                    <button className="w-full/3 flex items-center justify-center gap-2 px-8 py-2 bg-white border-2 border-gray-300 text-gray-900 font-bold rounded-xl hover:bg-gray-50 hover:text-gray-900 hover:border-gray-200 hover:shadow-md transition-all cursor-pointer">
                        Schedule Now
                    </button>
                </div>
            </div>
            <span className="text-xl font-bold text-gray-900">
                {reviews} Reviews ({rating})
            </span>
            <div className="">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 transition-all hover:shadow-lg group h-fit mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {reviewsData.map((review) => (
                            <div key={review.name + review.date + review.rating} className="flex flex-col gap-2 bg-gray-100 rounded-lg p-4">
                                <div className="flex flex-row items-center justify-between">
                                    <div className="flex flex-row items-center justify-center gap-2">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={review.profileImage} alt={review.name} className="w-10 h-10 rounded-full" />
                                        <div className="flex flex-col">
                                            <span className="text-gray-900 text-md font-bold">
                                                John Doe
                                            </span>
                                            <span className="text-gray-400 text-sm font-medium">
                                                English Tutor
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end justify-center gap-2">
                                        <span className="text-gray-900 text-md font-bold">
                                            4.9{" "}
                                            <span className="text-gray-400 text-sm font-medium">
                                                (5)
                                            </span>
                                        </span>
                                        <span className="text-gray-400 text-sm font-medium">
                                            10/10/2024
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center justify-center gap-2">
                                    <span className="text-gray-900 text-sm font-medium">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
