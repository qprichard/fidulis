import "./top.scss";
import {useNavigate} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import {useCallback, useContext} from "react";
import {BurgerMenuContext} from "../../components/burger-menu/burger-menu";

export const TopLayout = () => {
    const navigate = useNavigate();

    const burgerMnuCtx = useContext(BurgerMenuContext);
    const onBurgerClick = useCallback(() => {
        burgerMnuCtx.setOpen(!burgerMnuCtx.open)
    }, [burgerMnuCtx]);
    return (
        <>
            <div className="top-layout">
                <div className='logo-container'>
                    <img
                        src={`${process.env.PUBLIC_URL}/img/logo.png`}
                        className="logo" alt='Fidulis'
                        onClick={() => navigate('/')}
                    />
                </div>
                <div className="right-content">
                    <img onClick={() => navigate("/contact")} className="icon-button" src={`${process.env.PUBLIC_URL}/img/contact_icon.jpg`} alt='contact'/>
                    <img className="icon-button" src={`${process.env.PUBLIC_URL}/img/news_icon.jpg`} alt='news'/>
                    <MenuIcon className="menu-icon" onClick={onBurgerClick}/>
                </div>
            </div>
            <div className="top-layout-shadow"></div>
        </>
    );
}