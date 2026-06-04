import { Calendar, CalendarProps } from "primereact/calendar";

export default function UiDatePicker({ ...props }: CalendarProps) {
    return (
        <div>
            <Calendar
                {...props}
                pt={{
                    root: {
                        className:
                            "w-full bg-white border-2 border-gray-100 rounded-2xl flex items-center justify-between",
                    },
                    select: {
                        className:
                            "w-full bg-white border-2 border-gray-100 rounded-2xl",
                    },
                    input: {
                        root: {
                            className:
                                "w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring focus:ring-primary focus:border-primary transition",
                        }
                    },
                    
                    panel: {
                        className:
                            "bg-white p-4 shadow-xl border border-gray-100 rounded-2xl w-auto",
                    },

                    header: {
                        className: "flex items-center justify-between mb-3",
                    },

                    title: {
                        className: "text-sm font-bold text-gray-900",
                    },

                    monthTitle: {
                        className: "mx-1 cursor-pointer hover:text-indigo-600",
                    },

                    yearTitle: {
                        className: "mx-1 cursor-pointer hover:text-indigo-600",
                    },

                    previousButton: {
                        className:
                            "p-2 rounded-lg hover:bg-gray-100 transition",
                    },

                    nextButton: {
                        className:
                            "p-2 rounded-lg hover:bg-gray-100 transition",
                    },

                    table: {
                        className: "border-collapse",
                    },

                    day: {
                        className:
                            "p-2 text-center rounded-lg cursor-pointer " +
                            "text-gray-900 hover:bg-primary/10 hover:text-primary transition",
                    },

                    // today: {
                    //   className:
                    //     'bg-indigo-100 text-indigo-700 font-bold'
                    // },

                    // disabledDay: {
                    //   className:
                    //     'text-gray-300 cursor-not-allowed'
                    // },

                    buttonbar: {
                        className:
                            "flex items-center justify-between pt-3 border-t border-gray-100",
                    },

                    todayButton: {
                        className:
                            "px-3 py-2 text-sm font-semibold text-primary-600 hover:bg-primary-50 rounded-lg",
                    },

                    clearButton: {
                        className:
                            "px-3 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100 rounded-lg",
                    },
                }}
            />
        </div>
    );
}
