import Link from "next/link";
import { XCircle } from "lucide-react";
export default function PaymentCancelPage() {
    return (
        <div className="h-[calc(100dvh-180px)] bg-[var(--dark)] text-[var(--text)] flex items-center justify-center p-6">
            <div className="w-full max-w-lg rounded-3xl border border-[var(--border)] bg-[var(--glass)] backdrop-blur-xl p-8 text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[color:rgba(239,68,68,0.15)]">
                    <XCircle className="h-10 w-10 text-[var(--red)]" />
                </div>

                <h1 className="text-3xl font-bold mb-3">
                    Payment Cancelled
                </h1>

                <p className="text-[var(--text-m)] mb-8">
                    Your payment was cancelled before completion. No charges have been
                    made to your account.
                </p>

                <div className="rounded-2xl border border-[var(--border)] bg-[color:rgba(255,255,255,0.03)] p-4 mb-8">
                    <p className="text-sm text-[var(--text-s)]">
                        You can return to checkout anytime and try again.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                        href="/pricing"
                        className="flex-1 rounded-xl bg-[var(--coral)] px-5 py-3 font-medium text-white transition hover:opacity-90"
                    >
                        Try Again
                    </Link>

                    <Link
                        href="/"
                        className="flex-1 rounded-xl border border-[var(--border)] bg-[var(--glass)] px-5 py-3 font-medium transition hover:border-[var(--border-h)]"
                    >
                        Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
}