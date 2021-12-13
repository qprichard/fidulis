import "./container.scss";
import {Home} from "../../home/home";

export const ContainerLayout = () => (
    <div className="container-layout">
        <div id="background">fi<span className="background-d">d</span>ul</div>
        <div className="layout-content">
            <Home></Home>
        </div>
    </div>
);