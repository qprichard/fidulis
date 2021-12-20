import "./page-container.scss";
import "../../common/animations/fade-in-animation.scss";

import {BaseMenu} from "../menu/menu";
import {ReactElement} from "react";

interface PageContainerProps {
    imgSrc: string;
    title: string
    content?: ReactElement;
}

export const PageContainer = ({content, imgSrc, title}: PageContainerProps) => {
    return (
        <div className="page-container fade-in-animation">
            <img src={imgSrc} className='page-img' alt="img"/>
            <div className='page-menu'>
                <BaseMenu/>
            </div>
            <div className='page-title'><div>{title.toUpperCase()}</div></div>
            <div className='page-content'>{content}</div>
        </div>
    )
}