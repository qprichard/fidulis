import "./button.scss";
import {CSSProperties, ReactElement} from "react";

interface ButtonProps {
    title: string;
    subtitle?: string;
    onClick: () => void;
    className?: string;
    style?: CSSProperties
}

export const Button = ({title, subtitle, onClick, className, style}: ButtonProps) => (
    <div className={`button-container ${className ? className : ''}`} onClick={() => onClick()} style={style ? style : undefined}>
        <div className="button-title">{title.toUpperCase()}</div>
        {subtitle ? <div className="button-subtitle">{subtitle}</div> : null}
    </div>
);

interface ButtonListProps {
    children: ReactElement | ReactElement[]
}

export const ButtonList = ({children}: ButtonListProps) => (
    <div className="button-list">
        {children}
    </div>
)