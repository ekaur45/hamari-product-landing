import { Menu as MenuComponent, MenuProps } from 'primereact/menu';
export default function UiMenu({ ref, ...props }: MenuProps & { ref?: React.RefObject<MenuComponent | null> }) {
    return (
         <MenuComponent {...props} ref={ref} 
         pt={{
            root: {
                className: 'focus-visible:outline-none',
            },
            menu: {
                className: 'bg-white border-2 border-gray-100 rounded-lg flex flex-col items-center justify-between p-1.5 min-w-48 focus-visible:outline-none',
            },
            menuitem: {
                className:'w-full flex',               
            },
            content:{
                className: 'w-full',
            },
            action:{
                className: 'w-full bg-white rounded-lg flex items-center justify-start gap-2 p-2 hover:bg-gray-100 transition-colors text-gray-900',
            },

            // action: {
            //     className: 'w-full bg-white border-2 border-gray-100 rounded-lg flex items-center justify-between p-2 hover:bg-gray-100 transition-colors text-gray-900',
            //     content: {
            //         className: 'w-full bg-white border-2 border-gray-100 rounded-lg flex items-center justify-between p-2 hover:bg-gray-100 transition-colors text-gray-900',
            //     },
            // }
         }}
         />
    )
}