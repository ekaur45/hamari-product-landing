import { Metadata } from "next";
import Link from "next/link";

interface Props {
    searchParams: Promise<{ [key: string]: string | undefined }>;
    params: Promise<{ teacherid: string }>
}

export async function generateMetadata({ searchParams, params }: Props): Promise<Metadata> {
    const routeParams = await params;
    const queryParams = await searchParams;
    const teacherId = routeParams.teacherid;
    const teacherName = queryParams.name;
    const tagline = queryParams.bio;
    return {
        title: teacherName + " - " + tagline,
        description: tagline,
    };
}

export default async function TeacherDetailsPage({ searchParams, params }: Props) {
    const routeParams = await params;
    const queryParams = await searchParams;
    const teacherId = routeParams.teacherid;
    const teacherName = queryParams.name;
    console.log(teacherId);
    return (<div>
        <Link href={'/teachers'}>Back</Link>
    </div>)
}