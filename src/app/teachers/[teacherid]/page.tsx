import TeacherDetailCard from "@/components/teachers/Details/TeacherDetailCard";
import TeacherIntroCard from "@/components/teachers/Details/TeacherIntroCard";
import { ApiResponse } from "@/services/api.service";
import TeacherService from "@/services/teacher.service";
import { Teacher } from "@/types/teacher.types";
import { Metadata } from "next";

const teacherService: TeacherService = new TeacherService();
interface Props {
    searchParams: Promise<{ [key: string]: string | undefined }>;
    params: Promise<{ teacherid: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const routeParams = await params;
    const teacherId = routeParams.teacherid;
    const teacherResponse: ApiResponse<Teacher> =
        await teacherService.getTeacherById(teacherId);
    const teacher = teacherResponse.data;
    const teacherName = teacher.user.firstName + " " + teacher.user.lastName;
    const tagline = teacher.tagline;
    return {
        title: teacherName + " - " + tagline,
        description: tagline,
    };
}

export default async function TeacherDetailsPage({
    params,
}: Props) {
    const routeParams = await params;
    const teacherId = routeParams.teacherid;
    const teacherResponse: ApiResponse<Teacher> =
        await teacherService.getTeacherById(teacherId);
    const teacher = teacherResponse.data;
    return (
        <div className="w-full max-w-7xl mx-auto pt-4">
            <div className="grid grid-cols-1 md:grid-cols-[7fr_4fr] gap-8">
                <TeacherDetailCard teacher={teacher} />
                <TeacherIntroCard teacher={teacher} />
            </div>
        </div>
    );
}
