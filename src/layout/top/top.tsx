import "./top.scss";
import {useNavigate} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import {useCallback, useContext, useEffect, useState} from "react";
import {BurgerMenuContext} from "../../components/burger-menu/burger-menu";
import {Menu, MenuItem} from "@mui/material";

export const TopLayout = () => {
    

    const navigate = useNavigate();

    const burgerMnuCtx = useContext(BurgerMenuContext);
    const onBurgerClick = useCallback(() => {
        burgerMnuCtx.setOpen(!burgerMnuCtx.open)
    }, [burgerMnuCtx]);

    const [anchor, setAnchor] = useState<Element | null>(null);
    const open = Boolean(anchor);
    const handleNewsClick = useCallback((event) => {
        setAnchor(event.currentTarget);
    }, [setAnchor]);

    const handleClose = useCallback(() => {
        setAnchor(null);
    }, [setAnchor]);

    const handleNewClick = useCallback((fileName?: string) => {
        setAnchor(null);
        if(!fileName) {
            return;
        }
        window.open(`${process.env.PUBLIC_URL}/pdf/${fileName}`);
    }, [setAnchor])

    const [items, setItems] = useState<JSX.Element[]>([]);
    const fetchData = useCallback(async () => {
        const data = await fetch(
            `${process.env.PUBLIC_URL}/pdf/metadata.json`,
            {
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
              }
            
            )
            .then((r) => r.json())
            .then((d:{name: string, file: string}[]) => d);
        const newItems = data.map(({name, file}) => <MenuItem onClick={() => handleNewClick(file)}>{name}</MenuItem>);
        setItems(newItems);
    }, [setItems, handleNewClick, items])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return (
        <>
            <div className="top-layout">
                <div className='logo-container'>
                    <img
                        src={`${process.env.PUBLIC_URL}/img/logo.svg`}
                        className="logo" alt='Fidulis'
                        onClick={() => navigate('/')}
                    />
                </div>
                <div className="right-content">
                    <img onClick={handleNewsClick} className="news-button" src={`${process.env.PUBLIC_URL}/img/news_icon.jpg`} alt='news'/>
                    <img onClick={() => navigate("/contact")} className="contact-button" src={`${process.env.PUBLIC_URL}/img/contact_icon.jpg`} alt='contact'/>
                    <MenuIcon className="menu-icon" onClick={onBurgerClick}/>
                    <Menu
                        id='news-menu'
                        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        anchorEl={anchor}
                        open={open}
                        onClose={handleClose}
                    >
                        {items}
                    </Menu>
                </div>
            </div>
            <div className="top-layout-shadow"></div>
        </>
    );
}