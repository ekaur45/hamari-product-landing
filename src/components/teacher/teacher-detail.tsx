"use client";
import { Teacher } from "@/types/teacher.types";
import UiDatePicker from "../ui/UiDatePicker";
import { assetUrl } from "@/utils/misc.util";
import { useState } from "react";
import TeacherCalendar from "../calendar/TeacherCalendar";

export default function TeacherDetails({ teacher }: { teacher: Teacher }) {
    const [activeTab, setActiveTab] = useState<('about' | 'reviews' | 'schedule')>('about');
    console.warn(teacher);
    return (<>
        <div className="td-hero">
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
            <div className="td-book-box">
                <div className="td-price-big" id="td-price-big">£{teacher.hourlyRate}</div>
                <div className="td-price-per">per 60-minute session</div>
                <label className="lbl">Select Date</label>
                {/* <input type="date" className="fi mb-[14]" />
                         */}
                <UiDatePicker
                    minDate={new Date(2025, 0, 1)}
                    maxDate={new Date(2030, 11, 31)}
                />
                <label className="lbl">Available Slots</label>
                <div className="avail-grid">
                    <div className="avail-slot sel">9:00 AM</div>
                    <div className="avail-slot taken">10:00 AM</div>
                    <div className="avail-slot">11:00 AM</div>
                    <div className="avail-slot">2:00 PM</div>
                    <div className="avail-slot taken">3:00 PM</div>
                    <div className="avail-slot">4:00 PM</div>
                    <div className="avail-slot">5:00 PM</div>
                    <div className="avail-slot">6:00 PM</div>
                    <div className="avail-slot">7:00 PM</div>
                </div>
                <div className="btn btn-glow w-full justify-center mt-4.5">Book Session →</div>
                <div className="btn btn-ghost w-full justify-center mt-2.5">Message Teacher</div>
            </div>
        </div>
        <div className="tab-row">
            <div className={`tab ${activeTab == 'about' ? 'act' : ''}`} onClick={() => { setActiveTab('about') }}>About</div>
            <div className={`tab ${activeTab == 'reviews' ? 'act' : ''}`} onClick={() => { setActiveTab('reviews') }}>Reviews</div>
            <div className={`tab ${activeTab == 'schedule' ? 'act' : ''}`} onClick={() => { setActiveTab('schedule') }}>Schedule</div>
        </div>
        <div className="td-grid">
            {activeTab == 'about' && <div className="block">
                <h3 className="font-[Sora] font-bold text-[1.1rem] mb-3.5">About Sarah</h3>
                <p className="text-[var(--text-m)] text-[0.9rem] leading-[1.85] mb-5">
                    {teacher.introduction}

                </p>
                <p className="text-[var(--text-m)] text-[0.9rem] leading-[1.85] mb-6">{teacher.user.details.bio}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                    {teacher.user.educations?.map(ed => <div key={ed.id} className="bg-[var(--glass)] border border-[var(--border)] rounded-2xl p-4.5">
                        <div className="text-[0.75rem] text-[var(--text-s)] mb-1.5">Education</div>
                        <div className="text-[0.88rem] font-semibold">{ed.degreeName}<br />
                            <span className="font-normal text-[var(--text-m)]">{ed.instituteName}</span>
                        </div>
                    </div>)}

                </div>
                <h4 className="font-bold text-[0.95rem] mb-3">Subjects &amp; Levels</h4>
                <div className="flex gap-2 flex-wrap mb-6">
                    {teacher.teacherSubjects.map(sub => <span key={sub.id} className="tag">{sub.subject.name}</span>)}
                </div>
            </div>}
            {activeTab === 'reviews' && <div id="reviews-tab">
                <div className="flex items-center gap-6 mb-6">
                    <div className="text-center">
                        <div className="font-[Sora] text-[3.5rem] font-extrabold text-[var(--teal-l)]">4.9</div>
                        <div className="stars text-[1.2rem]">★★★★★</div>
                        <div className="text-[0.78rem] text-[var(--text-s)] mt-1">127 reviews</div></div>
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-[0.78rem] text-[var(--text-s)] w-[30px]">5★</span>
                            <div className="flex-1 h-[6px] bg-[rgba(255,255,255,0.08)] rounded overflow-hidden">
                                <div className="w-[85%] h-full bg-[var(--amber)] rounded">
                                </div>
                            </div>
                            <span className="text-[0.75rem] text-[var(--text-s)]">108</span>
                        </div>
                        <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-[0.78rem] text-[var(--text-s)] w-[30px]">5★</span>
                            <div className="flex-1 h-[6px] bg-[rgba(255,255,255,0.08)] rounded overflow-hidden">
                                <div className="w-[35%] h-full bg-[var(--amber)] rounded">
                                </div>
                            </div>
                            <span className="text-[0.75rem] text-[var(--text-s)]">108</span>
                        </div>
                        <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-[0.78rem] text-[var(--text-s)] w-[30px]">5★</span>
                            <div className="flex-1 h-[6px] bg-[rgba(255,255,255,0.08)] rounded overflow-hidden">
                                <div className="w-[15%] h-full bg-[var(--amber)] rounded">
                                </div>
                            </div>
                            <span className="text-[0.75rem] text-[var(--text-s)]">108</span>
                        </div>

                    </div>
                </div>
                <div className="review-card">
                    <div className="review-author">
                        <div className="av w-[36px] h-[36px] bg-[#2563EB] text-[0.75rem]">FK</div>
                        <div>
                            <div className="review-name">Fatima K.</div>
                            <div className="review-date">2 weeks ago · ★★★★★</div>
                        </div>
                    </div>
                    <div className="review-text">Sarah completely transformed my daughter{"'"}s understanding of quadratic equations. Patient, clear, and incredibly effective. Highly recommend!</div>
                </div>
                <div className="review-card">
                    <div className="review-author">
                        <div className="av w-[36px] h-[36px] bg-[#7C3AED] text-[0.75rem]">FK</div>
                        <div>
                            <div className="review-name">James O.</div>
                            <div className="review-date">2 weeks ago · ★★★★★</div>
                        </div>
                    </div>
                    <div className="review-text">Best maths tutor I{"'"}ve ever had. Went from a D to a B in 3 months of weekly sessions. The whiteboard tool makes everything crystal clear.</div>
                </div>
                <div className="review-card">
                    <div className="review-author">
                        <div className="av w-[36px] h-[36px] bg-[#D97706] text-[0.75rem]">AM</div>
                        <div>
                            <div className="review-name">Aisha M..</div>
                            <div className="review-date">2 weeks ago · ★★★★★</div>
                        </div>
                    </div>
                    <div className="review-text">Incredibly knowledgeable and makes A-Level content approachable. My mock results improved dramatically after just 4 sessions.</div>
                </div>
                {/* <div class="review-card"><div class="review-author"><div class="av" style="width:36px;height:36px;background:#7C3AED;font-size:0.75rem">JO</div><div><div class="review-name">James O.</div><div class="review-date">1 month ago · ★★★★★</div></div></div><div class="review-text">Best maths tutor I've ever had. Went from a D to a B in 3 months of weekly sessions. The whiteboard tool makes everything crystal clear.</div></div>
            <div class="review-card"><div class="review-author"><div class="av" style="width:36px;height:36px;background:#D97706;font-size:0.75rem">AM</div><div><div class="review-name">Aisha M.</div><div class="review-date">1 month ago · ★★★★★</div></div></div><div class="review-text">Incredibly knowledgeable and makes A-Level content approachable. My mock results improved dramatically after just 4 sessions.</div></div> */}
            </div>}
            {activeTab === 'schedule' && <div id="schedule-tab">
                <p className="text-[var(--text-m)] text-[0.88rem] mb-5">Sarah{"'"}s typical weekly availability. Book from the panel on the right.</p>
                <TeacherCalendar
                    teacher={teacher}
                    availability={teacher.availabilities}
                    bookings={teacher.teacherBookings}
                    subjects={teacher.teacherSubjects}
                />

            </div>}
            <div className="bg-[var(--glass)] border border-[var(--border)] rounded-2xl p-5">
                <h4 className="font-bold text-[0.9rem] mb-3.5">Similar Teachers</h4>
                <div className="flex items-center gap-3 py-3 border-b border-[rgba(255,255,255,0.06)] cursor-pointer">
                    <div className="av w-[42px] h-[42px] text-[0.78rem] bg-gradient-to-br from-[#065F46] to-[#0D9488]">MR</div>
                    <div className="flex-1"><div className="text-[0.85rem] font-semibold">Mohammed R.</div>
                        <div className="text-[0.75rem] text-[var(--text-m)]">Chemistry · Biology</div>
                    </div>
                    <div className="font-[Sora] font-bold text-[0.9rem] text-[var(--teal-l)]">£40</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-b border-[rgba(255,255,255,0.06)] cursor-pointer">
                    <div className="av w-[42px] h-[42px] text-[0.78rem] bg-gradient-to-br from-[#065F46] to-[#0D9488]">MR</div>
                    <div className="flex-1"><div className="text-[0.85rem] font-semibold">Mohammed R.</div>
                        <div className="text-[0.75rem] text-[var(--text-m)]">Chemistry · Biology</div>
                    </div>
                    <div className="font-[Sora] font-bold text-[0.9rem] text-[var(--teal-l)]">£40</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-b border-[rgba(255,255,255,0.06)] cursor-pointer">
                    <div className="av w-[42px] h-[42px] text-[0.78rem] bg-gradient-to-br from-[#065F46] to-[#0D9488]">MR</div>
                    <div className="flex-1"><div className="text-[0.85rem] font-semibold">Mohammed R.</div>
                        <div className="text-[0.75rem] text-[var(--text-m)]">Chemistry · Biology</div>
                    </div>
                    <div className="font-[Sora] font-bold text-[0.9rem] text-[var(--teal-l)]">£40</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-b border-[rgba(255,255,255,0.06)] cursor-pointer">
                    <div className="av w-[42px] h-[42px] text-[0.78rem] bg-gradient-to-br from-[#065F46] to-[#0D9488]">MR</div>
                    <div className="flex-1"><div className="text-[0.85rem] font-semibold">Mohammed R.</div>
                        <div className="text-[0.75rem] text-[var(--text-m)]">Chemistry · Biology</div>
                    </div>
                    <div className="font-[Sora] font-bold text-[0.9rem] text-[var(--teal-l)]">£40</div>
                </div>
            </div>
        </div>
    </>)
}