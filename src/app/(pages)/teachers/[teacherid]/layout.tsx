import TeacherDetails from "@/components/teacher/teacher-detail";
import UiLink from "@/components/ui/Abc";
import DatePicker from "@/components/ui/UiDatePicker";
import { ApiResponse } from "@/services/api.service";
import TeacherService from "@/services/teacher.service";
import { Teacher } from "@/types/teacher.types";
import { headers } from "next/headers";
import Link from "next/link";

const teacherService: TeacherService = new TeacherService();

interface Props {
    children: React.ReactNode
    searchParams: Promise<{ [key: string]: string | undefined }>;
    params: Promise<{ teacherid: string }>;
}
export default async function TeacherLayout({
    children,
    searchParams,
    params,
}: Props) {
    const routeParams = await params;
    const teacherId = routeParams.teacherid;
    const teacherResponse: ApiResponse<Teacher> =
        await teacherService.getTeacherById(teacherId);
    const teacher = teacherResponse.data;
    return (<>
        <section>
            <div className="inner">
                <div className="breadcrumb">
                    <span>Home</span><span className="sep">/</span><Link href={`/teachers`}>Teachers</Link><span className="sep">/</span>
                    <span className="text-[var(--text)]" id="td-breadcrumb">{teacher.user.firstName} {teacher.user.lastName}</span></div>
                <TeacherDetails teacher={teacher} />

                <div className="td-grid">
                    <div>
                        {children}
                    </div>
                    
                </div>
            </div>
        </section>
    </>)
}