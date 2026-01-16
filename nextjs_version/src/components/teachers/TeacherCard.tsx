"use client";

import Link from "next/link";

interface Teacher {
    id: string;
    user: {
        firstName: string;
        lastName: string;
        details: {
            profileImage: string;
        };
    };
    rating: number;
    reviews_count: number;
    lessons_count: number;
    active_students: number;
    hourlyRate: number;
    role: string;
    tagline: string;
    bio: string;
}

interface TeacherCardProps {
    teacher: Teacher;
}

export default function TeacherCard({ teacher }: TeacherCardProps) {
    const profileImage = teacher.user?.details?.profileImage
        ? process.env.NEXT_PUBLIC_ASSET_URL +
          teacher.user?.details?.profileImage
        : "/assets/img/teacher/2/2.jpg";

    const fullName = `${teacher?.user?.firstName} ${teacher?.user?.lastName}`;
    const rating = teacher.rating || 4.9;
    const reviews = teacher.reviews_count || 42;
    const lessons = teacher.lessons_count || 150;
    const activeStudents = teacher.active_students || 12;
    const hourlyRate = teacher.hourlyRate || 15;

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 group">
                {/* LEFT / MAIN CARD */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 grid grid-cols-1 md:grid-cols-[1fr_4fr_2fr] gap-8 transition-all hover:shadow-lg group">
                    {/* Left: Avatar */}
                    <div className="flex flex-col items-center xl:items-start gap-4">
                        <div className="relative">
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
                    </div>

                    {/* Middle: Content */}
                    <div className="flex-1 min-w-0">
                        <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-4">
                            <div className="flex-1">
                                <div className="flex items-center flex-wrap gap-2 mb-2">
                                    <span className="text-2xl font-black text-gray-900 ">
                                        <Link
                                            href={`/teachers/${teacher?.id}?name=&bio=`}
                                            className="hover:text-blue-600 transition-colors"
                                        >
                                            {fullName}
                                        </Link>
                                    </span>

                                    <span className="bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-blue-100">
                                        Professional
                                    </span>

                                    {rating >= 4.8 && (
                                        <span className="bg-pink-50 text-pink-600 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-pink-100">
                                            Super Tutor
                                        </span>
                                    )}
                                </div>

                                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 font-medium mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <i className="fa-solid fa-graduation-cap text-gray-400" />
                                        <span>
                                            {teacher.role || "English Tutor"}
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

                            {/* Desktop price */}
                            <div className="hidden md:flex flex-col items-end shrink-0">
                                <div className="text-2xl font-black text-gray-900">
                                    $
                                </div>
                                <div className="text-xs text-gray-400 font-bold uppercase tracking-tighter">
                                    50-min lesson
                                </div>
                            </div>
                        </div>

                        {/* Metrics */}

                        {/* Bio */}
                        <div className="text-gray-600 text-sm leading-relaxed">
                            <p className="font-bold text-gray-900 mb-1 line-clamp-1">
                                {teacher.tagline}
                            </p>
                            <p className="line-clamp-2">
                                {teacher.bio ||
                                    "Patient and experienced tutor dedicated to helping you achieve your language goals."}
                            </p>
                            <Link
                                href={`/teachers/`}
                                className="inline-block mt-1 text-blue-600 font-bold hover:underline"
                            >
                                Read more
                            </Link>
                        </div>

                        {/* Actions */}

                        {/* Mobile price */}
                        <div className="md:hidden flex items-center justify-between pt-4 border-t border-gray-100 mt-6">
                            <div>
                                <div className="text-xl font-black text-gray-900">
                                    $
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
                    <div className="flex-1 flex flex-col justify-end min-w-0">
                        <div className="flex flex-col md:flex-row items-center gap-6 mb-6 py-3 px-4 bg-gray-50 rounded-xl">
                            <div className="flex md:flex-col flex-row items-center gap-1.5">
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

                            <div className="flex md:flex-col flex-row items-center gap-1.5">
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

                            <div className="flex md:flex-col flex-row items-center gap-1.5">
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
                        <div className="flex flex-row md:flex-col gap-3">
                            <Link
                                href="#"
                                className="theme-btn py-3 px-8 text-center sm:w-auto font-black shadow-lg shadow-blue-100"
                            >
                                Book trial lesson
                            </Link>

                            <button className="flex items-center justify-center gap-2 px-8 py-2 bg-white border-2 border-gray-100 text-gray-900 font-bold rounded-xl hover:bg-gray-50 hover:shadow-md transition-all sm:w-auto">
                                <i className="fa-light fa-comment" />
                                Send message
                            </button>
                        </div>
                    </div>
                </div>

                {/* RIGHT / SIDEBAR */}
                <div
                    className="hidden md:flex opacity-0 
                  md:group-hover:opacity-100 flex-col gap-3 transition-all duration-300"
                >
                    <div className="relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden group/video cursor-pointer">
                        <img
                            src={profileImage}
                            alt="Video preview"
                            className="w-full h-full object-cover opacity-60 group-hover/video:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center group-hover/video:scale-110 transition-transform">
                                <i className="fa-solid fa-play text-white text-xl ml-1" />
                            </div>
                        </div>
                    </div>

                    <button className="flex items-center justify-center gap-2 w-full py-2.5 bg-gray-100 text-gray-700 font-bold rounded-xl text-sm hover:bg-gray-200 transition-colors">
                        View full schedule
                    </button>

                    <Link
                        href={`/teachers/`}
                        className="flex items-center justify-center w-full py-2.5 bg-white border border-gray-200 text-gray-600 font-bold rounded-xl text-sm hover:border-gray-900 hover:text-gray-900 transition-all"
                    >
                        See {teacher.user.firstName}&apos;s profile
                    </Link>
                </div>
            </div>
        </>
    );
}
