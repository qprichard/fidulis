import "./home.scss";
import {useCallback, useEffect, useState} from "react";
import {Menu} from "../../components/menu/menu";

export const Home = () => {
    const [preview, setPreview] = useState(false);
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        setTimeout(() => setPreview(true), 250);
    }, []);

    const activeMenu = useCallback(() => {
        setPreview(false);
        setTimeout(() => setMenu(true), 500);
    }, [setPreview, setMenu]);

    return (
        <div className='home-container'>
            {
                !menu ?
                    <Preview preview={preview} activeMenu={activeMenu}/>
                    :
                    <Menu className='right-menu'></Menu>
            }
        </div>
    );
}


interface PreviewProps {
    activeMenu: () => void,
    preview: boolean
}

const Preview = ({activeMenu, preview}: PreviewProps) => (
    <div className={`preview-container`} onClick={() => activeMenu()}>
        <div className={`expertise + ${preview ? '' : 'hidden'}`}>EXPERTISE</div>
        <div className={`ecoute + ${preview ? '' : 'hidden'}`}>ÉCOUTE</div>
        <div className={`reactivite + ${preview ? '' : 'hidden'}`}>RÉACTIVITÉ</div>
        <div className={`strategie + ${preview ? '' : 'hidden'}`}>STRATÉGIE</div>
        <div className={`negociation + ${preview ? '' : 'hidden'}`}>NÉGOCIATION</div>
        <div className={`confiance + ${preview ? '' : 'hidden'}`}>CONFIANCE</div>
        <div className={`savoir-faire + ${preview ? '' : 'hidden'}`}>SAVOIR-FAIRE</div>
        <div className={`teletravail + ${preview ? '' : 'hidden'}`}>TÉLÉTRAVAIL</div>
        <div className={`contestation + ${preview ? '' : 'hidden'}`}>CONTESTATION</div>
        <div className={`licenciement + ${preview ? '' : 'hidden'}`}>LICENCIEMENT</div>
        <div className={`solutions + ${preview ? '' : 'hidden'}`}>SOLUTIONS</div>
        <div className={`prudhommes + ${preview ? '' : 'hidden'}`}>PRUD'HOMMES</div>
        <div className={`contentieux + ${preview ? '' : 'hidden'}`}>CONTENTIEUX</div>
        <div className={`accidents + ${preview ? '' : 'hidden'}`}>ACCIDENTS DU &nbsp;&nbsp;&nbsp; TRAVAIL</div>
    </div>
);

