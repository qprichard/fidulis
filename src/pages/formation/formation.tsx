import {PageContainer} from "../../components/page-container/page-container";

export const FormationContent = () => (
    <>
        <p>
            Fidulis Avocat est reconnu organisme de formation par la Préfecture de la région Rhône-Alpes-Auvergne sous
            le numéro 84691588969.
        </p>
        <p>
            Le cabinet mobilise toute son expertise et son expérience pour concevoir des formations sur mesure au
            bénéfice de ses clients (entreprises, associations…).
        </p>
        <p>
            Ainsi, après avoir recueilli et identifié les besoins de formation, Fidulis Avocat est en mesure d’adapter
            le contenu d’une formation en fonction de ce que souhaite ses clients.
        </p>
        <p>
            L’offre de formation peut être adaptée à un seul client et est dispensée par un professionnel connaissant
            parfaitement les problématiques traités, ce qui permet des illustrations pratiques en parallèle des
            développements théoriques de la formation.
        </p>
        <p>
            L’objectif des formations est de permettre une transmission du savoir par des échanges constructifs et des
            réflexions partagées sur les thèmes abordés.
        </p>
    </>
);

export const FormationPage = () => (
    <PageContainer
        imgSrc={`${process.env.PUBLIC_URL}/img/meeting.jpg`}
        title='Formation'
        content={<FormationContent/>}
    />
)