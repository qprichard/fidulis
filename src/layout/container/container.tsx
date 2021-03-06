import "./container.scss";
import {Navigate, Route, Routes} from "react-router-dom";
import {Home} from "../../pages/home/home";
import {CabinetPage} from "../../pages/cabinet/cabinet";
import {ConsultingPage} from "../../pages/consulting/consulting";
import {FormationPage} from "../../pages/formation/formation";
import {AuditPage} from "../../pages/audit/audit";
import {LitigationPage} from "../../pages/litigation/litigation";
import {ContactPage} from "../../pages/contact/contact";
import {MentionsPage} from "../../pages/mentions/mentions";

export const ContainerLayout = () => (
    <div className="container-layout">
        <img src={`${process.env.PUBLIC_URL}/img/background.png`} alt="" id="background"/>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/cabinet" element={<CabinetPage/>}/>
            <Route path="/conseil" element={<ConsultingPage/>}/>
            <Route path="/formation" element={<FormationPage/>}/>
            <Route path="/audit" element={<AuditPage/>}/>
            <Route path="/contentieux" element={<LitigationPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/mentions" element={<MentionsPage/>}/>
            <Route path="/" element={<Navigate replace to="/home"/>}/>
        </Routes>
    </div>
);