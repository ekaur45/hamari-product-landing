import TeacherService from "@/services/teacher.service";
import type { Metadata } from "next";
import Link from "next/link";
import TeacherCard from "@/components/teachers/TeacherCard";
import TeacherFilters from "@/components/teachers/TeacherFilters";

export const metadata: Metadata = {
    title: "Find English Tutors - Taleemiyat",
    description: "Compare the best online English tutors for your goals.",
};

const teacherService: TeacherService = new TeacherService();

interface Props {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function TeachersPage({ searchParams }: Props) {
    const params = await searchParams;
    const search = (params.search as string) || "";
    const page = Number(params.page) || 1;

    const teachersData = await teacherService.getTeachers(search, page, 10);

    return (
        <div className="bg-[#FBFCFD] min-h-screen">
            {/* Horizontal Preply-style Header Filters */}
            <TeacherFilters />

            <div className="container py-10">
                <div className="row">
                    <div className="col-xl-10">
                        {/* Results Header */}
                        <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center mb-8 gap-4 px-2">
                            <div className="flex flex-col gap-1">
                                <h1 className="text-3xl font-black text-gray-900 font-outfit">
                                    {teachersData.pagination?.total || 0} English teachers available
                                </h1>
                                <p className="text-gray-500 font-medium">Find your perfect match and book a trial lesson</p>
                            </div>

                            <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-sm shrink-0">
                                <span className="text-xs font-black uppercase tracking-widest text-gray-400">Sort by:</span>
                                <select className="border-none bg-transparent font-black text-gray-900 focus:ring-0 cursor-pointer outline-none text-sm">
                                    <option>Our top picks</option>
                                    <option>Price: low to high</option>
                                    <option>Price: high to low</option>
                                    <option>Number of reviews</option>
                                </select>
                            </div>
                        </div>

                        {/* List of Tutors */}
                        <div className="space-y-6">
                            {teachersData.data?.filter((t: any) => t.user).map((teacher: any) => (
                                <TeacherCard key={teacher.id} teacher={teacher} />
                            ))}

                            {(!teachersData.data || teachersData.data.length === 0) && (
                                <div className="bg-white rounded-3xl p-20 text-center border-2 border-dashed border-gray-100">
                                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <i className="fa-light fa-user-magnifying-glass text-3xl text-gray-300"></i>
                                    </div>
                                    <h3 className="text-2xl font-black text-gray-900 mb-2 font-outfit">No tutors match your search</h3>
                                    <p className="text-gray-500 max-w-sm mx-auto font-medium">We couldn't find any tutors that match your current filter settings. Try relaxing your filters.</p>
                                    <button className="mt-8 theme-btn px-8">Reset all filters</button>
                                </div>
                            )}
                        </div>

                        {/* Pagination */}
                        {teachersData.pagination?.totalPages > 1 && (
                            <div className="mt-16 flex items-center justify-center gap-3">
                                <button className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center hover:border-gray-900 hover:text-gray-900 transition-all text-gray-400">
                                    <i className="fa-solid fa-chevron-left"></i>
                                </button>
                                {[...Array(Math.min(5, teachersData.pagination.totalPages))].map((_, i) => (
                                    <button
                                        key={i}
                                        className={`w-12 h-12 rounded-xl text-sm font-black transition-all`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                                <button className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center hover:border-gray-900 hover:text-gray-900 transition-all text-gray-400">
                                    <i className="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Premium CTA Section */}
            <div className="mt-20 py-20 bg-gray-900 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-full bg-pink-600/10 blur-[120px]"></div>
                <div className="container relative z-10">
                    <div className="row align-items-center">
                        <div className="col-xl-7">
                            <span className="text-blue-500 font-black uppercase tracking-[0.2em] text-sm mb-4 block">Work at Taleemiyat</span>
                            <h2 className="text-5xl font-black text-white mb-6 font-outfit leading-tight">
                                Become an online <br /><span className="text-blue-500 italic">English tutor</span> today
                            </h2>
                            <p className="text-gray-400 text-xl font-medium mb-10 max-w-xl">
                                Earn money sharing your expert knowledge with students around the world. Set your own hours and be your own boss.
                            </p>
                            <Link href={`/auth/register/Teacher`} className="theme-btn py-4 px-10 text-lg shadow-2xl shadow-blue-600/20">
                                Apply to teach
                                <i className="fa-solid fa-arrow-right ml-3"></i>
                            </Link>
                        </div>
                        <div className="col-xl-5 hidden xl:block">
                            <div className="relative">
                                <div className="absolute -inset-10 bg-gradient-to-tr from-blue-600 to-pink-600 opacity-20 blur-3xl rounded-full animate-pulse"></div>
                                <img src="/assets/img/team-bg.jpg" className="relative z-10 rounded-[40px] shadow-2xl border-4 border-gray-800" alt="Teaching" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
