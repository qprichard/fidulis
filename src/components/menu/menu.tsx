import "./menu.scss";
import {ReactElement} from "react";
import {useLocation, useNavigate} from "react-router-dom";

interface MenuProps {
    className?: string;
    children?: ReactElement
}

export const Menu = ({className}: MenuProps) => {
    return (
        <BaseMenu className={className}>
            <MenuRow title='le cabinet' className='huge' path='/cabinet'/>
        </BaseMenu>
    )

}

export const BaseMenu = ({className, children}: MenuProps) => {
    return (
        <div className={`menu-container ${className ? className : ''}`}>
            {children}
            <MenuRow title='conseil' path='/conseil'/>
            <MenuRow title='contentieux' subtitle='Individuels et Collectifs' path='/contentieux'/>
            <MenuRow title='formation' path='/formation'/>
            <MenuRow title='audit' path='/audit'/>
        </div>
    )
}

interface MenuRowProps {
    title: string;
    subtitle?: string;
    path: string;
    className?: string
}

const MenuRow = ({title, path, subtitle, className}: MenuRowProps) => {
    const {pathname} = useLocation();
    const navigate = useNavigate();
    return (
        <div
            className={`menu-row ${pathname === path ? ' selected ' : ''} ${className ? className : ''}`}
            onClick={() => navigate(path)}
        >
            <div className={`menu-title`}>{title.toUpperCase()}</div>
            {subtitle ? <div className={`subtitle`}>{subtitle}</div> : null}
        </div>
    );
}