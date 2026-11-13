"use server";
import { ApiResponse } from "@/services/api.service";
import TeacherService from "@/services/teacher.service";
import { Teacher } from "@/types/teacher.types";
import CheckoutDetails from "@/components/checkout/checout-details";
import CheckoutForm from "@/components/checkout/checkout-form";

interface Props {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}

const teacherService: TeacherService = new TeacherService();

export default async function CheckoutPage({ searchParams }: Props) {
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
        return <>
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Something went wrong!</h1>
                <p className="text-gray-600">Invalid parameters</p>
            </div>
        </div>
        </>
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
    
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Booking</h1>
                    <p className="text-gray-600">Review your booking details and proceed to payment</p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Checkout Details - Left Column */}
                    <div className="lg:col-span-7">
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

                    {/* Checkout Form - Right Column */}
                    <div className="lg:col-span-5">
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
            </div>
        </div>
    );
}