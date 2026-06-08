"use client";

import { XIcon } from "lucide-react";
import { useEffect } from "react";

type ModalProps = {
  open: boolean;
  title?: string;
  onClose: () => void;
  onConfirm?: () => void;
  children: React.ReactNode;
  showFooter?:boolean
};

export default function UiModal({
  open,
  title,
  onClose,
  onConfirm,
  children,
  showFooter
}: ModalProps) {
  // close on ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onMouseDown={onClose}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* modal */}
      <div
        onMouseDown={(e) => e.stopPropagation()}
        className="
          relative w-[92%] max-w-lg
          rounded-2xl
          border border-[var(--border)]
          bg-[var(--dark2)]
          shadow-2xl
        "
      >
        {/* header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border)]">
          <h2 className="text-[var(--text)] text-lg font-semibold">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="
              text-[var(--text-m)]
              hover:text-[var(--teal-l)]
              transition
            "
          >
            <XIcon/>
          </button>
        </div>

        {/* body */}
        <div className="p-5 text-[var(--text-m)]">
          {children}
        </div>

        {/* footer (optional slot style) */}
        {showFooter===true && <div className="px-5 py-4 border-t border-[var(--border)] flex justify-end gap-2">
          <button
            onClick={onClose}
            className="
              px-4 py-2 rounded-lg
              border border-[var(--border)]
              text-[var(--text-m)]
              hover:border-[var(--border-h)]
              transition
            "
          >
            Cancel
          </button>

          <button
           onClick={onConfirm}
            className="
              px-4 py-2 rounded-lg
              bg-[var(--teal)]
              hover:bg-[var(--teal-l)]
              text-white
              transition
            "
          >
            Confirm
          </button>
        </div>}
      </div>
    </div>
  );
}