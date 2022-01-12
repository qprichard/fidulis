import {PageContainer} from "../../components/page-container/page-container";
import {Button, ButtonList} from "../../components/button/button";
import {useCallback, useContext} from "react";
import {Modal, ModalContext} from "../../components/modal/modal";

const Modal1 = () => (
    <Modal>
        <Modal.Header>
            <div className="title">
                CONTENTIEUX INDIVIDUELS
            </div>
            <div className="subtitle">
                (Conseil de prud'hommes, Tribunal administratif, Tribunal judiciaire Pôle social, Cour d'appel,
                CNITAAT, ...)
            </div>
        </Modal.Header>
        <Modal.Body>
            <ul>
                <li>
                    Contestation de licenciement, de faute grave et de licenciement abusif – prise d’acte ou résiliation
                    judiciaire du contrat de travail
                </li>
                <li>
                    Contentieux du harcèlement moral et/ou sexuel ou de la discrimination salariale / syndicale
                </li>
                <li>
                    Contentieux de réclamation d’heures supplémentaires et remise en cause des forfaits
                </li>
                <li>
                    Contentieux de requalification des C.D.D, contrats d’intérim
                </li>
                <li>
                    Obligations de sécurité
                </li>
                <li>
                    Droit disciplinaire
                </li>
            </ul>
        </Modal.Body>
    </Modal>
);

const Modal2 = () => (
    <Modal>
        <Modal.Header>
            <div className="title">
                CONTENTIEUX COLLECTIFS
            </div>
            <div className="subtitle">
                (Conseil de prud'hommes, Tribunal judiciaire, Cour d'appel)
            </div>
        </Modal.Header>
        <Modal.Body>
            <ul>
                <li>
                    Application du statut collectif
                </li>
                <li>
                    Contentieux Prud'hommes
                </li>
                <li>
                    Contentieux administratifs relatifs aux salariés protégés,
                </li>
                <li>
                    Contentieux devant la CNITAAT (Cour Nationale de l’Incapacité et de la Tarification de l’assurance
                    des Accidents du Travail)
                </li>
                <li>
                    Contentieux en faute inexcusable devant le tribunal judiciaire Pôle social
                </li>
                <li>
                    Recours gracieux, devant la commission de recours amiable (CRA), contentieux, devant le Tribunal
                    judiciaire pôle social, contre les décisions de prise en charge au titre de la législation des
                    risques professionnels (maladie professionnelle, accident du travail)
                </li>
            </ul>
        </Modal.Body>
    </Modal>
);
export const LitigationContent = () => {
    return (
        <>
            <p>
                En l’absence de rapprochement amiable entre les parties et quand le litige est inévitable, le cabinet
                Fidulis Avocat assure la représentation d’une entreprise ou d’une association sur toute le territoire
                français tant en 1re instance qu’en appel devant les Chambres Sociales devant toutes les juridictions
                (conseil de prud’hommes : bureau de Conciliation et d’orientation, bureau de Jugement, départition…,
                tribunal judiciaire Pôle social , tribunal administratif, cour d’appel, CNITAAT….) pour les litiges
                résultant des relations entre l’employeur et le salarié.
            </p>
            <br/>

        </>
    );
};

const LitigationButtons = () => {
    const {setOpen, setModal} = useContext(ModalContext);

    const openModal1 = useCallback(() => {
        setModal(<Modal1/>);
        setOpen(true);
    }, [setOpen, setModal]);

    const openModal2 = useCallback(() => {
        setModal(<Modal2/>);
        setOpen(true);
    }, [setOpen, setModal]);

    return (
        <>
            <p className="page-subtitle">NOS DOMAINES D'INTERVENTION</p>
            <ButtonList>
                <Button
                    title="contentieux individuels"
                    onClick={openModal1}
                />
                <Button
                    title="contentieux collectifs"
                    onClick={openModal2}
                />
            </ButtonList>
        </>
    );
}

export const LitigationPage = () => (
    <PageContainer
        imgSrc={`${process.env.PUBLIC_URL}/img/litigations.jpeg`}
        title='contentieux'
        content={<LitigationContent/>}
        buttons={<LitigationButtons/>}
    />
);