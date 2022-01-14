import "./page-container.scss";
import "../../common/animations/fade-in-animation.scss";
import {ReactElement, useCallback} from "react";
import {MiniMenu} from "../menu/menu";

interface PageContainerProps {
    imgSrc: string;
    imgHref?: string;
    title: string
    content?: ReactElement;
    buttons?: ReactElement;
    className?: string;
}

export const PageContainer = ({content, imgSrc, imgHref, title, buttons, className}: PageContainerProps) => {
    const onImageClick = useCallback(() => {
        if (!imgHref) {
            return;
        }
        window.open(imgHref);
    }, [imgHref]);

    return (
        <div itemScope itemType="page" className={`page-container fade-in-animation ${className ? className : ''}`}>
            <div
                className={`page-img`}
                onClick={onImageClick}
            >
                <img src={imgSrc} alt="img" width="100%" height="100%"/>
            </div>
            <MiniMenu className="page-menu"/>
            <div className={`page-title`} itemProp="title">
                <div>{title.toUpperCase()}</div>
            </div>
            <div className={`page-content ${buttons ? '' : 'full'}`}>
                <div className='page-text' itemProp="informations">{content}</div>
                {buttons ? <div className='page-buttons' itemProp="navigation">{buttons}</div> : null}
            </div>
        </div>
    )
}