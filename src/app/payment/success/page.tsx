"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SuccessContent() {
    const searchParams = useSearchParams();

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                {/* Success Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-12 text-center">
                    {/* Success Icon */}
                    <div className="mb-6 flex justify-center">
                        <div className="relative">
                            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center animate-scale-in">
                                <em className="fas fa-check-circle text-5xl text-green-600"></em>
                            </div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                                <em className="fas fa-check text-white text-sm"></em>
                            </div>
                        </div>
                    </div>

                    {/* Success Message */}
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Payment Successful!
                    </h1>
                    <p className="text-lg text-gray-600 mb-2">
                        Your booking has been confirmed successfully.
                    </p>
                    <p className="text-gray-500 mb-8">
                        You will receive a confirmation email shortly with all the details.
                    </p>

                    {/* Transaction Info */}
                    {searchParams.get("transactionId") && (
                        <div className="bg-gray-50 rounded-lg p-4 mb-8 border border-gray-200">
                            <p className="text-sm text-gray-600 mb-1">Transaction ID</p>
                            <p className="text-base font-mono font-semibold text-gray-900">
                                {searchParams.get("transactionId")}
                            </p>
                        </div>
                    )}

                    {/* What's Next */}
                    <div className="bg-primary/5 rounded-xl p-6 mb-8 border border-primary/10">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center justify-center gap-2">
                            <em className="fas fa-info-circle text-primary"></em>
                            What&apos;s Next?
                        </h2>
                        <div className="text-left space-y-3">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                                    <em className="fas fa-check text-primary text-xs"></em>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">Check Your Email</p>
                                    <p className="text-sm text-gray-600">We&apos;ve sent you a confirmation email with booking details</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                                    <em className="fas fa-calendar text-primary text-xs"></em>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">Mark Your Calendar</p>
                                    <p className="text-sm text-gray-600">Save the session date and time in your calendar</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                                    <em className="fas fa-bell text-primary text-xs"></em>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">Get Reminders</p>
                                    <p className="text-sm text-gray-600">You&apos;ll receive reminders before your session starts</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 hover:shadow-lg transition-all"
                        >
                            <em className="fas fa-home"></em>
                            Go to Home
                        </Link>
                        <Link
                            href="/teachers"
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 text-gray-900 font-semibold rounded-xl hover:bg-gray-50 hover:border-primary hover:text-primary transition-all"
                        >
                            <em className="fas fa-chalkboard-teacher"></em>
                            Browse Teachers
                        </Link>
                    </div>
                </div>

                {/* Support Section */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600 mb-2">
                        Need help? <Link href="/contact" className="text-primary font-semibold hover:underline">Contact Support</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function SuccessPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gray-50 py-12 px-4 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading...</p>
                </div>
            </div>
        }>
            <SuccessContent />
        </Suspense>
    );
}