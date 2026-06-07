'use client';

import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';

interface DatePickerProps {
    value?: Date | null;
    onChange?: (date: Date | null) => void;
    placeholder?: string;
    minDate?: Date;
    maxDate?: Date;
    disabled?: boolean;
}

export default function UiDatePicker({
    value,
    onChange,
    placeholder = 'Select date',
    minDate,
    maxDate,
    disabled = false,
}: DatePickerProps) {
    const [open, setOpen] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(
        value ?? new Date()
    );

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (
                ref.current &&
                !ref.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClick);

        return () =>
            document.removeEventListener(
                'mousedown',
                handleClick
            );
    }, []);

    const monthName = currentMonth.toLocaleString('default', {
        month: 'long',
    });

    const year = currentMonth.getFullYear();

    const days = useMemo(() => {
        const start = new Date(year, currentMonth.getMonth(), 1);

        const end = new Date(
            year,
            currentMonth.getMonth() + 1,
            0
        );

        const firstDay = start.getDay();

        const result: (Date | null)[] = [];

        for (let i = 0; i < firstDay; i++) {
            result.push(null);
        }

        for (let day = 1; day <= end.getDate(); day++) {
            result.push(
                new Date(
                    year,
                    currentMonth.getMonth(),
                    day
                )
            );
        }

        return result;
    }, [currentMonth, year]);

    const formatDate = (date?: Date | null) => {
        if (!date) return '';

        return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });
    };

    const isSelected = (date: Date) => {
        if (!value) return false;

        return (
            date.toDateString() === value.toDateString()
        );
    };

    const isToday = (date: Date) => {
        return (
            date.toDateString() ===
            new Date().toDateString()
        );
    };

    const isDisabledDate = (date: Date) => {
        if (minDate && date < minDate) return true;
        if (maxDate && date > maxDate) return true;
        return false;
    };

    return (
        <div
            ref={ref}
            className="relative w-full"
        >
            <button
                type="button"
                disabled={disabled}
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between rounded-xl border border-slate-300 bg-[var(--glass)] px-4 py-3 text-left shadow-sm transition hover:border-slate-400"
            >
                <span
                    className={
                        value
                            ? 'text-slate-900'
                            : 'text-slate-400'
                    }
                >
                    {value
                        ? formatDate(value)
                        : placeholder}
                </span>

                <span>
                    <Calendar/>
                </span>
            </button>

            {open && (
                <div className="absolute z-50 mt-2 w-full rounded-2xl border border-slate-200 bg-[var(--glass)] backdrop-blur-xl p-4 shadow-xl">
                    <div className="mb-4 flex items-center justify-between">
                        <button
                            type="button"
                            onClick={() =>
                                setCurrentMonth(
                                    new Date(
                                        year,
                                        currentMonth.getMonth() - 1,
                                        1
                                    )
                                )
                            }
                            className="rounded-lg p-2 hover:bg-slate-100"
                        >
                        <ArrowLeft/>
                        </button>

                        <div className="font-semibold">
                            {monthName} {year}
                        </div>

                        <button
                            type="button"
                            onClick={() =>
                                setCurrentMonth(
                                    new Date(
                                        year,
                                        currentMonth.getMonth() + 1,
                                        1
                                    )
                                )
                            }
                            className="rounded-lg p-2 hover:bg-slate-100"
                        >
                            <ArrowRight/>
                        </button>
                    </div>

                    <div className="mb-2 grid grid-cols-7 text-center text-xs font-semibold text-[var(--teal-l)]">
                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(
                            day => (
                                <div key={day}>
                                    {day}
                                </div>
                            )
                        )}
                    </div>

                    <div className="grid grid-cols-7 gap-1">
                        {days.map((date, index) =>
                            date ? (
                                <button
                                    key={index}
                                    type="button"
                                    disabled={isDisabledDate(
                                        date
                                    )}
                                    onClick={() => {
                                        onChange?.(date);
                                        setOpen(false);
                                    }}
                                    className={[
                                        'avail-slot',
                                        isSelected(date)
                                            ? 'bg-blue-600 text-white'
                                            : '',
                                        isToday(date) &&
                                        !isSelected(date)
                                            ? 'border border-[var(--teal)]'
                                            : '',
                                        !isSelected(date)
                                            ? 'hover:bg-slate-100'
                                            : '',
                                        isDisabledDate(date)
                                            ? 'taken'
                                            : '',
                                    ].join(' ')}
                                >
                                    {date.getDate()}
                                </button>
                            ) : (
                                <div
                                    key={index}
                                    className="h-10"
                                />
                            )
                        )}
                    </div>

                    <div className="mt-4 flex gap-2 border-t pt-4">
                        <button
                            type="button"
                            onClick={() =>
                                onChange?.(new Date())
                            }
                            className="btn btn-glow"
                        >
                            Today
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                onChange?.(null)
                            }
                            className="btn btn-ghost"
                        >
                            Clear
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}