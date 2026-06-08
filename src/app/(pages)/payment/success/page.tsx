import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
export default function PaymentSuccessPage(){
    return(<div className="h-[calc(100dvh-180px)] bg-[var(--dark)] text-[var(--text)] flex items-center justify-center p-6">
        <div className="w-full max-w-lg rounded-3xl border border-[var(--border)] bg-[var(--glass)] backdrop-blur-xl p-8 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[color:rgba(45,212,191,0.15)]">
            <CheckCircle2 className="h-10 w-10 text-[var(--teal-l)]" />
          </div>
  
          <h1 className="text-3xl font-bold mb-3">
            Payment Successful
          </h1>
  
          <p className="text-[var(--text-m)] mb-8">
            Thank you for your purchase. Your payment has been processed
            successfully and your account has been updated.
          </p>
  
          <div className="rounded-2xl border border-[var(--border)] bg-[color:rgba(255,255,255,0.03)] p-4 mb-8">
            <p className="text-sm text-[var(--text-s)]">
              A confirmation email and receipt will be sent shortly.
            </p>
          </div>
  
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="flex-1 rounded-xl bg-[var(--teal)] px-5 py-3 font-medium text-white transition hover:bg-[var(--teal-d)]"
            >
              Go to Dashboard
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