import {PageContainer} from "../../components/page-container/page-container";

const CabinetContent = () => (
    <>
        <p>Fidulis Avocat, spécialisé en droit du travail et droit de la sécurité sociale accompagne au quotidien les
            employeurs en conseil comme en contentieux et au travers d'actions de formations.</p>
        <p>Le cabinet intervient dans l'ensemble des secteurs économiques, tant auprès de grandes entreprises que de PME
            et TPE mais également au sein du secteur associatif et plus particulièrement pour des associations
            intervenant dans les secteurs médico-social, l'aide à domicile, l'animation jeunesse et la culture.</p>
        <p>Fidulis Avocat a pour ambition de créer un climat de confiance propice à une collaboration durable et
            constructrice avec ses clients.</p>
        <p>Estelle Martinet a prêté serment en 2002 après avoir suivi sa formation en droit du travail (relations
            individuelles et collectives) à l'Université Paris X (Magistère de droit social et DEA de droit social,
            dirigés par Antoine Lyon-Caen). Elle intervient pendant 15 ans au sein de Cabinets reconnus en matière de
            droit du travail avant de créer sa propre structure en 2017.</p>
    </>
);
export const CabinetPage = () => {
    return (
        <PageContainer
            title='le cabinet'
            imgSrc={`${process.env.PUBLIC_URL}/img/woman.jpg`}
            content={<CabinetContent/>}
        />
    );
}