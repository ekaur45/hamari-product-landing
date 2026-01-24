import { MultiSelect, MultiSelectProps } from "primereact/multiselect";

export default function UiMultiSelect({ ...props }: MultiSelectProps) {
    return (
        <div>
            <MultiSelect
                {...props}
                pt={{
                    root: {
                        className: 'w-full flex bg-white',
                    },
                    panel: {
                        className: 'bg-white border-2 border-gray-100 rounded-2xl overflow-y-auto max-h-48 shadow-sm',
                        
                    },
                    header: {
                        className: 'w-full flex items-center justify-between mb-3 bg-white rounded-2xl p-3'                        
                    },
                    labelContainer: {
                        className: 'w-full flex items-center justify-between',
                    },
                    label: {
                        className: 'text-gray-900 text-lg font-medium w-full block truncate cursor-pointer',
                        token: {
                            content: {
                                className: 'text-gray-900 text-lg font-medium w-full bg-primary/10 rounded-2xl px-3 py-1.5 truncate',
                            },
                        },
                    },
                    token: {
                        className: 'cursor-default inline-flex items-center py-1.5 px-3 mr-2 bg-gray-200 text-gray-600 rounded-2xl truncate',
                    },
                    list: {
                        className: 'w-full bg-white border-2 border-gray-100 rounded-2xl flex flex-col gap-2 p-2',
                    },
                    itemGroup: {
                        className: 'w-full bg-gray-100 p-2 flex items-center rounded-xl',
                    },
                    item: {
                        className: 'w-full bg-white p-2 hover:bg-primary/10 hover:text-primary transition-all cursor-pointer flex items-center rounded-xl',
                        content: {
                            className: 'w-full flex items-center justify-between',
                            input: {
                                className: 'hidden',
                            },
                        },
                    },
                    checkbox: {
                        root: {
                            className: "relative inline-flex select-none align-bottom",
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
