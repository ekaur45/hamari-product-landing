"use client";

import { Search } from "lucide-react";
import UiSelect from "../ui/UiSelect";

export default function TeacherListFilters() {
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
            <div className="search-bar">
                <Search />
                <input type="text" placeholder="Search by name, subject or keyword…" />
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
        <div className="filter-row">
            <div className="filter-btn act">All Subjects</div>
            <div className="filter-btn">Mathematics</div>
            <div className="filter-btn">Science</div>
            <div className="filter-btn">English</div>
            <div className="filter-btn">Physics</div>
            <div className="filter-btn">Chemistry</div>
            <div className="filter-btn">Biology</div>
            <div className="filter-btn">History</div>
            <div className="filter-btn">Arabic</div>
            <div className="filter-btn">Urdu</div>
            <div className="filter-btn">Computer Science</div>
        </div>
        <div className="filter-row">
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
        </div>
    </>);
}