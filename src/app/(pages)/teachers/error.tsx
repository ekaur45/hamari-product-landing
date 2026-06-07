// app/teachers/error.tsx

'use client';

import Link from "next/link";

interface ErrorPageProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function TeachersError({
    error,
    reset,
}: ErrorPageProps) {
    return (
        <section>
            <div className="inner">
                <div className="max-w-2xl mx-auto text-center py-20">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 text-red-600 text-4xl mb-6">
                        ⚠️
                    </div>

                    <h1 className="text-3xl font-bold mb-3">
                        Unable to Load Teachers
                    </h1>

                    <p className="text-[var(--text-m)] mb-8">
                        Something went wrong while fetching the teacher
                        directory. Please try again.
                    </p>

                    {process.env.NODE_ENV === 'development' && (
                        <div className="mb-8 p-4 rounded-xl bg-red-50 border border-red-200 text-left">
                            <pre className="text-sm whitespace-pre-wrap break-words text-red-700">
                                {JSON.stringify(error)}
                            </pre>
                        </div>
                    )}

                    <div className="flex justify-center gap-3 flex-wrap">
                        <button
                            onClick={reset}
                            className="btn btn-glow"
                        >
                            Try Again
                        </button>

                        <Link
                            href="/"
                            className="btn btn-outline"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}