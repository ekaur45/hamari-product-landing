"use client";

import { useState } from "react";
import UiMultiSelect from "../ui/UiMultiSelect";
import { Subject } from "@/types/teacher.types";
import { useRouter, useSearchParams } from "next/navigation";
import UISelect from "../ui/Select";


export default function TeacherFilters({ subjects,onSearch }: { subjects: Subject[], onSearch: (params: URLSearchParams) => void }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams.toString());
    const [selectedSubjects, setSelectedSubjects] = useState<string[]>(params.get('subjects')?.split(',') || []);
    const [search, setSearch] = useState<string>(params.get('search') || '');
    const onFilterChange = () => {
        onSearch(params);
    }
    return (
        <div className="bg-white border-b border-gray-200 sticky top-0 z-30 py-4 shadow-sm">
            <div className="container mx-auto px-4 md:hidden">
                <div className="flex items-center gap-2 justify-between w-full">
                    <div className="relative w-full">

                        <input
                            type="text"
                            placeholder="Search by name or keyword..."
                            className="w-full bg-gray-50 border border-gray-100 rounded-xl py-2.5 pl-11 pr-4 text-sm font-medium focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"

                        />
                    </div>
                    <button className="bg-primary text-white px-3 rounded-lg py-1.5">
                        <i className="fa-solid fa-filter"></i>
                    </button>
                </div>
            </div>
            <div className="container mx-auto px-4 hidden md:block">
                <div className="flex flex-col gap-4">
                    {/* Row 1: Primary Dropdowns */}
                    <div className="grid grid-cols-4 gap-3">
                        <div className="col-span-1">
                            <div className="relative">
                                <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                <input type="text" placeholder="Search by name or keyword..." className="w-full bg-gray-50 border border-gray-100 rounded-xl py-2.5 pl-11 pr-9 text-sm font-medium focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                    value={search}
                                    onChange={(e) => { setSearch(e.target.value); params.set('search', e.target.value); router.replace(`/teachers?${params.toString()}`); onFilterChange(); }}
                                />
                                {search && <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-500" onClick={() => { setSearch(''); params.set('search', ''); router.replace(`/teachers?${params.toString()}`); onFilterChange(); }}>
                                    <i className="fa-solid fa-xmark text-gray-400 hover:text-gray-500"></i>
                                </button>}
                            </div>
                        </div>
                        <div className="col-span-1">
                            <UiMultiSelect value={selectedSubjects} options={subjects} onChange={(e) => { setSelectedSubjects(e.value); params.set('subjects', e.value.join(',')); router.replace(`/teachers?${params.toString()}`); onFilterChange(); }} optionLabel="name"

                                selectAllLabel="Select All"
                                optionValue="name"
                                placeholder="Search by Subjects" display="chip" className="min-w-40" />
                        </div>

                        <div className="col-span-1">
                            <UISelect
                                options={[{id: 'all', name: 'All'}, {id: 'professional', name: 'Professional'}, {id: 'super_tutor', name: 'Super Tutor'}]}
                                optionLabel="name"
                                optionValue="id"
                                placeholder="Search by Teacher Type"
                            />
                        </div>
                        <div className="col-span-1"></div>
                    </div>

                    {/* Row 2: Secondary Filters & Search */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-3">
                            <button className="bg-pink-500 text-white px-4 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-pink-600 transition-colors">
                                <i className="fa-solid fa-sparkles"></i>
                                Personalize results
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
