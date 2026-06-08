import TeacherListCard from "@/components/teacher/list-card";
import TeacherListFilters from "@/components/teacher/list-filter";
import { ApiResponse } from "@/services/api.service";
import PublicService from "@/services/public.service";
import TeacherService from "@/services/teacher.service";
import { Subject } from "@/types/teacher.types";
const teacherService: TeacherService = new TeacherService();
const publicService: PublicService = new PublicService();
interface Props {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}
export default async function TeachersPage({ searchParams }: Props) {
    const params = await searchParams;
    const page = Number(params.page) || 1;
    const teachersData = await teacherService.getTeachers(new URLSearchParams(params as Record<string, string>), page, 10);
    const subjectsData: ApiResponse<Subject[]> = await publicService.getSubjects();
    return (
        <>
            <section>
                <div className="inner">
                    <div className="breadcrumb">
                        <span>Home</span><span className="sep">/</span>
                        <span className="text-[var(--text)]">Teachers</span>
                    </div>
                    <TeacherListFilters 
                    subjects={subjectsData.data}
                    />

                    <div className="teachers-grid" id="teacher-grid">
                        {teachersData && teachersData.data && teachersData.data.map((teacher) => <TeacherListCard key={teacher.id+teacher.user.id} teacher={teacher}/>)}
                    </div>
                    <div className="pagination">
                        <div className="page-btn">‹</div>
                        <div className="page-btn act">1</div>
                        <div className="page-btn">2</div>
                        <div className="page-btn">3</div>
                        <div className="page-btn">…</div>
                        <div className="page-btn">18</div>
                        <div className="page-btn">›</div>
                    </div>
                </div>
            </section>
        </>
    )
}