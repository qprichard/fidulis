import {PageContainer} from "../../components/page-container/page-container";
import "./audit.scss";

export const AuditContent = () => (
    <>
        <p>
            Fidulis Avocat propose des audits de conformité et des audits d’acquisition. Chaque audit est adapté aux
            besoins et aux attentes des clients. Fidulis Avocat intervient sur place au sein de l’entreprise/association
            ou via une data room.
        </p>
        <p>
            <span className="page-subtitle underline">AUDIT DE CONFORMITE</span>
            <br/>
            <br/>
            Fidulis Avocat a développé une expertise particulière pour permettre aux employeurs de s’assurer que leurs
            pratiques en matière de droit du travail et de droit de la sécurité sociale sont conformes à la
            réglementation en vigueur.
        </p>

        <p>
            <span className="page-subtitle underline">AUDIT DE D'ACQUISITION</span>
            <br/>
            <br/>
            Fidulis Avocat assiste les entreprises dans leurs opérations de fusion/acquisition pour analyser les
            pratiques sociales d’une entreprise et s’assurer de leur conformité aux règles légales et conventionnelles.
            Le cabinet travaille de concert avec les différents partenaires (experts-comptables, avocats en droit
            fiscal, droit des sociétés, droit des contrats… ) qui interviennent dans la réalisation de l’audit et met
            tout en œuvre pour assurer les délais d’exécution exigés par la nature des opérations envisagées.
        </p>
    </>
);

export const AuditPage = () => (
    <PageContainer
        imgSrc={`${process.env.PUBLIC_URL}/img/audit.jpeg`}
        className="audit-page"
        title='Audit'
        content={<AuditContent/>}
    />
);