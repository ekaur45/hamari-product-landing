import TeacherListCard from "@/components/teacher/list-card";
import TeacherListFilters from "@/components/teacher/list-filter";
import { ApiResponse } from "@/services/api.service";
import PublicService from "@/services/public.service";
import TeacherService from "@/services/teacher.service";
import { Subject } from "@/types/teacher.types";
import Link from "next/link"

const TEACHER_LIST = [
    {
        id: '3f1c2b6e-9a4d-4d3c-8b1a-1f2e7c9d5a11',
        firstName: 'Sarah',
        lastName: 'Ahmad',
        subjects: [
            { name: 'Mathematics' },
            { name: 'Physics' }
        ],
        education: [
            { name: 'GCSE' },
            { name: 'A-Level' },
            { name: 'IB' }
        ],
        price: 35,
        reviews: {
            count: 127,
            stars: 5
        }
    },
    {
        id: '7a9d4c21-2f3b-4e8a-9c11-6d2f5a8b1c90',
        firstName: 'Ali',
        lastName: 'Khan',
        subjects: [
            { name: 'Chemistry' },
            { name: 'Biology' }
        ],
        education: [
            { name: 'A-Level' },
            { name: 'BSc' }
        ],
        price: 30,
        reviews: {
            count: 98,
            stars: 4.8
        }
    },
    {
        id: 'b2c8e91d-5f3a-4c6b-8d2e-91a7c3f5b8d4',
        firstName: 'Hina',
        lastName: 'Shah',
        subjects: [
            { name: 'English' },
            { name: 'History' }
        ],
        education: [
            { name: 'GCSE' },
            { name: 'BA' }
        ],
        price: 28,
        reviews: {
            count: 76,
            stars: 4.7
        }
    },
    {
        id: 'e91c3a7d-4b2f-4c9a-8d1e-7f6b2c9a5d11',
        firstName: 'Usman',
        lastName: 'Ali',
        subjects: [
            { name: 'Computer Science' },
            { name: 'Mathematics' }
        ],
        education: [
            { name: 'BSc' },
            { name: 'MSc' }
        ],
        price: 40,
        reviews: {
            count: 145,
            stars: 4.9
        }
    },
    {
        id: 'a5d9c2f1-8b3e-4d7a-9c21-6f1b8e3d2c44',
        firstName: 'Ayesha',
        lastName: 'Malik',
        subjects: [
            { name: 'Physics' },
            { name: 'Chemistry' }
        ],
        education: [
            { name: 'A-Level' },
            { name: 'BSc' }
        ],
        price: 33,
        reviews: {
            count: 110,
            stars: 4.6
        }
    },
    {
        id: 'c4f1a8d2-6e9b-4a3c-9d71-2b8f5c1a9e33',
        firstName: 'Bilal',
        lastName: 'Hassan',
        subjects: [
            { name: 'Mathematics' },
            { name: 'Statistics' }
        ],
        education: [
            { name: 'BSc' },
            { name: 'MSc' }
        ],
        price: 38,
        reviews: {
            count: 89,
            stars: 4.8
        }
    }
]
const teacherService: TeacherService = new TeacherService();
const publicService: PublicService = new PublicService();
interface Props {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}
export default async function TeachersPage({ searchParams }: Props) {
    const params = await searchParams;
    const page = Number(params.page) || 1;
    const teachersData = await teacherService.getTeachers(new URLSearchParams(params as Record<string, string>), page, 10);
    // const subjectsData: ApiResponse<Subject[]> = await publicService.getSubjects();
    return (
        <>
            <section>
                <div className="inner">
                    <div className="breadcrumb">
                        <span>Home</span><span className="sep">/</span>
                        <span className="text-[var(--text)]">Teachers</span>
                    </div>
                    <TeacherListFilters />

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