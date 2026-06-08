'use client';

import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import {
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

export interface SelectOption {
    label: string;
    value: string;
    disabled?: boolean;
}

interface UiSelectProps {
    options: SelectOption[];
    value?: string;
    className?:string;
    placeholder?: string;
    searchable?: boolean;
    loading?: boolean;
    disabled?: boolean;
    onChange?: (value: string) => void;
}

export default function UiSelect({
    options,
    value,
    className,
    placeholder = 'Select option',
    searchable = true,
    loading = false,
    disabled = false,
    onChange,
}: UiSelectProps) {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [highlighted, setHighlighted] = useState(0);

    const ref = useRef<HTMLDivElement>(null);

    const selected = useMemo(
        () => options.find(o => o.value === value),
        [options, value]
    );

    const filteredOptions = useMemo(() => {
        if (!search) return options;

        return options.filter(option =>
            option.label
                .toLowerCase()
                .includes(search.toLowerCase())
        );
    }, [options, search]);

    useEffect(() => {
        const handleOutside = (event: MouseEvent) => {
            if (
                ref.current &&
                !ref.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener(
            'mousedown',
            handleOutside
        );

        return () =>
            document.removeEventListener(
                'mousedown',
                handleOutside
            );
    }, []);

    const selectOption = (option: SelectOption) => {
        if (option.disabled) return;

        onChange?.(option.value);
        setOpen(false);
        setSearch('');
    };

    const handleKeyDown = (
        event: React.KeyboardEvent
    ) => {
        if (!open) return;

        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                setHighlighted(prev =>
                    Math.min(
                        prev + 1,
                        filteredOptions.length - 1
                    )
                );
                break;

            case 'ArrowUp':
                event.preventDefault();
                setHighlighted(prev =>
                    Math.max(prev - 1, 0)
                );
                break;

            case 'Enter':
                event.preventDefault();

                const option =
                    filteredOptions[highlighted];

                if (option) {
                    selectOption(option);
                }

                break;

            case 'Escape':
                setOpen(false);
                break;
        }
    };

    return (
        <div
            ref={ref}
            className="relative w-full"
            onKeyDown={handleKeyDown}
        >
            <button
                type="button"
                disabled={disabled}
                onClick={() => setOpen(v => !v)}
                className={`
                    flex w-full items-center justify-between
                    rounded-xl
                    border border-[var(--glass)]
                    bg-[var(--glass)]
                    px-4 py-4
                    text-left
                    text-slate-100
                    transition-all
                    hover:border-[var(--teal-d)]
                    focus:border-[var(--teal-l)]
                    ${className}
                `}
            >
                <span
                    className={
                        selected
                            ? 'text-slate-100'
                            : 'text-slate-500'
                    }
                >
                    {selected?.label ?? placeholder}
                </span>
                {open?<ChevronUp/>:<ChevronDown/>}
            </button>

            {open && (
                <div
                    className="
                        absolute z-50 mt-2 w-full
                        overflow-hidden
                        rounded-2xl
                        border border-slate-700
                        bg-[var(--glass)]
                        backdrop-blur-xl
                        shadow-2xl
                    "
                >
                    {searchable && (
                        <div className="border-b border-slate-700 p-3">
                            <input
                                value={search}
                                onChange={e =>
                                    setSearch(
                                        e.target.value
                                    )
                                }
                                placeholder="Search..."
                                className="
                                    w-full
                                    rounded-lg
                                    border border-slate-700
                                    bg-[var(--glass)]
                                    px-3 py-3
                                    text-sm
                                    text-white
                                    outline-none
                                    focus:border-[var(--teal-l)]
                                "
                            />
                        </div>
                    )}

                    <div className="max-h-72 overflow-y-auto p-2">
                        {loading && (
                            <div className="p-4 text-center text-slate-400">
                                Loading...
                            </div>
                        )}

                        {!loading &&
                            filteredOptions.length ===
                                0 && (
                                <div className="p-4 text-center text-slate-500">
                                    No results found
                                </div>
                            )}

                        {!loading &&
                            filteredOptions.map(
                                (
                                    option,
                                    index
                                ) => (
                                    <button
                                        key={
                                            option.value
                                        }
                                        type="button"
                                        disabled={
                                            option.disabled
                                        }
                                        onClick={() =>
                                            selectOption(
                                                option
                                            )
                                        }
                                        className={`
                                            flex w-full items-center justify-between
                                            rounded-xl px-3 py-2.5
                                            text-left text-sm
                                            transition
                                            
                                            
                                            
                                            ${
                                                value ===
                                                option.value
                                                    ? 'bg-[var(--glass)] text-white'
                                                    : 'text-slate-200 hover:bg-[var(--glass)]'
                                            }
                                            
                                            ${
                                                option.disabled
                                                    ? 'cursor-not-allowed opacity-40'
                                                    : ''
                                            }
                                        `}
                                    >
                                        <span>
                                            {
                                                option.label
                                            }
                                        </span>

                                        {value ===
                                            option.value && (
                                            <span>
                                                <Check/>
                                            </span>
                                        )}
                                    </button>
                                )
                            )}
                    </div>
                </div>
            )}
        </div>
    );
}