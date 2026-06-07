"use client"

import { Teacher } from "@/types/teacher.types";
import { Star } from "lucide-react";
import Link from "next/link";

export default function TeacherListCard({ teacher }: { teacher?: Teacher }) {
    if (!teacher) return null
    return (<>
        <Link href={`/teachers/${teacher.id}`} className="gc tc-card">
            <div className="flex flex-col justify-between h-full">
                <div>
                    <div className="tc-av-wrap">
                        <div className="tc-av bg-gradient-to-br from-[#1E40AF] to-[#3B82F6]" style={{ overflow: "hidden" }}><img src={`${process.env.NEXT_PUBLIC_ASSET_URL}${teacher.user.details.profileImage}`} /></div>
                        <div className="online-dot"></div>
                    </div>
                    <div className="tc-name">{teacher.user.firstName} {teacher.user.lastName}</div>
                    <div className="tc-subject">{teacher.teacherSubjects.map(d => d.subject.name).join(" . ")}</div>
                    <div className="tc-tags">
                        {teacher.user.educations?.map(e => <span key={teacher.id + e.id} className="tag">{e.degreeName}</span>)}</div>
                    <div className="stars text-center mb-1">
                        {Array.from([1,2,3,4,5]).map(s=><Star key={s}/>)}

                    </div>
                    <div className="text-center text-[0.72rem] text-[var(--text-s)] mb-3.5">{10} reviews</div>
                </div>
                <div className="tc-meta">
                    <div className="tc-price">£{teacher.hourlyRate} <span>/ 60 min</span></div>
                    <div className="btn btn-glow btn-sm">Book</div>
                </div>
            </div>
        </Link>
    </>)
}