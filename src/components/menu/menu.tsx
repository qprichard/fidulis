import "./menu.scss";
import {useCallback, useContext} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {BurgerMenuContext} from "../burger-menu/burger-menu";

interface MenuProps {
    className?: string;
}

export const Menu = ({className}: MenuProps) => {
    return (
        <div className={`menu-container ${className ? className : ''}`}>
            <MenuRow title='le cabinet' className='huge' path='/cabinet'/>
            <MenuRow title='conseil' path='/conseil'/>
            <MenuRow title='contentieux' subtitle='Individuels et Collectifs' path='/contentieux'/>
            <MenuRow title='formation' path='/formation'/>
            <MenuRow title='audit' path='/audit'/>
            <MenuRow title='contact et accès' path='/contact'/>
        </div>
    )
}

export const MiniMenu = ({className}: MenuProps) => (
    <div className={`menu-container ${className ? className : ''}`}>
        <MenuRow title='conseil' path='/conseil'/>
        <MenuRow title='contentieux' subtitle='Individuels et Collectifs' path='/contentieux'/>
        <MenuRow title='formation' path='/formation'/>
        <MenuRow title='audit' path='/audit'/>
    </div>
);

interface MenuRowProps {
    title: string;
    subtitle?: string;
    path: string;
    className?: string
}

const MenuRow = ({title, path, subtitle, className}: MenuRowProps) => {
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const {setOpen, open} = useContext(BurgerMenuContext);

    const onRowClick = useCallback((path: string) => {
        if (open) {
            setOpen(false);
        }
        navigate(path)
    }, [navigate, setOpen, open]);

    return (
        <div
            className={`menu-row ${pathname === path ? ' selected ' : ''} ${className ? className : ''}`}
            onClick={() => onRowClick(path)}
        >
            <div className={`menu-title`}>{title.toUpperCase()}</div>
            {subtitle ? <div className={`subtitle`}>{subtitle}</div> : null}
        </div>
    );
}