import "./page-container.scss";
import "../../common/animations/fade-in-animation.scss";

import {BaseMenu} from "../menu/menu";
import {ReactElement, useCallback} from "react";

interface PageContainerProps {
    imgSrc: string;
    imgHref?: string;
    title: string
    content?: ReactElement;
}

export const PageContainer = ({content, imgSrc, title, imgHref}: PageContainerProps) => {
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
            <div className='page-menu'>
                <BaseMenu/>
            </div>
            <div className='page-title'>
                <div>{title.toUpperCase()}</div>
            </div>
            <div className='page-content'>{content}</div>
        </div>
    )
}