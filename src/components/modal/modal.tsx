import ReactDOM from "react-dom";
import "./modal.scss";
import React, {createContext, ReactElement, useContext, useState} from "react";

interface ModalContextProps {
    open: boolean,
    setOpen: (value: boolean) => void,
    modal: ReactElement | null,
    setModal: (value: ReactElement) => void,
}

const useModal = () => {
    let [open, setOpen] = useState<boolean>(false);
    let [modal, setModal] = useState<ReactElement | null>(null);

    return {modal, setModal, open, setOpen};
};

const ModalContext = createContext<ModalContextProps>({
    modal: null,
    setModal: () => {
    },
    open: false,
    setOpen: () => {
    }
});


const Overlay = () => {
    const {modal, setOpen, open} = useContext(ModalContext);
    return ReactDOM.createPortal(
        <div className={`modal-background ${open ? 'open' : ''}`}onClick={() => setOpen(false)}>
            {modal}
        </div>,
        document.querySelector("#modal-root") as Element
    );
}

const ModalProvider = ({children}: any) => {
    let modalHook = useModal();
    return (
        <ModalContext.Provider value={{...modalHook}}>
            <Overlay/>
            {children}
        </ModalContext.Provider>
    );
};

const Header = ({children}: any) => <div className="modal-header">{children}</div>;

const Body = ({children}: any) => <div className="modal-content">
    <div className="modal-body">
        {children}
    </div>
</div>

const Modal = ({children}: any) => {
    return (
        <div className="modal" onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    );
};

Modal.Header = Header;
Modal.Body = Body;

export {ModalContext, ModalProvider, Modal};