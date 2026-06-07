// app/teachers/loading.tsx

export default function TeachersLoading() {
    return (
        <section>
            <div className="inner">
                {/* Breadcrumb */}
                <div className="breadcrumb">
                    <div className="h-4 w-12 rounded bg-gray-200 animate-pulse"></div>
                    <span className="sep">/</span>
                    <div className="h-4 w-20 rounded bg-gray-200 animate-pulse"></div>
                </div>

                {/* Header */}
                <div className="flex justify-between items-end mb-7 flex-wrap gap-4">
                    <div>
                        <div className="h-7 w-28 rounded-full bg-gray-200 animate-pulse mb-3"></div>
                        <div className="h-10 w-80 rounded bg-gray-200 animate-pulse mb-2"></div>
                        <div className="h-4 w-72 rounded bg-gray-200 animate-pulse"></div>
                    </div>

                    <div className="h-11 w-52 rounded-xl bg-gray-200 animate-pulse"></div>
                </div>

                {/* Search */}
                <div className="search-bar">
                    <div className="h-5 w-5 rounded bg-gray-200 animate-pulse"></div>
                    <div className="flex-1 h-5 rounded bg-gray-200 animate-pulse"></div>
                    <div className="h-10 w-24 rounded-xl bg-gray-200 animate-pulse"></div>
                </div>

                {/* Subject Filters */}
                <div className="filter-row">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div
                            key={i}
                            className="h-9 w-28 rounded-full bg-gray-200 animate-pulse"
                        />
                    ))}
                </div>

                {/* Price & Level Filters */}
                <div className="filter-row">
                    <div className="h-4 w-12 rounded bg-gray-200 animate-pulse"></div>

                    {Array.from({ length: 4 }).map((_, i) => (
                        <div
                            key={`price-${i}`}
                            className="h-9 w-24 rounded-full bg-gray-200 animate-pulse"
                        />
                    ))}

                    <div className="w-px bg-[var(--border)] mx-1"></div>

                    <div className="h-4 w-12 rounded bg-gray-200 animate-pulse"></div>

                    {Array.from({ length: 5 }).map((_, i) => (
                        <div
                            key={`level-${i}`}
                            className="h-9 w-20 rounded-full bg-gray-200 animate-pulse"
                        />
                    ))}
                </div>

                {/* Teachers Grid */}
                <div className="teachers-grid">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="gc tc-card">
                            <div className="tc-av-wrap">
                                <div className="tc-av bg-gray-200 animate-pulse"></div>
                            </div>

                            <div className="h-6 w-40 mx-auto rounded bg-gray-200 animate-pulse mb-3"></div>

                            <div className="h-4 w-48 mx-auto rounded bg-gray-200 animate-pulse mb-4"></div>

                            <div className="flex justify-center gap-2 flex-wrap mb-4">
                                <div className="h-7 w-16 rounded-full bg-gray-200 animate-pulse"></div>
                                <div className="h-7 w-16 rounded-full bg-gray-200 animate-pulse"></div>
                                <div className="h-7 w-16 rounded-full bg-gray-200 animate-pulse"></div>
                            </div>

                            <div className="h-4 w-24 mx-auto rounded bg-gray-200 animate-pulse mb-2"></div>

                            <div className="h-3 w-20 mx-auto rounded bg-gray-200 animate-pulse mb-4"></div>

                            <div className="tc-meta">
                                <div className="h-7 w-20 rounded bg-gray-200 animate-pulse"></div>
                                <div className="h-10 w-24 rounded-xl bg-gray-200 animate-pulse"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="pagination">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <div
                            key={i}
                            className="h-10 w-10 rounded-lg bg-gray-200 animate-pulse"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}