import { MultiSelect, MultiSelectProps } from "primereact/multiselect";

export default function UiMultiSelect({ ...props }: MultiSelectProps) {
    return (
        <div>
            <MultiSelect
                {...props}
                pt={{
                    root: {
                        className: 'flex bg-white rounded-2xl border-2 border-gray-100 p-2',
                    },
                    panel: {
                        className: 'bg-white rounded-2xl border-gray-100 overflow-y-auto shadow-sm',
                    },
                    header: {
                        className: 'w-full flex items-center justify-between mt-3 bg-white px-4 py-2',
                    },
                    headerCheckboxContainer:{
                        className: 'flex items-center gap-2',
                    },
                    headerCheckbox: {
                        root: {
                            className: "relative",
                        },
                        input: {
                            className:
                                "appearance-none absolute top-0 left-0 w-full h-full p-0 m-0 opacity-0 z-10 outline-none cursor-pointer",
                        },
                        box: {
                            className:
                                "w-[22px] h-[22px] border-2 border-gray-300 bg-white text-gray-600 rounded-[6px] transition-colors duration-200 flex items-center justify-center",
                        },
                    },
                    closeButton: {
                        className: 'text-gray-900 text-lg font-medium block max-w-full truncate cursor-pointer',
                    },
                    hiddenInputWrapper:{
                        className: 'w-0',
                    },
                    labelContainer: {
                        className: 'flex flex-1 min-w-0 items-center',
                    },
                    label: {
                        className: 'text-gray-900 text-lg font-medium block max-w-full truncate cursor-pointer',
                        token: {
                            content: {
                                className: 'text-gray-900 text-lg font-medium w-full bg-primary/10 px-3 py-1.5 truncate',
                            },
                        },
                    },
                    token: {
                        className: 'cursor-default inline-flex items-center rounded-full gap-1 px-2 mr-2 bg-gray-200 text-gray-600 truncate',
                    },
                    trigger: {
                        className: 'w-[40px] flex-shrink-0 flex items-center justify-center border-l border-gray-100 cursor-pointer',
                    },
                    list: {
                        className: 'w-full bg-white border-2 border-gray-100 flex flex-col gap-2 p-2',
                    },
                    itemGroup: {
                        className: 'w-full bg-gray-100 p-2 flex items-center ',
                    },
                    item: {
                        className: 'w-full bg-white p-2 rounded-xl highlight:text-primary hover:bg-primary/10 hover:text-primary transition-all cursor-pointer flex gap-2 items-center aria-selected:bg-primary/10 aria-selected:text-primary',
                        content: {
                            className: 'w-full flex items-center justify-between',
                            input: {
                                className: 'hidden',
                            },
                        },
                    },
                    checkbox: {
                        root: {
                            className: "relative",
                        },
                        input: {
                            className:
                                "appearance-none absolute top-0 left-0 w-full h-full p-0 m-0 opacity-0 z-10 outline-none cursor-pointer",
                        },
                        box: {
                            className:
                                "w-[22px] h-[22px] border-2 border-gray-300 bg-white text-gray-600 rounded-[6px] transition-colors duration-200 flex items-center justify-center",
                        },
                    }
                }}
            />
        </div>
    );
}
