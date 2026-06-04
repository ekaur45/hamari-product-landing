import { useState, ReactNode } from "react";

type TooltipPosition = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  className?: string;
  children: ReactNode;
  content: ReactNode;
  position?: TooltipPosition;
  classNameTooltip?: string;
}

export default function Tooltip({
  className,
  children,
  content,
  position = "top",
  classNameTooltip,
}: TooltipProps) {
  const [open, setOpen] = useState<boolean>(false);

  const positionClasses: Record<TooltipPosition, string> = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <span
      className={`relative inline-flex ${className}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      tabIndex={0}
    >
      {children}

      <span
        role="tooltip"
        className={`
          pointer-events-none absolute z-500
          ${positionClasses[position]}
          transition-all duration-200 ease-out
          ${open ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          ${classNameTooltip ? classNameTooltip : "bg-gray-900 text-white rounded-md px-3 py-1.5 text-xs shadow-lg"}
        `}
      >
        {content}
      </span>
    </span>
  );
}
