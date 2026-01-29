import { Teacher } from "@/types/teacher.types";

interface MessagePopupProps {
    teacher: Teacher;
}

export default function MessagePopup({teacher}: MessagePopupProps) {
    return (
        <div className="flex flex-col gap-4">
            <h1>MessagePopup</h1>
            <div className="flex flex-col gap-2">
                <h2 className="text-lg font-bold">Message</h2>
                <p className="text-sm text-gray-500">
                    Send a message to the teacher
                </p>
            </div>
        </div>
    );
}