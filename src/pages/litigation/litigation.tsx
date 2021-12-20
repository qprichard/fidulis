import {PageContainer} from "../../components/page-container/page-container";
import {Button, ButtonList} from "../../components/button/button";

export const LitigationContent = () => (
    <>
        <p>En l'absence de rapprochement amiable entre les parties et quand le litige est inévitable, le cabinet Fidulis Avocats assure la représentation d'une entreprise ou d'une association sur tout le territoire français tant en première instance qu'en appel devant les Chambres Sociales et devant toutes les juridictions (conseil de prud'hommes: bureau de conciliation et d'orientation, bureau de jugement, départition tribunal judiciaire Pôle social, tribunal administratif, cour d'appel, CNITAAT, ...) pour les litiges résultant des relations entre l'employeur et le salarié.</p>
        <br/>
        <p>NOS DOMAINES D'INTERVENTION</p>
        <ButtonList>
            <Button
                title="contentieux individuels"
                subtitle="(Conseil de prud'hommes, Tribunal administratif, Tribunal judiciaire Pôle social, Cour d'appel, CNITAAT, ...)"
                onClick={() => {}}
            />
            <Button
                title="contentieux collectifs"
                subtitle="(Conseil de prud'hommes, Tribunal judiciaire, Cour d'appel...)"
                onClick={() => {}}
            />
        </ButtonList>
    </>
);

export const LitigationPage = () => (
    <PageContainer
        imgSrc={`${process.env.PUBLIC_URL}/img/building.jpg`}
        title='contentieux'
        content={<LitigationContent/>}
    />
);