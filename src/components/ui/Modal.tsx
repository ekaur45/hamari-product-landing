import { Dialog } from "primereact/dialog";
import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: ReactNode;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  closeOnOverlayClick?: boolean;
  width?: string;
}


export default function Modal({
  isOpen,
  onClose,
  title,
  children = <></>,
  width = "min-w-full md:min-w-4xl"
}: ModalProps) {

  return (<Dialog visible={isOpen} onHide={onClose} showHeader={false} modal={true} blockScroll={true} resizable={false} 
    className={`backdrop-blur-sm rounded-2xl ${width} md:min-h-4xl min-h-2xl`}
    maskClassName="backdrop-blur-sm bg-black/50 scrollbar-hide"
    maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)',overflowY: 'hidden' }}
  >
        <div
          className={`bg-white shadow-sm border border-gray-200 rounded-2xl w-full`}
        >
          {title && (
            <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
              <h2
                id="modal-title"
                className="flex font-semibold gap-1.5 items-start text-gray-900 text-lg"
              >
                {title}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 focus:outline-none w-8 h-8 hover:bg-primary/10 rounded-full hover:text-primary cursor-pointer flex items-center justify-center hover:scale-110 transition-all duration-300"
                aria-label="Close modal"
              >
                <em className="fas fa-times"></em>
              </button>
            </div>
          )}
          <div className="px-6 py-4">{children}</div>
        </div>
    </Dialog>
  );
};
