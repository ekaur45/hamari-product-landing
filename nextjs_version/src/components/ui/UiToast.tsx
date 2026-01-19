import { Toast } from "primereact/toast";
import { useRef } from "react";

export default function UiToast() {
    const toast = useRef<Toast>(null);
    return (
        <Toast ref={toast} />
    )
}