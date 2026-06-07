"use client";

import React, {
    forwardRef,
    InputHTMLAttributes,
    useEffect,
    useRef,
} from "react";
import clsx from "clsx";
import { Check, Minus } from "lucide-react";

export interface CheckboxProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string;
    description?: React.ReactNode;
    indeterminate?: boolean;
}

const UiCheckbox = forwardRef<HTMLInputElement, CheckboxProps>(
    (
        {
            label,
            description,
            className,
            indeterminate = false,
            disabled,
            checked,
            ...props
        },
        forwardedRef
    ) => {
        const inputRef = useRef<HTMLInputElement>(null);

        useEffect(() => {
            if (inputRef.current) {
                inputRef.current.indeterminate = indeterminate;
            }
        }, [indeterminate]);

        const assignRef = (node: HTMLInputElement | null) => {
            inputRef.current = node;

            if (typeof forwardedRef === "function") {
                forwardedRef(node);
            } else if (forwardedRef) {
                forwardedRef.current = node;
            }
        };

        return (
            <label
                className={clsx(
                    "group inline-flex items-start gap-3",
                    disabled
                        ? "cursor-not-allowed opacity-60"
                        : "cursor-pointer",
                    className
                )}
            >
                <div className="relative mt-0.5">
                    <input
                        {...props}
                        ref={assignRef}
                        type="checkbox"
                        disabled={disabled}
                        className="peer sr-only"
                        {...(checked !== undefined ? { checked } : {})}
                    />

                    <div
                        className="
              flex h-5 w-5 items-center justify-center
              rounded-md
              border
              border-[var(--border)]
              bg-[var(--glass)]
              backdrop-blur-md
              transition-all duration-200

              group-hover:border-[var(--border-h)]

              peer-checked:border-[var(--teal)]
              peer-checked:bg-[var(--teal)]

              peer-focus-visible:ring-2
              peer-focus-visible:ring-[var(--teal)]
              peer-focus-visible:ring-offset-2
              peer-focus-visible:ring-offset-[var(--dark)]
            "
                    >
                        {indeterminate ? (
                            <Minus
                                size={14}
                                strokeWidth={3}
                                className="text-white"
                            />
                        ) : (
                            <Check
                                size={14}
                                strokeWidth={3}
                                className={clsx(
                                    "text-white transition-all duration-200",
                                    checked
                                        ? "scale-100 opacity-100"
                                        : "scale-0 opacity-0"
                                )}
                            />
                        )}
                    </div>

                    {checked && (
                        <div
                            className="
                pointer-events-none
                absolute inset-0
                rounded-md
                shadow-[0_0_12px_rgba(45,212,191,0.35)]
              "
                        />
                    )}
                </div>

                {(label || description) && (
                    <div className="flex flex-col">
                        {label && (
                            <span className="text-sm font-medium text-[var(--text)]">
                                {label}
                            </span>
                        )}

                        {description && (
                            <div className="mt-1 text-xs text-[var(--text-m)]">
                                {description}
                            </div>
                        )}
                    </div>
                )}
            </label>
        );
    }
);

UiCheckbox.displayName = "UiCheckbox";

export default UiCheckbox;