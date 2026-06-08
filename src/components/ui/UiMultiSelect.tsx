'use client';

import {
    Check,
    ChevronDown,
    ChevronUp,
    X,
    XCircle,
} from 'lucide-react';
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

interface UiMultiSelectProps {
    options: SelectOption[];
    value?: string[];
    className?: string;
    placeholder?: string;
    searchable?: boolean;
    loading?: boolean;
    disabled?: boolean;
    onChange?: (value: string[]) => void;
    maxVisibleChips?: number;
}

export default function UiMultiSelect({
    options,
    value = [],
    className = '',
    placeholder = 'Select options',
    searchable = true,
    loading = false,
    disabled = false,
    onChange,
    maxVisibleChips = 2,
}: UiMultiSelectProps) {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [highlighted, setHighlighted] =
        useState(0);

    const ref = useRef<HTMLDivElement>(null);

    const selectedOptions = useMemo(
        () =>
            options.filter(option =>
                value.includes(option.value)
            ),
        [options, value]
    );

    const visibleSelections =
        selectedOptions.slice(
            0,
            maxVisibleChips
        );

    const hiddenCount =
        selectedOptions.length -
        visibleSelections.length;

    const filteredOptions = useMemo(() => {
        if (!search.trim()) return options;

        return options.filter(option =>
            option.label
                .toLowerCase()
                .includes(
                    search.toLowerCase()
                )
        );
    }, [options, search]);

    useEffect(() => {
        const handleOutside = (
            event: MouseEvent
        ) => {
            if (
                ref.current &&
                !ref.current.contains(
                    event.target as Node
                )
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

    const toggleOption = (
        option: SelectOption
    ) => {
        if (option.disabled) return;

        const exists = value.includes(
            option.value
        );

        if (exists) {
            onChange?.(
                value.filter(
                    v => v !== option.value
                )
            );
        } else {
            onChange?.([
                ...value,
                option.value,
            ]);
        }
    };

    const removeOption = (
        optionValue: string
    ) => {
        onChange?.(
            value.filter(
                v => v !== optionValue
            )
        );
    };

    const clearAll = (
        e: React.MouseEvent
    ) => {
        e.stopPropagation();
        onChange?.([]);
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
                        filteredOptions.length -
                            1
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
                    filteredOptions[
                        highlighted
                    ];

                if (option) {
                    toggleOption(option);
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
                onClick={() =>
                    setOpen(prev => !prev)
                }
                className={`
                    flex h-[56px] w-full items-center justify-between
                    rounded-xl
                    border border-[var(--glass)]
                    bg-[var(--glass)]
                    px-4
                    text-left
                    transition-all
                    hover:border-[var(--teal-d)]
                    focus:border-[var(--teal-l)]
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                    ${className}
                `}
            >
                <div className="flex flex-1 items-center gap-2 overflow-hidden">
                    {selectedOptions.length >
                    0 ? (
                        <>
                            {visibleSelections.map(
                                option => (
                                    <span
                                        key={
                                            option.value
                                        }
                                        className="
                                            shrink-0
                                            inline-flex
                                            items-center
                                            gap-1
                                            rounded-lg
                                            border
                                            border-slate-700
                                            bg-[var(--glass)]
                                            px-2
                                            py-1
                                            text-xs
                                            text-white
                                        "
                                    >
                                        <span className="max-w-[100px] truncate">
                                            {
                                                option.label
                                            }
                                        </span>

                                        <span
                                            role="button"
                                            tabIndex={
                                                -1
                                            }
                                            onClick={e => {
                                                e.stopPropagation();
                                                removeOption(
                                                    option.value
                                                );
                                            }}
                                            className="cursor-pointer"
                                        >
                                            <X
                                                size={
                                                    12
                                                }
                                            />
                                        </span>
                                    </span>
                                )
                            )}

                            {hiddenCount >
                                0 && (
                                <span
                                    className="
                                        shrink-0
                                        rounded-lg
                                        border
                                        border-slate-700
                                        px-2
                                        py-1
                                        text-xs
                                        text-slate-300
                                    "
                                >
                                    +
                                    {
                                        hiddenCount
                                    }{' '}
                                    more
                                </span>
                            )}
                        </>
                    ) : (
                        <span className="truncate text-slate-500">
                            {
                                placeholder
                            }
                        </span>
                    )}
                </div>

                <div className="ml-3 flex shrink-0 items-center gap-2">
                    {value.length >
                        0 && (
                        <button
                            type="button"
                            onClick={
                                clearAll
                            }
                            className="
                                text-slate-400
                                transition-colors
                                hover:text-white
                            "
                        >
                            <XCircle
                                size={
                                    18
                                }
                            />
                        </button>
                    )}

                    {open ? (
                        <ChevronUp
                            size={18}
                        />
                    ) : (
                        <ChevronDown
                            size={18}
                        />
                    )}
                </div>
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
                                value={
                                    search
                                }
                                onChange={e =>
                                    setSearch(
                                        e
                                            .target
                                            .value
                                    )
                                }
                                placeholder="Search..."
                                className="
                                    w-full
                                    rounded-lg
                                    border border-slate-700
                                    bg-[var(--glass)]
                                    px-3 py-3
                                    text-sm text-white
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
                                    No results
                                    found
                                </div>
                            )}

                        {!loading &&
                            filteredOptions.map(
                                (
                                    option,
                                    index
                                ) => {
                                    const isSelected =
                                        value.includes(
                                            option.value
                                        );

                                    return (
                                        <button
                                            key={
                                                option.value
                                            }
                                            type="button"
                                            disabled={
                                                option.disabled
                                            }
                                            onClick={() =>
                                                toggleOption(
                                                    option
                                                )
                                            }
                                            className={`
                                                flex w-full items-center justify-between
                                                rounded-xl px-3 py-2.5
                                                text-left text-sm
                                                transition

                                                ${
                                                    highlighted ===
                                                    index
                                                        ? 'bg-[var(--glass)]'
                                                        : ''
                                                }

                                                ${
                                                    isSelected
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

                                            {isSelected && (
                                                <Check
                                                    size={
                                                        18
                                                    }
                                                />
                                            )}
                                        </button>
                                    );
                                }
                            )}
                    </div>
                </div>
            )}
        </div>
    );
}