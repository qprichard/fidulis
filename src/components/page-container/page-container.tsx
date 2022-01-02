import "./page-container.scss";
import "../../common/animations/fade-in-animation.scss";
import {ReactElement, useCallback} from "react";

interface PageContainerProps {
    imgSrc: string;
    imgHref?: string;
    title: string
    content?: ReactElement;
    buttons?: ReactElement;
}

export const PageContainer = ({content, imgSrc, title, imgHref, buttons}: PageContainerProps) => {
    const onImageClick = useCallback(() => {
        if (!imgHref) {
            return;
        }
        window.open(imgHref);
    }, [imgHref]);

    return (
        <div className="page-container fade-in-animation">
            <img
                src={imgSrc}
                className='page-img'
                alt="img"
                onClick={onImageClick}
            />
            <div className='page-title'>
                <div>{title.toUpperCase()}</div>
            </div>
            <div className='page-content'>{content}</div>
            {buttons ? <div className='page-buttons'>{buttons}</div> : null}
        </div>
    )
}