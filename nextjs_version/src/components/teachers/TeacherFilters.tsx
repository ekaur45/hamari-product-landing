"use client";

import { useState } from "react";

export default function TeacherFilters() {
    return (
        <div className="bg-white border-b border-gray-200 sticky top-0 z-30 py-4 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex flex-col gap-4">
                    {/* Row 1: Primary Dropdowns */}
                    <div className="flex flex-wrap items-center gap-3">
                        {/* Subject Toggle */}
                        <div className="bg-blue-50 text-blue-600 px-4 py-2.5 rounded-xl border border-blue-100 font-bold text-sm flex items-center gap-2">
                            English
                            <i className="fa-light fa-xmark cursor-pointer"></i>
                        </div>

                        {/* Dropdown Filters */}
                        {[
                            { label: "Price per lesson", icon: "fa-dollar-sign" },
                            { label: "Country of birth", icon: "fa-flag" },
                            { label: "Availability", icon: "fa-calendar" },
                            { label: "Native speaker", icon: "fa-microphone" },
                        ].map((filter) => (
                            <div key={filter.label} className="group relative">
                                <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:border-blue-500 hover:bg-blue-50/30 transition-all">
                                    <i className={`a-light \ text-gray-400 group-hover:text-blue-500`}></i>
                                    {filter.label}
                                    <i className="fa-light fa-chevron-down text-[10px] text-gray-400 group-hover:translate-y-0.5 transition-transform"></i>
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Row 2: Secondary Filters & Search */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-3">
                            <button className="bg-pink-500 text-white px-4 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-pink-600 transition-colors">
                                <i className="fa-solid fa-sparkles"></i>
                                Personalize results
                            </button>

                            {["Specialties", "Also speaks", "Tutor categories"].map(label => (
                                <button key={label} className="px-4 py-2.5 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors">
                                    {label}
                                    <i className="fa-light fa-chevron-down text-[10px] ml-2"></i>
                                </button>
                            ))}
                        </div>

                        <div className="relative flex-1 max-w-md">
                            <i className="fa-light fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                            <input
                                type="text"
                                placeholder="Search by name or keyword..."
                                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-2.5 pl-11 pr-4 text-sm font-medium focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
