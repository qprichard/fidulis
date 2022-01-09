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
        <div className={`page-container fade-in-animation ${ className ? className : ''}`}>
            <img
                src={imgSrc}
                className={`page-img`}
                alt="img"
                onClick={onImageClick}
            />
            <MiniMenu className="page-menu"/>
            <div className={`page-title`}>
                <div>{title.toUpperCase()}</div>
            </div>
            <div className={`page-content ${buttons ? '' : 'full'}`}>
                <div className='page-text'>{content}</div>
                {buttons ? <div className='page-buttons'>{buttons}</div> : null}
            </div>
        </div>
    )
}