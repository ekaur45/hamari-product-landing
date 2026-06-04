"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function CancelContent() {
    const searchParams = useSearchParams();

    const reason = searchParams.get("reason") || "Payment was canceled";

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                {/* Cancel Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-12 text-center">
                    {/* Cancel Icon */}
                    <div className="mb-6 flex justify-center">
                        <div className="relative">
                            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center animate-scale-in">
                                <em className="fas fa-times-circle text-5xl text-orange-600"></em>
                            </div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                                <em className="fas fa-exclamation text-white text-sm"></em>
                            </div>
                        </div>
                    </div>

                    {/* Cancel Message */}
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Payment Canceled
                    </h1>
                    <p className="text-lg text-gray-600 mb-2">
                        Your payment was not completed.
                    </p>
                    <p className="text-gray-500 mb-8">
                        {reason}
                    </p>

                    {/* Info Box */}
                    <div className="bg-orange-50 rounded-xl p-6 mb-8 border border-orange-200">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center justify-center gap-2">
                            <em className="fas fa-info-circle text-orange-600"></em>
                            What Happened?
                        </h2>
                        <p className="text-sm text-gray-700 mb-4">
                            No charges were made to your account. Your booking session was not confirmed, but you can try again anytime.
                        </p>
                        <div className="space-y-2 text-left">
                            <div className="flex items-start gap-2">
                                <em className="fas fa-check text-orange-600 text-xs mt-1.5"></em>
                                <p className="text-sm text-gray-700">No payment was processed</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <em className="fas fa-check text-orange-600 text-xs mt-1.5"></em>
                                <p className="text-sm text-gray-700">Your booking was not confirmed</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <em className="fas fa-check text-orange-600 text-xs mt-1.5"></em>
                                <p className="text-sm text-gray-700">You can try booking again anytime</p>
                            </div>
                        </div>
                    </div>

                    {/* Common Reasons */}
                    <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200 text-left">
                        <h3 className="text-base font-semibold text-gray-900 mb-3">
                            Common Reasons for Cancellation:
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-start gap-2">
                                <em className="fas fa-circle text-gray-400 text-xs mt-2"></em>
                                <span>You clicked the cancel button during payment</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <em className="fas fa-circle text-gray-400 text-xs mt-2"></em>
                                <span>Payment session timed out</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <em className="fas fa-circle text-gray-400 text-xs mt-2"></em>
                                <span>Browser was closed during payment</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <em className="fas fa-circle text-gray-400 text-xs mt-2"></em>
                                <span>Payment gateway issues</span>
                            </li>
                        </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/checkout"
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 hover:shadow-lg transition-all"
                        >
                            <em className="fas fa-redo"></em>
                            Try Again
                        </Link>
                        <Link
                            href="/"
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 text-gray-900 font-semibold rounded-xl hover:bg-gray-50 hover:border-primary hover:text-primary transition-all"
                        >
                            <em className="fas fa-home"></em>
                            Go to Home
                        </Link>
                    </div>
                </div>

                {/* Support Section */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600 mb-2">
                        Having trouble? <Link href="/contact" className="text-primary font-semibold hover:underline">Contact Support</Link>
                    </p>
                    <p className="text-xs text-gray-500">
                        If you believe this is an error, please reach out to our support team.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function CancelPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gray-50 py-12 px-4 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading...</p>
                </div>
            </div>
        }>
            <CancelContent />
        </Suspense>
    );
}