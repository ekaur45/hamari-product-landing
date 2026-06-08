/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { assetUrl } from "@/old/utils/misc.util";
import { Teacher } from "@/types/teacher.types";

interface CheckoutDetailsProps {
    teacher: Teacher;
    date: string;
    subject: string;
    subjectName: string;
    availabilityId: string;
    availabilityEndTime: string;
    availabilityStartTime: string;
}
export default function CheckoutDetails({
    teacher,
    date,
    subjectName,
    availabilityEndTime,
    availabilityStartTime
}: CheckoutDetailsProps) {
    return (<>
        <div className="td-hero !grid-cols-[1fr]">
            <div className="grid grid-cols-[auto_1fr_auto] gap-8">
                <div className="td-av bg-gradient-to-br from-[rgb(91,33,182)] to-[rgb(124,58,237)] overflow-hidden" id="td-av">
                    <img src={`${assetUrl(teacher.user.details.profileImage)}`} />
                </div>
                <div>
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                        <h1 className="td-name" id="td-name">{teacher.user.firstName} {teacher.user.lastName}</h1>
                        <span className="badge">✓ Verified</span>
                        <span className="bg-[rgba(34,197,94,0.15)] border border-[rgba(34,197,94,0.3)] text-[#4ADE80] text-[0.72rem] font-bold px-2.5 py-[3px] rounded-full">● Online Now</span>
                    </div>
                    <div className="td-subj" id="td-subj">{teacher.teacherSubjects.map(d => d.subject.name).join(" . ")}</div>
                    <div className="stars" id="td-stars">★★★★★</div>
                    <div className="flex gap-2 flex-wrap mt-3" id="td-tags">{teacher.user.educations?.map(e => <span key={teacher.id + e.id} className="tag">{e.degreeName}</span>)}</div>
                    <div className="td-stats">
                        <div className="td-stat"><div className="td-stat-v" id="td-students">340</div><div className="td-stat-l">Students</div></div>
                        <div className="td-stat"><div className="td-stat-v" id="td-sessions">1,240</div><div className="td-stat-l">Sessions</div></div>
                        <div className="td-stat"><div className="td-stat-v" id="td-rating">4.9</div><div className="td-stat-l">Rating</div></div>
                        <div className="td-stat"><div className="td-stat-v" id="td-reviews-count">127</div><div className="td-stat-l">Reviews</div></div>
                    </div>
                </div>
            </div>
            <p>
                {teacher.tagline}
            </p>
            <p>
                {teacher.introduction}
            </p>
        </div>
    </>)
}