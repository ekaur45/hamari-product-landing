import TeacherService from "@/services/teacher.service";
import type { Metadata } from "next";
import Link from "next/link";
import TeacherCard from "@/components/teachers/TeacherCard";
import TeacherFilters from "@/components/teachers/TeacherFilters";
import { Subject, Teacher } from "@/types/teacher.types";
import PublicService from "@/services/public.service";
import { ApiResponse } from "@/services/api.service";
import TeacherList from "@/components/teachers/TeacherList";

export const metadata: Metadata = {
    title: "Find English Tutors - Taleemiyat",
    description: "Compare the best online English tutors for your goals.",
};

const teacherService: TeacherService = new TeacherService();
const publicService: PublicService = new PublicService();
interface Props {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function TeachersPage({ searchParams }: Props) {
    const params = await searchParams;
    const search = (params.search as string) || "";
    const page = Number(params.page) || 1;

    const teachersData = await teacherService.getTeachers(new URLSearchParams(params as Record<string, string>), page, 10);
    const subjectsData: ApiResponse<Subject[]> = await publicService.getSubjects();
    return (
        <div className="bg-[#FBFCFD] min-h-screen">
            <TeacherList teachersData={teachersData} subjectsData={subjectsData} />
        </div>
    );
}
