import { ApiResponse } from "@/services/api.service";
import { Teacher } from "@/types/teacher.types";
import TeacherService from "@/old/services/teacher.service";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import CheckoutDetails from "@/components/checkout/CheckoutDetails";
interface Props {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}
const teacherService: TeacherService = new TeacherService();

export default async function Checkout({ searchParams }: Props) {
    const searchParamsData = await searchParams;
    const date = searchParamsData.date;
    const subject = searchParamsData.subject;
    const subjectName = searchParamsData.subjectName;
    const teacherId = searchParamsData.teacherId;
    const availabilityId = searchParamsData.availabilityId;
    const availabilityEndTime = searchParamsData.availabilityEndTime;
    const availabilityStartTime = searchParamsData.availabilityStartTime;
    // Validate required parameters
    if (!date || !subject || !teacherId || !subjectName || !availabilityId || !availabilityEndTime || !availabilityStartTime) {
        throw new Error("Invalid parameters");
    }
    // Fetch teacher data
    let teacher: Teacher | null = null;
    let fetchError: Error | null = null;

    try {
        const teacherResponse: ApiResponse<Teacher> = await teacherService.getTeacherById(teacherId);
        if (!teacherResponse.data) {
            fetchError = new Error("Teacher not found");
        } else {
            teacher = teacherResponse.data;
        }
    } catch (error) {
        fetchError = error instanceof Error ? error : new Error("Failed to load teacher data");
    }

    // Handle fetch errors
    if (fetchError || !teacher) {
        throw new Error("Teacher not found");
        return <>
            <div className="min-h-screen bg-gray-50 py-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Something went wrong!</h1>
                    <p className="text-gray-600">{fetchError?.message || "Failed to load teacher data"}</p>
                </div>
            </div>
        </>
    }
    return (<>
        <div className="inner">
            <div className="breadcrumb">
                <span>Home</span>
                <span className="sep">/</span>
                <span>Teachers</span>
                <span className="sep">/</span>
                <span>Sarah Ahmed</span>
                <span className="sep">/</span>
                <span className="text-[var(--text)]">Checkout</span>
            </div>
            <h1 className="text-[2rem] font-extrabold mb-2">Complete Your Booking</h1>
            <p className="text-[var(--text-m)] mb-9">You{"'"}re one step away from your session.</p>
            <div className="checkout-grid mb-5">
                <div>
                    <CheckoutDetails
                        teacher={teacher}
                        date={date}
                        subject={subject}
                        subjectName={subjectName}
                        availabilityId={availabilityId}
                        availabilityEndTime={availabilityEndTime}
                        availabilityStartTime={availabilityStartTime}
                    />
                </div>
                <CheckoutForm
                    teacher={teacher}
                    date={date}
                    subject={subject}
                    subjectName={subjectName}
                    availabilityId={availabilityId}
                    availabilityEndTime={availabilityEndTime}
                    availabilityStartTime={availabilityStartTime}

                />
            </div>
        </div>
    </>)
}