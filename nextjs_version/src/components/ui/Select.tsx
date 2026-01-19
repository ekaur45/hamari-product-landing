import { Dropdown as DropdownComponent, DropdownProps } from 'primereact/dropdown';
export default function UISelect({ ...props }: DropdownProps) {
    return (
        <div>
            <DropdownComponent 
            {...props}
            pt={
                {
                    root: {
                        className: 'w-full cursor-pointer flex items-center justify-center gap-2 px-4 py-2 bg-white border-2 border-gray-100 text-gray-900 font-bold rounded-xl hover:bg-gray-50 hover:text-gray-900 hover:border-gray-200 hover:shadow-md transition-all'
                    },
                    filterContainer: {
                        className: 'w-full flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-gray-100 text-gray-900 font-bold rounded-xl hover:bg-gray-50 hover:text-gray-900 hover:border-gray-200 hover:shadow-md transition-all'
                    },
                    filterInput: {
                        className: 'text-gray-900 text-lg font-medium w-full'
                    },
                    input: {
                        className: 'text-gray-900 text-lg font-medium w-full'
                    },
                    list: {
                        className: 'bg-white border border-gray-300 shadow-lg rounded-xl p-2 w-full'
                    },
                    item: {
                        className: 'text-gray-900 text-lg font-medium w-full px-3 py-2 cursor-pointer hover:bg-primary/10 rounded-xl hover:border-primary hover:text-primary transition-all'
                    }
                }
            }
            />
        </div>
    )
}