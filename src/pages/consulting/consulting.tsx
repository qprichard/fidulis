import "./../../common/animations/fade-in-animation.scss"
import {PageContainer} from "../../components/page-container/page-container";
import {Button, ButtonList} from "../../components/button/button";
import {Modal, ModalContext} from "../../components/modal/modal";
import {ReactElement, useCallback, useContext} from "react";

const Modal1 = () => (
    <Modal>
        <Modal.Header>RÉDACTION <br/> DES CONTRATS <br/> DE TRAVAIL</Modal.Header>
        <Modal.Body>
            <ul>
                <li>
                    CDI (temps plein, temps partiel, ...)
                </li>
                <li>
                    CDD (temps plein, temps partiel, ...)
                </li>
                <li>
                    Contrat de chantier, ...
                </li>
            </ul>
        </Modal.Body>
    </Modal>
);

const Modal2 = () => (
    <Modal>
        <Modal.Header>RUPTURES <br/> DE CONTRAT <br/> DE TRAVAIL </Modal.Header>
        <Modal.Body>
            <ul>
                <li>
                    Rupture conventionnelle
                </li>
                <li>
                    Licenciement pour inaptitude
                </li>
                <li>
                    Licenciement pour faute simple, faute grave ou faute lourde
                </li>
                <li>
                    Licenciement pour insuffisance professionnelle
                </li>
                <li>
                    Licenciement pour motif économique (individuel, collectif)
                </li>
            </ul>
        </Modal.Body>
    </Modal>
);

const Modal4 = () => (
    <Modal>
        <Modal.Header>NÉGOCIATION <br/> ET STATUTS <br/> COLLECTIFS </Modal.Header>
        <Modal.Body>
            <ul>
                <li>
                    Construire et adapter l’ensemble des accords collectifs (notamment: durée du travail)
                </li>
                <li>
                    Engagements unilatéraux à défaut ou de préférence aux accords collectifs
                </li>
                <li>
                    Règlement intérieur
                </li>
                <li>
                    Télétravail
                </li>
                <li>
                    Charte informatique et RGPD
                </li>
            </ul>
        </Modal.Body>
    </Modal>
);


const Modal3 = () => (
    <Modal>
        <Modal.Header>ACCIDENTS DU TRAVAIL <br/> ET MALADIES <br/> PROFESSIONNELLES </Modal.Header>
        <Modal.Body>
            <ul>
                <li>
                    Accompagnement en cas de déclaration d'accident du travail ou de demande de reconnaissance de
                    maladie professionnelle
                </li>
                <li>
                    Rédaction de lettre de réserve auprès de la CPAM et de la Comission de Recours Amiable
                </li>
            </ul>
        </Modal.Body>
    </Modal>
);



const Modal5 = () => (
    <Modal>
        <Modal.Header>ÉPARGNE SALARIALE <br/> ET ACTIONNARIAT <br/> SALARIÉ </Modal.Header>
        <Modal.Body>
            <ul>
                <li>
                    Intéressement
                </li>
                <li>
                    Participation aux résultats
                </li>
                <li>
                    Plan d'épargne salariale
                </li>
                <li>
                    Actionnariat salarié
                </li>
            </ul>
        </Modal.Body>
    </Modal>
);

const Modal6 = () => (
    <Modal>
        <Modal.Header>RELATIONS <br/> AVEC <br/> L'URSAAF </Modal.Header>
        <Modal.Body>
            <ul>
                <li>
                    Cotisations sociales, avantages en nature, frais professionnels
                </li>
                <li>
                    Contrôle URSAAF
                </li>
            </ul>
        </Modal.Body>
    </Modal>
);

const Modal7 = () => (
    <Modal>
        <Modal.Header>INSTALLATION DES REPRÉSENTATNS <br/> DU PERSONNEL ET FONCTIONNEMENT <br/> DES INSTITUTIONS
        </Modal.Header>
        <Modal.Body>
            <ul>
                <li>
                    Fonctionnement des instances
                </li>
                <li>
                    Ordre du jour: rédaction et validation
                </li>
                <li>
                    Déroulement des réunions et gestion des tensions/conflits
                </li>
                <li>
                    Faire face aux demandes d'expertises
                </li>
            </ul>
        </Modal.Body>
    </Modal>
);

const ConsultingButtons = () => {
    const {setModal, setOpen} = useContext(ModalContext);

    const openModal = useCallback((modal: ReactElement) => {
        setModal(modal);
        setOpen(true);
    }, [setOpen, setModal]);

    return (
        <>
            <p className="page-subtitle">NOS DOMAINES D'INTERVENTION</p>
            <ButtonList>
                <Button
                    title="redaction des contrats de travail"
                    onClick={() => openModal(<Modal1/>)}
                />
                <Button
                    title="rupture de contrat de travail"
                    onClick={() => openModal(<Modal2/>)}

                />
                <Button
                    title="accidents du travail et maladies professionnelles"
                    onClick={() => openModal(<Modal3/>)}

                />
            </ButtonList>
            <ButtonList>
                <Button
                    title="négociation et statuts collectifs"
                    onClick={() => openModal(<Modal4/>)}

                />
                <Button
                    title="épargne salariale et actionnariat salarié"
                    onClick={() => openModal(<Modal5/>)}

                />
                <Button
                    title="relations avec l'ursaaf"
                    onClick={() => openModal(<Modal6/>)}

                />
            </ButtonList>
            <ButtonList>
                <Button
                    title="installation des représentants du personnel et fonctionnement des institutions"
                    onClick={() => openModal(<Modal7/>)}

                />
            </ButtonList>
        </>
    );
}

export const ConsultingContent = () => {
    return (
        <>
            <p>
                Avant tout litige, ou pour éviter tout contentieux, ou encore pour anticiper sur toutes difficultés
                susceptibles de se présenter, Fidulis Avocat accompagne ses clients au quotidien.
            </p>
            <p>
                Dans le cadre de son activité en conseil, le cabinet Fidulis Avocat, par son expertise juridique et sa
                réactivité, apporte à ses clients des solutions opérationnelles, pratiques et adaptées aux
                problématiques qu’elles rencontrent dans le domaine des relations individuelles et collectives de
                travail, ainsi que dans leur évolution.
            </p>
            <p>
                Les stratégies proposées par le cabinet reposent sur l’écoute, l’échange et la compréhension pour
                répondre au mieux aux attentes de ses clients.
            </p>
            <br/>
        </>
    );
}

export const ConsultingPage = () => (
    <PageContainer
        title="conseil  "
        imgSrc={`${process.env.PUBLIC_URL}/img/home.jpg`}
        content={<ConsultingContent/>}
        buttons={<ConsultingButtons/>}
    />
)