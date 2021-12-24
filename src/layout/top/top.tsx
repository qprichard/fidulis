import "./top.scss";
import {useNavigate} from "react-router-dom";

export const TopLayout = () => {
    const navigate = useNavigate();
    return (
        <>
        <div className="top-layout">
            <img
                src={`${process.env.PUBLIC_URL}/img/logo.png`}
                className="logo" alt='Fidulis'
                onClick={() => navigate('/')}
            />
        </div>
        <div className="top-layout-shadow"></div>
        </>
    );
}