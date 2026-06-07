"use client";

import { useEffect } from "react";
import clsx from "clsx";
import { AlertTriangle, Loader2 } from "lucide-react";

interface ConfirmationModalProps {
    open: boolean;
    title?: string;
    message?: React.ReactNode;
    confirmText?: string;
    cancelText?: string;
    loading?: boolean;
    destructive?: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

export default function UiConfirmationModal({
    open,
    title = "Confirm Action",
    message,
    confirmText = "Confirm",
    cancelText = "Cancel",
    loading = false,
    destructive = false,
    onConfirm,
    onCancel,
}: ConfirmationModalProps) {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && !loading) {
                onCancel();
            }
        };

        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener(
                "keydown",
                handleEscape
            );
        };
    }, [loading, onCancel]);

    if (!open) return null;

    return (
        <div
            className="
                fixed inset-0 z-50
                flex items-center justify-center
                p-4
            "
        >
            {/* Backdrop */}
            <div
                className="
                    absolute inset-0
                    bg-black/70
                    backdrop-blur-sm
                "
                onClick={() => {
                    if (!loading) {
                        onCancel();
                    }
                }}
            />

            {/* Modal */}
            <div
                className="
                    relative z-10
                    w-full max-w-md
                    overflow-hidden
                    rounded-2xl
                    border border-[var(--border)]
                    bg-[var(--dark2)]
                    shadow-2xl
                    backdrop-blur-xl
                    animate-in fade-in zoom-in-95
                    duration-200
                "
            >
                <div className="p-6">
                    <div className="flex items-start gap-4">
                        <div
                            className={clsx(
                                "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
                                destructive
                                    ? "bg-red-500/15 text-[var(--red)]"
                                    : "bg-[var(--teal)]/15 text-[var(--teal-l)]"
                            )}
                        >
                            <AlertTriangle size={22} />
                        </div>

                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-[var(--text)]">
                                {title}
                            </h3>

                            {message && (
                                <div className="mt-2 text-sm leading-6 text-[var(--text-m)]">
                                    {message}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end gap-3">
                        <button
                            type="button"
                            disabled={loading}
                            onClick={onCancel}
                            className="
                                rounded-xl
                                border border-[var(--border)]
                                bg-[var(--glass)]
                                px-4 py-2
                                text-sm font-medium
                                text-[var(--text)]
                                transition-all
                                hover:border-[var(--border-h)]
                            "
                        >
                            {cancelText}
                        </button>

                        <button
                            type="button"
                            disabled={loading}
                            onClick={onConfirm}
                            className={clsx(
                                `
                                inline-flex items-center gap-2
                                rounded-xl
                                px-4 py-2
                                text-sm font-medium
                                text-white
                                transition-all
                                disabled:opacity-70
                                `,
                                destructive
                                    ? "bg-[var(--red)] hover:brightness-110"
                                    : "bg-[var(--teal)] hover:bg-[var(--teal-l)]"
                            )}
                        >
                            {loading && (
                                <Loader2
                                    size={16}
                                    className="animate-spin"
                                />
                            )}

                            {confirmText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}