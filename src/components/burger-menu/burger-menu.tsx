import {createContext, useCallback, useContext, useState} from "react";
import {Menu} from "../menu/menu";
import './burger-menu.scss';

interface BurgerMenuCtxProps {
    open: boolean;
    setOpen: (value: boolean) => void,
}

const useBurgerMenu = () => {
    const [open, setOpen] = useState<boolean>(false);

    return {open, setOpen};
}
const BurgerMenuContext = createContext<BurgerMenuCtxProps>({
    open: false,
    setOpen: () => {
    }
});

const BurgerMenu = () => {
    const {open, setOpen} = useContext(BurgerMenuContext);

    const overlayClick = useCallback((event: any) => {
        event?.stopPropagation();
        setOpen(false);
    }, [setOpen]);

    return (
        <div className={`burger-menu-overlay ${open ? 'open' : ''}`} onClick={(event: any) => overlayClick(event)}>
            <div className={`burger-menu-container`}>
                <Menu className="burger-menu"/>
            </div>
        </div>
    )
}

const BurgerMenuProvider = ({children}: any) => {
    const burgerMenuHooks = useBurgerMenu();
    return <BurgerMenuContext.Provider value={{...burgerMenuHooks}}>
        <BurgerMenu/>
        {children}
    </BurgerMenuContext.Provider>
};

export {BurgerMenuContext, BurgerMenuProvider};
