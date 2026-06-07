interface Props {
    searchParams: Promise<{ [key: string]: string | undefined }>;
    params: Promise<{ teacherid: string }>;
}
export default async function TeacherDetails({ params }: Props) {
    return(<></>)
}