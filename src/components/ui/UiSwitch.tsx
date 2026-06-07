"use client";

import { forwardRef } from "react";

interface UiSwitchProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type"
  > {
  label?: string;
}

const UiSwitch = forwardRef<HTMLInputElement, UiSwitchProps>(
  ({ label, ...props }, ref) => {
    return (
      <label className="inline-flex cursor-pointer items-center gap-3">
        {label && (
          <span className="text-sm font-medium text-[var(--text)]">
            {label}
          </span>
        )}

        <div className="relative">
          <input
            ref={ref}
            type="checkbox"
            className="peer sr-only"
            {...props}
          />

          <div
            className="
              h-7 w-14 rounded-full
              border border-[var(--border)]
              bg-[var(--glass)]
              backdrop-blur-xl
              transition-all duration-300
              peer-checked:border-[var(--teal)]
              peer-checked:bg-[var(--teal)]
              peer-focus-visible:ring-2
              peer-focus-visible:ring-[var(--teal)]
            "
          />

          <div
            className="
              absolute left-1 top-1
              h-5 w-5 rounded-full
              bg-white
              shadow-lg
              transition-all duration-300
              peer-checked:translate-x-7
            "
          />

          <div
            className="
              absolute left-0 top-0
              h-7 w-14 rounded-full
              opacity-0
              transition-opacity duration-300
              peer-checked:opacity-100
              peer-checked:shadow-[0_0_20px_rgba(45,212,191,0.6)]
            "
          />
        </div>
      </label>
    );
  }
);

UiSwitch.displayName = "Switch";

export default UiSwitch;