import {createContext, ReactElement} from "react";

interface ModalProps {
    title: string;
    subtitle: string;
    content: ReactElement;
    open: boolean;
    onClose: () => void;
}

export const Modal = ({title, subtitle, content, open, onClose}: ModalProps) => (
    open ?
        <div className="modal-background" onClick={() => onClose()}>
            <div className="modal">
                <div className="modal-title-block">
                    <div className="modal-title">{title}</div>
                    <div className="modal-subtitle">{subtitle}</div>
                </div>
                <div className="modal-content">
                    {content}
                </div>
            </div>
        </div>
        : null
);