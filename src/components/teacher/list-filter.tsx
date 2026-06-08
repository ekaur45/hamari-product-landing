"use client";

import { Search, XIcon } from "lucide-react";
import UiSelect from "../ui/UiSelect";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Subject } from "@/types/teacher.types";
import UiMultiSelect from "../ui/UiMultiSelect";
interface Props {
    subjects: Subject[]
}

export default function TeacherListFilters({ subjects }: Props) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams.toString());
    const [selectedSubjects, setSelectedSubjects] = useState<string[]>(params.get('subjects')?.split(',') || []);
    const [search, setSearch] = useState<string>(params.get('search') || '');
    const onFilterChange = () => {
        //onSearch(params);
    }
    return (<>
        <div className="flex justify-between items-end mb-7 flex-wrap gap-4">
            <div>
                <div className="chip">
                    <span className="chip-dot">
                    </span>
                    Our Teachers
                </div>
                <h1 className="sec-title mb-2">
                    Find Your Perfect Teacher
                </h1>
                <p className="text-[var(--text-m)] text-[0.9rem]">
                    5,200+ verified experts ready to help you succeed
                </p>
            </div>
        </div>

        <div className="grid grid-cols-[1fr_250px] gap-3">
            <div className="search-bar !mb-3 relative">
                <Search />
                <input type="text" placeholder="Search by name, subject or keyword…"
                    value={search}
                    onChange={(e) => { setSearch(e.target.value); params.set('search', e.target.value); router.replace(`/teachers?${params.toString()}`); onFilterChange(); }}
                />
                {search && <button className="absolute right-24 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-500" onClick={() => { setSearch(''); params.set('search', ''); router.replace(`/teachers?${params.toString()}`); onFilterChange(); }}>
                    <XIcon/>
                </button>}
                <div className="btn btn-glow btn-sm">Search</div>
            </div>
            <UiSelect
                placeholder="Sort by"
                options={[
                    {
                        label: 'Sort: Top Rated',
                        value: 'top-rated'
                    },
                    {
                        label: 'Sort: Price Low → High',
                        value: 'price-a-z'
                    },
                    {
                        label: 'Sort: Price High → Low',
                        value: 'price-z-a'
                    },
                    {
                        label: 'Sort: Most Reviews',
                        value: 'reviews'
                    }
                ]}
            ></UiSelect>
        </div>
        <div className="flex gap-5 mb-8">
            <UiMultiSelect
            value={selectedSubjects}                
                onChange={(e) => { setSelectedSubjects(e); params.set('subjects', e.join(',')); router.replace(`/teachers?${params.toString()}`); onFilterChange(); }}
                placeholder="Subjects"
                options={subjects.map(s => {
                    return { label: s.name, value: s.name }
                })} />
            <UiSelect
                placeholder="Price"
                options={[
                    {
                        label: "Any",
                        value: ""
                    },
                    {
                        label: "Under $20",
                        value: "<20"
                    },
                    {
                        label: "$20-$40",
                        value: "20-40"
                    },
                    {
                        label: "$40+",
                        value: "40+"
                    }
                ]} />
            <UiSelect
                placeholder="Level"
                options={[
                    {
                        label: "Any",
                        value: ""
                    },
                    {
                        label: "KS3",
                        value: "ks3"
                    },
                    {
                        label: "GCSE",
                        value: "gcse"
                    },
                    {
                        label: "A-Level",
                        value: "a-level"
                    },
                    {
                        label: "University",
                        value: "university"
                    }
                ]} />

            {/* <div className="filter-btn act">All Subjects</div>
            {subjects.map(s=><div key={s.id} className="filter-btn">{s.name}</div>)} */}
            {/* <div className="filter-btn">Mathematics</div>
            <div className="filter-btn">Science</div>
            <div className="filter-btn">English</div>
            <div className="filter-btn">Physics</div>
            <div className="filter-btn">Chemistry</div>
            <div className="filter-btn">Biology</div>
            <div className="filter-btn">History</div>
            <div className="filter-btn">Arabic</div>
            <div className="filter-btn">Urdu</div>
            <div className="filter-btn">Computer Science</div> */}
        </div>
        {/* <div className="filter-row">
            <strong className="text-[0.82rem] text-[var(--text-m)] leading-[2]">Price:</strong>
            <div className="filter-btn act">Any</div>
            <div className="filter-btn">Under £20</div>
            <div className="filter-btn">£20–£40</div>
            <div className="filter-btn">£40+</div>
            <div className="w-px bg-[var(--border)] mx-1"></div>
            <strong className="text-[0.82rem] text-[var(--text-m)] leading-[2]">Level:</strong>
            <div className="filter-btn act">Any</div>
            <div className="filter-btn">KS3</div>
            <div className="filter-btn">GCSE</div>
            <div className="filter-btn">A-Level</div>
            <div className="filter-btn">University</div>
        </div> */}
    </>);
}