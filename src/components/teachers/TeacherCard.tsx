"use client";

import Link from "next/link"
import { Teacher, TeacherSubject } from "@/types/teacher.types";
import { exchangeRate, getImageUrl, getVideoUrl } from "@/utils/misc.util";
import { useEffect, useRef, useState } from "react";

interface TeacherCardProps {
    teacher: Teacher;
}

export default function TeacherCard({ teacher }: TeacherCardProps) {
    const profileImage = teacher.user?.details?.profileImage
        ? process.env.NEXT_PUBLIC_ASSET_URL +
        teacher.user?.details?.profileImage
        : "/assets/img/teacher/2/2.jpg";

    const fullName = `${teacher?.user?.firstName} ${teacher?.user?.lastName}`;
    const rating = 4.9;
    const reviews = 42;
    const [readMore, setReadMore] = useState(false);
    const [isClamped, setIsClamped] = useState(false);
    const[isPlayingVideo, setIsPlayingVideo] = useState(false);
    const bioRef = useRef<HTMLParagraphElement>(null);
    useEffect(() => {
        if (bioRef.current) {
            setIsClamped(bioRef.current.scrollHeight > bioRef.current.clientHeight);
        }
    }, [bioRef]);
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 group mb-4"
            onMouseLeave={() => {
                setIsPlayingVideo(false);
            }}
            >
                {/* LEFT / MAIN CARD */}
                <Link href={`/teachers/${teacher?.id}?name=${fullName}&bio=${teacher.tagline}`} className="mb-2">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 grid grid-cols-1 md:grid-cols-[1fr_4fr_2fr] gap-8 transition-all hover:shadow-lg group">
                        {/* Left: Avatar */}
                        <div className="flex md:flex-col md:items-center xl:items-start gap-4">
                            <div className="relative">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img

                                    src={profileImage}
                                    alt={fullName}
                                    className="w-24 h-24 xl:w-48 xl:h-48 object-cover rounded-2xl"
                                />
                                <div
                                    className="absolute bottom-3 right-3 w-5 h-5 bg-green-500 border-4 border-white rounded-full"
                                    title="Online now"
                                />
                            </div>
                            <div className="flex flex-col md:hidden">
                                <span className="text-lg font-black text-gray-900">
                                    {fullName}
                                </span>
                                <span className="text-sm text-gray-500">
                                    {teacher.preferredSubject || "English Tutor"}
                                </span>
                                <span className="text-sm text-gray-500">
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
                                            {fullName}
                                        </span>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-blue-100">
                                                Professional
                                            </span>

                                            {rating >= 4.8 && (
                                                <span className="bg-pink-50 text-pink-600 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-pink-100">
                                                    Super Tutor
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 font-medium md:mb-4">
                                        <div className="hidden md:flex items-center gap-1.5">
                                            <i className="fa-solid fa-graduation-cap text-gray-400" />
                                            <span>
                                                {teacher.preferredSubject || "English Tutor"}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <i className="fa-solid fa-comment-dots text-gray-400" />
                                            <span>
                                                Teaches:{" "}
                                                { teacher.teacherSubjects.length > 0 ? teacher.teacherSubjects.slice(0, 3).map((subject: TeacherSubject) => subject.subject.name).join(', ') : "No subjects found"}
                                                { teacher.teacherSubjects.length > 3 && <span className="text-gray-400 text-sm font-medium"> and <span className="text-gray-900 font-bold">
                                                    {teacher.teacherSubjects.length - 3} more</span></span>}
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
                                <p 
                                ref={bioRef}
                                className={`${readMore ? 'line-clamp-none' : 'line-clamp-2'}`}>
                                    {teacher.introduction ||
                                        "Patient and experienced tutor dedicated to helping you achieve your language goals."}
                                </p>
                                { !readMore && isClamped && <span
                                    className="inline-block mt-1 text-blue-600 font-bold hover:underline "
                                    onClick={e=>{
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setReadMore(true);
                                    }}
                                >
                                    Read more
                                </span>}
                                {readMore && isClamped && <span
                                    className="inline-block mt-1 text-blue-600 font-bold hover:underline"
                                    onClick={e=>{
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setReadMore(false);
                                    }}
                                >
                                    Read less
                                </span>}
                            </div>

                            {/* Actions */}

                            {/* Mobile price */}
                            <div className="hidden md:hidden flex items-start md:items-center justify-between pt-4 border-t border-gray-100 mt-6">
                                <div>
                                    <div className="text-xl font-black text-gray-900">
                                        {exchangeRate(teacher.hourlyRate || 50)}
                                    </div>
                                    <div className="text-[10px] text-gray-400 font-bold uppercase">
                                        50-min lesson
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 text-yellow-500 font-black">
                                    <i className="fa-solid fa-star" />
                                    <span>{rating}</span>
                                </div>
                            </div>
                        </div>
                        {/* Action Buttons */}
                        <div className="flex-1 flex flex-col justify-between min-w-0">
                            {/* Desktop price */}
                            <div className="justify-between hidden md:flex">
                                <div className="hidden md:flex flex-col items-start shrink-0">
                                    <div className="text-lg font-black text-gray-500">
                                        <span className="text-gray-900 text-lg font-bold">{exchangeRate(teacher.hourlyRate || 50)}</span>
                                    </div>
                                    <div className="text-xs text-gray-400 font-bold uppercase tracking-tighter">
                                        Starting from
                                    </div>
                                </div>
                                <button className="text-gray-400 hover:text-gray-900 transition-all hidden md:block">
                                    <i className="fa-solid fa-heart" />
                                </button>
                            </div>
                            <div className="flex flex-row items-center justify-between gap-6 mb-6 py-3 px-4 bg-gray-50 rounded-xl">
                                <div className="flex flex-col items-center gap-1.5 md:hidden">
                                    <div className="flex items-center gap-1.5">
                                        <i className="fa-solid fa-dollar-sign text-gray-400" />
                                        <span className="font-black text-gray-900">
                                        { exchangeRate(teacher.hourlyRate || 50) }
                                        </span>
                                    </div>
                                    <span className="text-gray-400 text-sm font-medium">
                                        USD
                                    </span>
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
                                            {teacher.totalStudents}
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
                                            {teacher.teacherBookings.length}
                                        </span>
                                    </div>
                                    <span className="text-gray-400 text-sm font-medium">
                                        lessons
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-row md:flex-col gap-2 md:gap-3">
                                <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border-2 border-gray-100 text-gray-900 font-bold rounded-lg hover:bg-gray-50 hover:shadow-md transition-all sm:w-auto md:hidden">
                                    <em className="fa-solid fa-clock"></em>
                                </button>
                                <button
                                    className="theme-btn theme-btn-full"
                                    onClick={() => {
                                        console.log("Book trial lesson");
                                    }}
                                >
                                    Book trial lesson
                                </button>

                                <button className="hidden md:flex items-center justify-center gap-2 px-8 py-2 bg-white border-2 border-gray-100 text-gray-900 font-bold rounded-xl hover:bg-gray-50 hover:shadow-md transition-all sm:w-auto"
                                    onClick={e => {
                                        e.preventDefault();
                                    }}
                                >
                                    <i className="fa-light fa-comment" />
                                    Send message
                                </button>
                            </div>
                        </div>
                    </div>

                </Link>
                {/* RIGHT / SIDEBAR */}
                <div
                    className="hidden md:flex opacity-0 md:group-hover:opacity-100 flex-col gap-3 transition-all duration-300"
                >
                    {isPlayingVideo?(<>
                    <div className="relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden group/video cursor-pointer">
                    <iframe src={getVideoUrl(teacher.introductionVideoUrl)} width="100%" height="100%"></iframe>                    
                        {/* <video src={getImageUrl(teacher.introductionVideoUrl)} className="w-full h-full object-cover" autoPlay muted loop /> */}
                    </div>
                    </>):(<div className="relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden group/video cursor-pointer">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={getImageUrl(teacher?.introductionVideoThumbnailUrl)}
                            alt="Video preview"
                            className="w-full h-full object-cover opacity-60 group-hover/video:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center group-hover/video:scale-110 transition-transform"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setIsPlayingVideo(true);
                            }}
                            >
                                <i className="fa-solid fa-play text-white text-xl ml-1" />
                            </div>
                        </div>
                    </div>)}

                    <button className="flex items-center justify-center gap-2 w-full py-2.5 bg-gray-100 text-gray-700 font-bold rounded-xl text-sm hover:bg-gray-200 transition-colors">
                        View full schedule
                    </button>

                    <span
                        className="flex items-center justify-center w-full py-2.5 bg-white border border-gray-200 text-gray-600 font-bold rounded-xl text-sm hover:border-gray-900 hover:text-gray-900 transition-all"
                    >
                        See {teacher.user.firstName}&apos;s profile
                    </span>
                </div>
            </div>
        </>
    );
}
