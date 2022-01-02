import "./top.scss";
import {useNavigate} from "react-router-dom";
import {Button, ButtonList} from "../../components/button/button";

export const TopLayout = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="top-layout">
                <div className='logo-container'>
                    <img
                        src={`${process.env.PUBLIC_URL}/img/logo.png`}
                        className="logo" alt='Fidulis'
                        onClick={() => navigate('/')}
                    />
                </div>
                <div className="right-content">
                        <Button
                            className="top-button"
                            title='Contact et accès'
                            onClick={() => navigate('/contact')}
                        />
                </div>
            </div>
            <div className="top-layout-shadow"></div>
        </>
    );
}