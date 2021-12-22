import "./top.scss";
import {useNavigate} from "react-router-dom";

export const TopLayout = () => {
    const navigate = useNavigate();
    return (
        <div className="top-layout">
            <div
                className="title"
                onClick={() => navigate('/')}
            >
                fi<span className="title-d">d</span>ulis<span className="title-end"> avocats</span>
            </div>
        </div>
    );
}