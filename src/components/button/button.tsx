import "./button.scss";
import {ReactElement} from "react";

interface ButtonProps {
    title: string;
    subtitle?: string;
    onClick: () => void
}

export const Button = ({title, subtitle, onClick}: ButtonProps) => (
    <div className="button-container" onClick={() => onClick()}>
        <div className="button-title">{title.toUpperCase()}</div>
        {subtitle ? <div className="button-subtitle">{subtitle}</div> : null}
    </div>
);

interface ButtonListProps {
    children: ReactElement[]
}

export const ButtonList = ({children}: ButtonListProps) => (
    <div className="button-list">
        {children}
    </div>
)