"use client";

import clsx from "clsx";

export interface SelectOption {
    label: string;
    value: string;
    icon?: React.ReactNode;
}

interface UiSelectGroupProps {
    options: SelectOption[];
    value: string;
    onChange: (value: string) => void;
    className?: string;
}

export default function UiSelectGroup({
    options,
    value,
    onChange,
    className,
}: UiSelectGroupProps) {
    return (
        <div
            className={clsx(
                "grid gap-2 rounded-xl bg-[var(--glass)] p-1 backdrop-blur-md",
                className
            )}
            style={{
                gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))`,
            }}
        >
            {options.map((option) => {
                const active = value === option.value;

                return (
                    <button
                        key={option.value}
                        type="button"
                        onClick={() => onChange(option.value)}
                        className={clsx(
                            "flex items-center justify-center gap-2",
                            "rounded-lg px-4 py-2.5",
                            "text-sm font-medium",
                            "transition-all duration-200",
                            active
                                ? "bg-[var(--teal)] text-white shadow-[0_0_12px_rgba(45,212,191,0.35)]"
                                : "text-[var(--text-m)] hover:text-[var(--text)] hover:bg-white/5"
                        )}
                    >
                        {option.icon}
                        {option.label}
                    </button>
                );
            })}
        </div>
    );
}