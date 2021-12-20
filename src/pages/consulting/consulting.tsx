import "./../../common/animations/fade-in-animation.scss"
import {PageContainer} from "../../components/page-container/page-container";

export const ConsultingContent = () => (
    <>
        <p>Avant tout litige, pour éviter tout contentieux ou encore pour anticiper sur toutes difficultés susceptibles de se présenter, Fidulis Avocat accompagne ses clients au quotidien.</p>
        <p>Dans le cadre de son activité en conseil, le cabinet Fidulis Avocat, par son expertise juridique et sa réactivité, apporte à ses clients des solutions opérationnelles, pratiques et adaptées aux problématiques qu'elles rencontrent dans le domaine des relations individuelles et collectives de travail, ainsi que dans leur évolution.</p>
        <p>Les stratégies proposées par le cabinet reposent sur l'écoute, l'échange et la compréhension pour répondre au mieux aux attentes de ses clients.</p>
    </>
);

export const ConsultingButtons = () => (
    <>
    </>
);
export const ConsultingPage = () => (
    <PageContainer
        title="conseil  "
        imgSrc={`${process.env.PUBLIC_URL}/img/home.jpg`}
        content={<ConsultingContent/>}
    />
)